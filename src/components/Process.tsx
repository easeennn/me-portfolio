// ---- content (edit here) ----
const steps = ["Understand the problem.", "Plan the product and technical structure.", "Design the user experience.", "Build the solution.", "Test, refine, and improve."];
// ---- styles ----
const sec = "py-[clamp(48px,7vw,96px)] text-ink";
const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
export default function Process() {
  return (
    <section aria-labelledby="t-pr" className={sec}>
      <p className={eyebrow}>MY APPROACH</p>
      <h2 id="t-pr" className={h2}>From idea to interface.</h2>
      <ol className="mt-8 grid list-none grid-cols-1 border-l-[3px] border-ink p-0 md:grid-cols-5 md:gap-4 md:border-l-0">
        {steps.map((s, i) => (
          <li key={s} className="relative pb-6 pl-5 md:border-t-[3px] md:border-ink md:pb-0 md:pl-0 md:pt-4">
            <i aria-hidden className="absolute -left-[9px] top-1.5 h-[15px] w-[15px] rounded-full bg-red md:hidden" />
            <span className="font-display text-[1.4rem] font-extrabold text-red">0{i + 1}</span><p className="mt-1.5 font-medium">{s}</p>
          </li>))}
      </ol>
    </section>
  );
}
