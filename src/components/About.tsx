// ---- content (edit here) ----
const about = [
  "I'm a curious, ambitious developer who combines development, design, technology and product thinking to build useful, well-designed digital products.",
  // "[EDIT: add your personal story and experience here.]",
];
// ---- styles ----
const sec = "py-[clamp(48px,7vw,96px)] text-ink";
const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
export default function About() {
  return (
    <section id="about" aria-labelledby="t-ab" className={sec}>
      <p className={eyebrow}>ABOUT</p>
      <h2 id="t-ab" className={h2}>A developer who thinks beyond code.</h2>
      <div className="mt-6 grid max-w-[62ch] gap-4 text-[1.08rem]">{about.map((t, i) => <p key={t} className={i === about.length - 1 ? "border-l-[3px] border-red pl-4 text-ink2" : ""}>{t}</p>)}</div>
    </section>
  );
}
