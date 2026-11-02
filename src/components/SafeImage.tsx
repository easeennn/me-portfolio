"use client";
import Image from "next/image";
import { useState } from "react";
export default function SafeImage({ src, alt, label, priority = false, contain = false }: { src: string; alt: string; label: string; priority?: boolean; contain?: boolean }) {
  const [bad, setBad] = useState(false);
  if (bad) return (
    <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-black/25 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.06)_0_2px,transparent_2px_14px)] p-4 text-center font-mono text-[.7rem] text-white/80">
      <span>{label}<br />{src}</span>
    </div>);
  return <Image src={src} alt={alt} fill priority={priority} sizes="(max-width:768px) 100vw, 45vw" className={contain ? "object-contain object-bottom" : "object-cover"} onError={() => setBad(true)} />;
}
