"use client";
import { useEffect, useState } from "react";
// ---- content (edit here) ----
const logo = "EASIN.";
const available = true, availableLabel = "Open to collaborations";
const links: [string, string][] = [["HOME", "#home"], ["WORK", "#work"], ["EXPERTISE", "#expertise"], ["ABOUT", "#about"], ["CONTACT", "#contact"]];
// ---- styles ----
const btn = "inline-flex items-center justify-center gap-2 rounded-full bg-dark px-4 py-2 font-mono text-[.8rem] font-semibold tracking-[.06em] text-lt transition-transform hover:-translate-y-0.5";
const attached = "absolute inset-x-0 top-0 h-16 px-2"; // start: sits inside the hero
const floating = "fixed inset-x-0 top-3 mx-auto h-14 w-[calc(100%-clamp(24px,3.6vw,64px))] max-w-[1800px] animate-drop rounded-full border border-white/50 bg-panel/80 px-4 shadow-[0_10px_30px_rgba(17,19,24,.28)] backdrop-blur-md motion-reduce:animate-none xl:px-6"; // after scrolling: follows you
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="relative h-16">
      <header className={`z-50 flex items-center justify-between gap-3 ${stuck ? floating : attached}`}>
        <a href="#home" className="font-display text-xl font-extrabold italic">{logo}</a>
        <nav aria-label="Primary" className="hidden gap-8 xl:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="font-mono text-[.8rem] font-medium tracking-[.05em] hover:text-red">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          {available && <span className="hidden items-center gap-2 font-mono text-[.72rem] text-ink2 xl:flex"><i className="h-2 w-2 rounded-full bg-red shadow-[0_0_0_3px_rgba(255,32,43,.25)]" />{availableLabel}</span>}
          <a href="#contact" className={btn}>CONTACT</a>
          <button aria-expanded={open} aria-controls="mm" aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl bg-dark text-lg text-lt xl:hidden">{open ? "✕" : "☰"}</button>
        </div>
        {open && (
          <nav id="mm" aria-label="Mobile" className="absolute inset-x-0 top-[calc(100%+8px)] z-20 flex flex-col rounded-[20px] bg-dark p-2.5 xl:hidden">
            {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-white/10 px-4 py-3.5 font-mono text-[.9rem] font-semibold text-lt last:border-0">{l}</a>)}
          </nav>)}
      </header>
    </div>
  );
}
