"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/about/AboutIcons";
import { SUPPORT_EMAIL } from "@/lib/siteLinks";
import "./ContactForm.css";

const SUBJECTS = ["General Inquiry", "Technical Support", "Platform Question", "Other"];
const LABEL_CLASSES = "mb-2 block text-[13px] font-semibold tracking-[-0.01em] text-charcoal";
const CONTROL_CLASSES = "contact-form-control";
const FIELD_NAMES = ["name", "email", "subject", "message"];
const CONTACT_EMAIL = SUPPORT_EMAIL?.trim() ?? "";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HAS_CONTACT_EMAIL = CONTACT_EMAIL.length > 0 && EMAIL_PATTERN.test(CONTACT_EMAIL);

function getFieldError(field) {
  if (!field.value.trim()) {
    return field.name === "subject" ? "Choose a subject." : "Please complete this field.";
  }
  if (field.name === "email" && (field.validity.typeMismatch || !EMAIL_PATTERN.test(field.value.trim()))) {
    return "Enter a valid email address.";
  }
  if (field.name === "subject" && !SUBJECTS.includes(field.value)) return "Choose a subject.";
  if (field.validity.tooLong) return "Please shorten this field.";
  return "";
}

function buildMailtoUrl(recipient, subject, body) {
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const releaseFrame = useRef(null);
  const submitting = useRef(false);
  const editedFields = useRef(new Set());
  const attemptedSubmit = useRef(false);

  useEffect(() => {
    // Keep native submission blocked until the local handler is hydrated.
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(releaseFrame.current);
    };
  }, []);

  function validateField(field) {
    if (!attemptedSubmit.current && !editedFields.current.has(field.name)) return;
    const error = getFieldError(field);
    setErrors((current) => ({ ...current, [field.name]: error }));
  }

  function handleFieldBlur(event) {
    if (FIELD_NAMES.includes(event.target.name)) validateField(event.target);
  }

  function handleFieldChange(event) {
    const field = event.target;
    if (!FIELD_NAMES.includes(field.name)) return;
    editedFields.current.add(field.name);
    setStatus("");
    if (errors[field.name]) validateField(field);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!ready || submitting.current) return;

    const form = event.currentTarget;
    attemptedSubmit.current = true;
    const fields = FIELD_NAMES.map((name) => form.elements.namedItem(name));
    const nextErrors = Object.fromEntries(fields.map((field) => [field.name, getFieldError(field)]));
    setErrors(nextErrors);
    setStatus("");
    const firstInvalid = fields.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (!HAS_CONTACT_EMAIL) {
      setStatus("Contact form email recipient is not configured. Please try again later.");
      return;
    }

    const [nameField, emailField, subjectField, messageField] = fields;
    const subject = subjectField.value;
    const body = [
      `Name: ${nameField.value.trim()}`,
      `Email: ${emailField.value.trim()}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      messageField.value.trim(),
    ].join("\n");

    submitting.current = true;
    setIsSubmitting(true);
    setStatus("Opening your email app with your message ready. Your entries will stay here.");
    window.location.href = buildMailtoUrl(CONTACT_EMAIL, subject, body);
    releaseFrame.current = window.requestAnimationFrame(() => {
      submitting.current = false;
      setIsSubmitting(false);
      releaseFrame.current = null;
    });
  }

  function fieldProps(name) {
    return {
      id: `contact-${name}`,
      name,
      required: true,
      disabled: isSubmitting,
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    };
  }

  function errorMessage(name) {
    return errors[name] ? (
      <p id={`contact-${name}-error`} role="alert" className="mt-2 text-xs font-medium text-[var(--status-high-text)]">
        {errors[name]}
      </p>
    ) : null;
  }

  return (
    <section aria-labelledby="contact-form-heading" className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald via-emerald-light to-transparent" />

      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle pb-6">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">CONTACT FORM</p>
          <h2 id="contact-form-heading" className="mt-3 text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.035em] text-charcoal sm:text-[1.85rem]">Send us a message</h2>
          <p className="mt-3 max-w-[34rem] text-[13.5px] leading-[1.7] text-text-secondary">Tell us what you need help with. We&apos;ll make it easy to get your message ready to send.</p>
        </div>
        <p className="pt-1 text-[11px] leading-relaxed text-text-muted">All fields are required</p>
      </div>

      <form noValidate aria-labelledby="contact-form-heading" aria-describedby="contact-delivery-note" aria-busy={isSubmitting} className="mt-8 space-y-6" onSubmit={handleSubmit} onBlur={handleFieldBlur} onChange={handleFieldChange}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={LABEL_CLASSES}>Name</label>
            <input {...fieldProps("name")} type="text" autoComplete="name" maxLength={120} placeholder="Your name" className={`input-field ${CONTROL_CLASSES}`} />
            {errorMessage("name")}
          </div>
          <div>
            <label htmlFor="contact-email" className={LABEL_CLASSES}>Email</label>
            <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" maxLength={254} placeholder="you@example.com" className={`input-field ${CONTROL_CLASSES}`} />
            {errorMessage("email")}
          </div>
        </div>
        <div>
          <label htmlFor="contact-subject" className={LABEL_CLASSES}>Subject</label>
          <select {...fieldProps("subject")} defaultValue="" className={`select-field ${CONTROL_CLASSES}`}>
            <option value="" disabled>Select a topic</option>
            {SUBJECTS.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
          </select>
          {errorMessage("subject")}
        </div>
        <div>
          <label htmlFor="contact-message" className={LABEL_CLASSES}>Message</label>
          <textarea {...fieldProps("message")} rows={6} maxLength={10000} placeholder="Share the page, feature, or question you have in mind." className={`textarea-field ${CONTROL_CLASSES}`} />
          {errorMessage("message")}
        </div>
        <div className="rounded-xl border border-emerald/15 bg-emerald/[0.04] px-4 py-3.5">
          <p id="contact-delivery-note" className="text-[12px] leading-[1.65] text-text-secondary">
            Clicking <span className="font-semibold text-dark-green">Send Message</span> opens your email app with your message ready. You&apos;ll need to press <span className="font-semibold text-dark-green">Send</span> there to finish.
          </p>
        </div>
        <div className="border-t border-border-subtle pt-6">
          <button type="submit" disabled={!ready || isSubmitting} aria-busy={isSubmitting} aria-describedby="contact-delivery-note" className="btn-primary min-w-[10rem] w-full motion-reduce:transition-none! sm:w-auto">
            {isSubmitting ? "Opening…" : "Send Message"}
            <ArrowRightIcon className="size-4" />
          </button>
          <p role="status" aria-live="polite" aria-atomic="true" className="mt-4 min-h-[3rem] text-[13px] leading-[1.75] text-text-secondary sm:min-h-[1.5rem]">
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
