// // ---- content (edit here) ----
// const email = "gametester013@gmail.com", github = "https://github.com/easeennn", linkedin = "https://linkedin.com/in/your-handle"; // EDIT ME
// // ---- styles ----
// const sec = "py-[clamp(48px,7vw,96px)] text-ink";
// const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
// const sub = "mt-4 max-w-[56ch] text-[1.05rem]";
// const btn = "inline-flex items-center justify-center rounded-full bg-dark px-[1.4rem] py-[.85rem] font-mono text-[.8rem] font-semibold tracking-[.06em] text-lt transition-transform hover:-translate-y-0.5";

// export default function Contact() {
//   const links: [string, string][] = [["Email", `mailto:${email}`], ["GitHub", github], ["LinkedIn", linkedin]];
//   return (
//     <section id="contact" aria-labelledby="t-ct" className={`${sec} flex flex-col items-center text-center`}>
//       <h2 id="t-ct" className={`${h2} max-w-[20ch]`}>Have something worth building?</h2>
//       <p className={sub}>Let&apos;s turn a good idea into a thoughtful digital experience.</p>
//       <div className="mt-6 flex flex-wrap justify-center gap-2.5">{links.map(([l, h]) => <a key={l} className={btn} href={h} {...(h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.toUpperCase()}</a>)}</div>
//     </section>
//   );
// }


// ---- content (edit here) ----
const email = "gametester013@gmail.com";
const github = "https://github.com/easeennn";
const linkedin = "https://linkedin.com/in/your-handle"; // EDIT ME (if needed)
const facebook = "https://facebook.com/your-handle"; // EDIT ME (e.g. https://facebook.com/easeennn)
const whatsapp = "https://wa.me/8801XXXXXXXXX"; // EDIT ME (replace with your phone number including country code)

// ---- styles ----
const sec = "py-[clamp(48px,7vw,96px)] text-ink";
const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
const sub = "mt-4 max-w-[56ch] text-[1.05rem]";
const btn = "inline-flex items-center justify-center rounded-full bg-dark px-[1.4rem] py-[.85rem] font-mono text-[.8rem] font-semibold tracking-[.06em] text-lt transition-transform hover:-translate-y-0.5";

export default function Contact() {
  const links: [string, string][] = [
    ["Email", `mailto:${email}`],
    ["GitHub", github],
    ["LinkedIn", linkedin],
    ["Facebook", facebook],
    ["WhatsApp", whatsapp],
  ];

  return (
    <section id="contact" aria-labelledby="t-ct" className={`${sec} flex flex-col items-center text-center`}>
      <h2 id="t-ct" className={`${h2} max-w-[20ch]`}>Have something worth building?</h2>
      <p className={sub}>Let&apos;s turn a good idea into a thoughtful digital experience.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {links.map(([l, h]) => (
          <a 
            key={l} 
            className={btn} 
            href={h} 
            {...(h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.toUpperCase()}
          </a>
        ))}
      </div>
    </section>
  );
}