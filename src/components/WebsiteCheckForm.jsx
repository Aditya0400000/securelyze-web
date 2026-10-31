"use client";

import { useId, useRef, useState } from "react";

const DOMAIN_PATTERN =
  /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

function validateWebsiteUrl(rawValue) {
  const value = rawValue.trim();

  if (!value) {
    return "Enter your website URL to continue.";
  }

  if (/\s/.test(value)) {
    return "Website URLs cannot contain spaces.";
  }

  const valueWithProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(value)
    ? value
    : `https://${value}`;

  let parsedUrl;

  try {
    parsedUrl = new URL(valueWithProtocol);
  } catch {
    return "Enter a valid website URL, such as example.com.";
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return "Use an http:// or https:// website address.";
  }

  if (!DOMAIN_PATTERN.test(parsedUrl.hostname)) {
    return "Enter a valid domain, such as example.com.";
  }

  return "";
}

function GlobeIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.9 12h16.2M12 3.75c2.15 2.2 3.3 5 3.3 8.25s-1.15 6.05-3.3 8.25c-2.15-2.2-3.3-5-3.3-8.25S9.85 5.95 12 3.75Z" />
    </svg>
  );
}

function AlertIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="7.25" />
      <path d="M10 6.4v4.15M10 13.6h.01" />
    </svg>
  );
}

const HELPER_TONES = {
  hero: "text-[#D1FAE5] lg:text-[#1F2937]",
  light: "text-[#475569]",
};

export default function WebsiteCheckForm({
  ariaLabel = "Website security check preview",
  buttonLabel = "Scan Website",
  className = "",
  helperText = "Check your website’s security configuration and discover potential issues.",
  noticeText = "URL looks valid. This is a preview only — live checks will be available when the backend is ready.",
  placeholder = "Enter domain (e.g. example.com)",
  tone = "hero",
}) {
  const inputId = useId();
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const inputRef = useRef(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function handleInputChange(event) {
    setWebsiteUrl(event.target.value);

    if (error) {
      setError("");
    }

    if (notice) {
      setNotice("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateWebsiteUrl(websiteUrl);

    if (validationError) {
      setError(validationError);
      setNotice("");
      inputRef.current?.focus();
      return;
    }

    setError("");
    setNotice(noticeText);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label={ariaLabel}
      className={className}
    >
      <div
        className={`rounded-2xl border bg-white p-1.5 shadow-[0_18px_40px_-24px_rgba(16,26,24,0.35),0_2px_8px_-4px_rgba(16,26,24,0.08)] transition-[border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none ${
          error
            ? "border-[#059669]/60 focus-within:ring-2 focus-within:ring-[#059669]/20"
            : "border-[#E2E8F0] hover:border-[#94A3B8] hover:shadow-[0_22px_46px_-25px_rgba(16,26,24,0.44),0_3px_10px_-4px_rgba(16,26,24,0.12)] focus-within:border-[#059669] focus-within:ring-2 focus-within:ring-[#10B981]/55 focus-within:hover:border-[#059669]"
        }`}
      >
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <GlobeIcon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#64748B]" />
            <label htmlFor={inputId} className="sr-only">
              Website URL
            </label>
            <input
              ref={inputRef}
              id={inputId}
              name="websiteUrl"
              type="url"
              inputMode="url"
              autoComplete="url"
              enterKeyHint="go"
              spellCheck={false}
              placeholder={placeholder}
              value={websiteUrl}
              onChange={handleInputChange}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `${helperId} ${errorId}` : helperId}
              className="h-[50px] w-full min-w-0 rounded-xl bg-transparent pl-10 pr-2.5 text-[15px] text-[#101A18] caret-[#047857] placeholder:text-[#64748B] focus:outline-none sm:h-[54px] sm:pl-11 sm:pr-3 sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex h-[50px] w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#10B981] px-5 text-[14px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_12px_28px_-16px_rgba(16,185,129,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#059669] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_16px_34px_-17px_rgba(16,185,129,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:bg-[#10B981] motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:h-[54px] sm:w-auto sm:px-5"
          >
            <span>{buttonLabel}</span>{" "}
            <span
              aria-hidden="true"
              className="text-[16px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              →
            </span>
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        <p
          id={helperId}
          className={`text-pretty text-[12px] leading-[1.6] sm:text-[12.5px] ${HELPER_TONES[tone] ?? HELPER_TONES.hero}`}
        >
          {helperText}
        </p>

        {error ? (
          <p
            id={errorId}
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-[#10B981]/35 bg-[#101A18]/95 px-3 py-2 text-[12px] font-medium leading-[1.55] text-[#D1FAE5] shadow-[0_12px_28px_-22px_rgba(0,0,0,0.9)]"
          >
            <AlertIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#D1FAE5]" />
            {error}
          </p>
        ) : null}

        {notice ? (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl border border-[#10B981]/25 bg-[#101A18]/95 px-3 py-2 text-[12px] font-medium leading-[1.55] text-[#D1FAE5] shadow-[0_12px_28px_-22px_rgba(0,0,0,0.9)]"
          >
            <span
              aria-hidden="true"
              className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981] shadow-[0_0_9px_rgba(16,185,129,0.8)]"
            />
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}
