import { CALLOUT_TONES } from "./docsStyles";

function Paragraph({ text }) {
  return (
    <p className="text-[14px] leading-[1.8] text-[#475569] sm:text-[14.5px]">
      {text}
    </p>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => {
        const isObject = typeof item === "object" && item !== null;

        return (
          <li
            key={`${isObject ? item.label : item}-${index}`}
            className="flex gap-3 text-[14px] leading-[1.75] text-[#475569] sm:text-[14.5px]"
          >
            <span
              aria-hidden="true"
              className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#34D399]"
            />
            <span className="min-w-0">
              {isObject ? (
                <>
                  <strong className="font-semibold text-[#183B32]">
                    {item.label}
                  </strong>
                  {item.text ? ` — ${item.text}` : null}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Steps({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((step, index) => (
        <li
          key={`${step.title}-${index}`}
          className="flex gap-3 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] p-3.5"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D1FAE5] bg-[#ECFDF5] text-[9px] font-bold tabular-nums text-[#047857]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-[#183B32]">
              {step.title}
            </p>
            {step.description ? (
              <p className="mt-1 text-[13px] leading-[1.7] text-[#64748B]">
                {step.description}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#F8FAFC]">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b border-[#E2E8F0] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className="border-b border-[#F1F5F9] last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`px-4 py-3.5 align-top leading-[1.65] ${
                    cellIndex === 0
                      ? "font-semibold text-[#183B32]"
                      : "text-[#64748B]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ tone = "info", title, text }) {
  const styles = CALLOUT_TONES[tone] ?? CALLOUT_TONES.info;

  return (
    <div className={`rounded-xl border p-4 ${styles.container}`}>
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className={`mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`}
        />
        <div>
          {title ? (
            <p className={`text-[12px] font-semibold ${styles.title}`}>
              {title}
            </p>
          ) : null}
          <p className={`mt-1 text-[12.5px] leading-[1.7] ${styles.text}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Faq({ items }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
          className="group rounded-xl border border-[#E2E8F0] bg-white open:border-[#D1FAE5]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
            <span className="text-[13px] font-semibold text-[#183B32]">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-[17px] font-light leading-none text-[#64748B] transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="border-t border-[#F1F5F9] px-4 py-3.5 text-[13px] leading-[1.75] text-[#64748B]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "paragraph":
      return <Paragraph text={block.text} />;
    case "list":
      return <List items={block.items} />;
    case "steps":
      return <Steps items={block.items} />;
    case "table":
      return <Table headers={block.headers} rows={block.rows} />;
    case "callout":
      return (
        <Callout tone={block.tone} title={block.title} text={block.text} />
      );
    case "faq":
      return <Faq items={block.items} />;
    default:
      return null;
  }
}

export default function DocsArticle({ topic }) {
  return (
    <div>
      {topic.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 ${
            index === 0
              ? ""
              : "mt-10 border-t border-[#F1F5F9] pt-9 sm:mt-12 sm:pt-10"
          }`}
        >
          <h2 className="flex items-start gap-3 text-[1.35rem] font-semibold tracking-[-0.035em] text-[#183B32] sm:text-[1.5rem]">
            <span
              aria-hidden="true"
              className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#34D399]"
            />
            <span>{section.title}</span>
          </h2>

          <div className="mt-4 space-y-4 pl-0 sm:mt-5 sm:pl-[1.125rem]">
            {section.blocks.map((block, blockIndex) => (
              <Block key={`${block.type}-${blockIndex}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
