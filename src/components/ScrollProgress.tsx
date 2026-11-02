"use client";
import { useEffect, useState } from "react";
// Small bottom-right % readout (top progress bar removed). Delete <ScrollProgress /> in page.tsx to remove it.
export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => { const h = document.documentElement, m = h.scrollHeight - h.clientHeight; setP(m > 0 ? Math.round((h.scrollTop / m) * 100) : 0); };
    on(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <span aria-hidden className="fixed bottom-4 right-6 z-[60] hidden items-center gap-2 rounded-full border border-white/15 bg-dark px-3 py-1.5 font-mono text-xs text-lt md:flex">
      <i className="h-[7px] w-[7px] rounded-full bg-red shadow-[0_0_8px_#FF202B]" />SCROLL {String(p).padStart(3, "0")}%
    </span>
  );
}
