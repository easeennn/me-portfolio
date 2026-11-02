// ---- content (edit here) ----
const skills = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive development"] },
  { title: "Backend & APIs", items: ["API integration", "Server-side functionality", "Authentication", "Database integration"] },
  { title: "Design", items: ["UI/UX", "Interface design", "Responsive layouts", "Design systems", "Interaction design"] },
  { title: "AI & product thinking", items: ["AI API integration", "Automation concepts", "Workflow design", "Product planning", "Technical research"] },
];
// ---- styles ----
const sec = "py-[clamp(48px,7vw,96px)] text-ink";
const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
export default function Skills() {
  return (
    <section id="expertise" aria-labelledby="t-ex" className={sec}>
      <p className={eyebrow}>EXPERTISE</p>
      <h2 id="t-ex" className={h2}>The tools. The thinking. The build.</h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
        {skills.map(s => (
          <div key={s.title} className="rounded-3xl bg-dark p-6 text-lt"><h3 className="mb-4 font-display text-[1.05rem] font-extrabold uppercase">{s.title}</h3>
            <ul className="list-none p-0">{s.items.map(i => <li key={i} className="border-t border-white/15 py-2 text-[#d7dbe0]">{i}</li>)}</ul></div>))}
      </div>
    </section>
  );
}
