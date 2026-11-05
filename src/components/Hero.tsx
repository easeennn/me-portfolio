// import SafeImage from "./SafeImage";
// import { projects } from "./Projects";
// // ---- shared style strings (edit here) ----
// const card = "relative isolate overflow-hidden rounded-3xl xl:rounded-[28px]";
// const btn = "inline-flex items-center justify-center gap-2 rounded-full px-[1.4rem] py-[.85rem] font-mono text-[.8rem] font-semibold tracking-[.06em] transition-transform hover:-translate-y-0.5";
// const smH = "font-display text-[clamp(1rem,1.5vw,1.3rem)] font-extrabold uppercase leading-[1.08]";
// // ---- content (edit here) ----
// const name = "Muhammad Easin", role = "Web Developer", tagline = "Building thoughtful digital experiences.";
// const images = { hero: "/images/hero4.jpg", portrait: "/images/robo.jpg" };
// const build = ["Modern web applications", "Responsive user interfaces", "Ecommerce experiences", "AI-powered integrations", "Interactive digital experiences", "Product prototypes"];
// const tag = "absolute top-3.5 z-[3] rounded-full bg-dark px-3 py-1.5 font-mono text-xs text-lt";
// const Arrow = ({ cls = "h-[22px] w-[22px]" }: { cls?: string }) => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M7 17 17 7M8 7h9v9" /></svg>;
// export default function Hero() {
//   const p = projects[0];
//   return (
//     <section aria-label="Introduction" className=" grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-12 xl:grid-rows-[minmax(480px,1fr)_auto] xl:gap-4 [&>*]:min-w-0">
//       {/* HEADLINE */}
//       <div className="flex flex-col justify-center gap-4 p-2 md:col-span-2 xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:gap-5">
//         <div className="flex flex-wrap gap-2">{["WEB DEVELOPMENT", "UI/UX", "AI INTEGRATION"].map(t => <span key={t} className="rounded-full bg-white px-3 py-1.5 font-mono text-[.68rem] tracking-[.05em]">✱ {t}</span>)}</div>
//         <h1 className="break-words font-display text-[clamp(1.6rem,7.5vw,2.4rem)] font-extrabold uppercase leading-[1.08] md:text-[clamp(1.8rem,3.6vw,3rem)] xl:text-[clamp(1.5rem,2.4vw,3rem)]">Building the next layer of the web.</h1>
//         <p className="max-w-[42ch] text-base text-ink2">I build modern web experiences that combine thoughtful design, useful technology, and reliable engineering.</p>
//         <div className="flex flex-wrap gap-2.5"><a href="#work" className={`${btn} flex-1 bg-dark text-lt md:flex-none`}>EXPLORE MY WORK</a><a href="#contact" className={`${btn} flex-1 border-[1.5px] border-ink text-ink md:flex-none`}>CONTACT ME</a></div>
//       </div>


//       {/* CENTRAL RED VISUAL: put your photo at public/images/hero-visual.webp */}
//    <div className={`${card} aspect-[4/5] bg-red md:col-span-2 md:aspect-auto md:min-h-[460px] xl:col-span-5 xl:col-start-4 xl:row-start-1 xl:min-h-[420px] relative overflow-hidden`}>
//     <video 
//         autoPlay 
//         loop 
//         muted 
//         playsInline 
//         className="absolute inset-0 h-full w-full object-cover"
//     >
//         <source src="/images/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//     </video>
//     <span aria-hidden className="pointer-events-none absolute inset-x-0 top-[8%] z-[2] h-0.5 animate-scan bg-red mix-blend-screen shadow-[0_0_14px_#FF202B] motion-reduce:animate-none" />
//     <span className={`${tag} left-3.5`}>● SYS.READY</span><span className={`${tag} right-3.5`}>DESIGN × CODE</span>
// </div>



//       {/* PORTRAIT */}
//       <figure className={`${card} m-0 min-h-[380px] bg-dark text-lt md:min-h-[360px] xl:col-span-3 xl:col-start-1 xl:row-start-1`}>
//         <SafeImage src={images.portrait} alt={`Portrait of ${name}`} label="PORTRAIT" object-cover />
//         <figcaption className="absolute inset-x-0 bottom-0 z-[2] flex flex-col gap-1
        
    
        
//         px-4 pb-4 pt-5">
//           <b className="font-mono text-xs tracking-[.04em]">{name.toUpperCase()}</b><span className="font-display text-lg font-extrabold uppercase">{role}</span><em className="text-[.92rem] not-italic text-[#d7dbe0]">{tagline}</em>
//         </figcaption>
//       </figure>
//       {/* INFO (last on mobile) */}
//       <div className={`${card} order-last flex min-h-[210px] flex-col justify-end gap-2 bg-dark p-5 text-lt md:order-none xl:col-span-4 xl:col-start-1 xl:row-start-2`}>
//         <svg aria-hidden viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 -z-10 h-full w-full opacity-90"><defs><pattern id="g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#fff" strokeOpacity=".18" /></pattern></defs><rect width="200" height="100" fill="url(#g)" /><circle cx="150" cy="50" r="34" fill="none" stroke="#FF202B" strokeWidth="1.5" /><circle cx="150" cy="50" r="18" fill="none" stroke="#fff" strokeOpacity=".5" /><path d="M110 50h80M150 10v80" stroke="#fff" strokeOpacity=".4" /></svg>
//         <p className="font-mono text-xs text-[#b7bcc4]">CREATIVE TECHNOLOGIST</p>
//         <h2 className={smH}>Design × Engineering</h2>
//         <p className="font-mono text-[.8rem] text-red">IDEA → PLAN → DESIGN → BUILD</p>
//       </div>
//       {/* WHAT I BUILD */}
//       <div className="p-2 xl:col-span-4 xl:col-start-5 xl:row-start-2">
//         <h2 className={smH}>What I build</h2>
//         <ul className="mt-3 grid list-none grid-cols-1 gap-x-3.5 gap-y-1.5 p-0 md:grid-cols-2">{build.map(b => <li key={b} className="border-t border-ink/20 py-2 text-[.88rem] text-ink2">{b}</li>)}</ul>
//       </div>
//       {/* PROJECT PREVIEW */}
//       <a href="#work" aria-label={`View project ${p.name}`} className={`${card} group block min-h-[220px] bg-dark text-lt md:min-h-[190px] xl:col-span-4 xl:col-start-9 xl:row-start-2`}>
//         <SafeImage src={p.image} alt={`${p.name} preview`} label={p.name} />
//         <span className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-2.5 bg-gradient-to-t from-dark/95 to-transparent p-4">
//           <span><b className="block font-display text-[.95rem] uppercase">{p.name}</b><small className="font-mono text-xs text-[#cfd3d9]">{p.type}</small></span>
//           <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-red transition-transform group-hover:rotate-45"><Arrow /></span>
//         </span>
//       </a>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import SafeImage from "./SafeImage";
import { projects } from "./Projects";

// ---- shared style strings (edit here) ----
const card = "relative isolate overflow-hidden rounded-3xl xl:rounded-[28px]";
const btn = "inline-flex items-center justify-center gap-2 rounded-full px-[1.4rem] py-[.85rem] font-mono text-[.8rem] font-semibold tracking-[.06em] transition-transform hover:-translate-y-0.5";
const smH = "font-display text-[clamp(1rem,1.5vw,1.3rem)] font-extrabold uppercase leading-[1.08]";

// ---- content (edit here) ----
const name = "Muhammad Easin", role = "Web Developer", tagline = "Building thoughtful digital experiences.";
const images = { hero: "/images/hero4.jpg", portrait: "/images/me1.jpg" };
const build = ["Modern web applications", "Responsive user interfaces", "Ecommerce experiences", "AI-powered integrations", "Interactive digital experiences", "Product prototypes"];
const tag = "absolute top-3.5 z-[3] rounded-full bg-dark px-3 py-1.5 font-mono text-xs text-lt";
const Arrow = ({ cls = "h-[22px] w-[22px]" }: { cls?: string }) => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M7 17 17 7M8 7h9v9" /></svg>;

export default function Hero() {
  const p = projects[0];
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section aria-label="Introduction" className=" grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-12 xl:grid-rows-[minmax(480px,1fr)_auto] xl:gap-4 [&>*]:min-w-0">
      {/* HEADLINE */}
      <div className="flex flex-col justify-center gap-4 p-2 md:col-span-2 xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:gap-5">
        <div className="flex flex-wrap gap-2">{["WEB DEVELOPMENT", "UI/UX", "AI INTEGRATION"].map(t => <span key={t} className="rounded-full bg-white px-3 py-1.5 font-mono text-[.68rem] tracking-[.05em]">✱ {t}</span>)}</div>
        <h1 className="break-words font-display text-[clamp(1.6rem,7.5vw,2.4rem)] font-extrabold uppercase leading-[1.08] md:text-[clamp(1.8rem,3.6vw,3rem)] xl:text-[clamp(1.5rem,2.4vw,3rem)]">Building the next layer of the web.</h1>
        <p className="max-w-[42ch] text-base text-ink2">I build modern web experiences that combine thoughtful design, useful technology, and reliable engineering.</p>
        <div className="flex flex-wrap gap-2.5"><a href="#work" className={`${btn} flex-1 bg-dark text-lt md:flex-none`}>EXPLORE MY WORK</a><a href="#contact" className={`${btn} flex-1 border-[1.5px] border-ink text-ink md:flex-none`}>CONTACT ME</a></div>
      </div>


      {/* CENTRAL RED VISUAL: put your photo at public/images/hero-visual.webp */}
   <div className={`${card} aspect-[4/5] bg-red md:col-span-2 md:aspect-auto md:min-h-[460px] xl:col-span-5 xl:col-start-4 xl:row-start-1 xl:min-h-[420px] relative overflow-hidden`}>
    <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 h-full w-full object-cover"
    >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <span aria-hidden className="pointer-events-none absolute inset-x-0 top-[8%] z-[2] h-0.5 animate-scan bg-red mix-blend-screen shadow-[0_0_14px_#FF202B] motion-reduce:animate-none" />
    <span className={`${tag} left-3.5`}>● VISIONARY</span>
    <span className={`${tag} right-3.5 text-emerald-400`}>
      {time || "00:00:00"}
    </span>
</div>



      {/* PORTRAIT */}
      <figure className={`${card} m-0 min-h-[380px] bg-dark text-lt md:min-h-[360px] xl:col-span-3 xl:col-start-1 xl:row-start-1`}>
        <SafeImage src={images.portrait} alt={`Portrait of ${name}`} label="PORTRAIT" object-cover />
        <figcaption className="absolute inset-x-0 bottom-0 z-[2] flex flex-col gap-1
        
        
        px-4 pb-4 pt-5 ">
          <b className="font-mono text-xs tracking-[.04em]">{name.toUpperCase()}</b><span className="font-display text-lg font-extrabold uppercase">{role}</span><em className="text-[.92rem] not-italic text-[#d7dbe0]">{tagline}</em>
        </figcaption>
      </figure>
      {/* INFO (last on mobile) */}
      <div className={`${card} order-last flex min-h-[210px] flex-col justify-end gap-2 bg-dark p-5 text-lt md:order-none xl:col-span-4 xl:col-start-1 xl:row-start-2`}>
        <svg aria-hidden viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 -z-10 h-full w-full opacity-90"><defs><pattern id="g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#fff" strokeOpacity=".18" /></pattern></defs><rect width="200" height="100" fill="url(#g)" /><circle cx="150" cy="50" r="34" fill="none" stroke="#FF202B" strokeWidth="1.5" /><circle cx="150" cy="50" r="18" fill="none" stroke="#fff" strokeOpacity=".5" /><path d="M110 50h80M150 10v80" stroke="#fff" strokeOpacity=".4" /></svg>
        <p className="font-mono text-xs text-[#b7bcc4]">CREATIVE TECHNOLOGIST</p>
        <h2 className={smH}>Design × Engineering</h2>
        <p className="font-mono text-[.8rem] text-red">IDEA → PLAN → DESIGN → BUILD</p>
      </div>
      {/* WHAT I BUILD */}
      <div className="p-2 xl:col-span-4 xl:col-start-5 xl:row-start-2">
        <h2 className={smH}>What I build</h2>
        <ul className="mt-3 grid list-none grid-cols-1 gap-x-3.5 gap-y-1.5 p-0 md:grid-cols-2">{build.map(b => <li key={b} className="border-t border-ink/20 py-2 text-[.88rem] text-ink2">{b}</li>)}</ul>
      </div>
      {/* PROJECT PREVIEW */}
      <a href="#work" aria-label={`View project ${p.name}`} className={`${card} group block min-h-[220px] bg-dark text-lt md:min-h-[190px] xl:col-span-4 xl:col-start-9 xl:row-start-2`}>
        <SafeImage src={p.image} alt={`${p.name} preview`} label={p.name} />
        <span className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-2.5 bg-gradient-to-t from-dark/95 to-transparent p-4">
          <span><b className="block font-display text-[.95rem] uppercase">{p.name}</b><small className="font-mono text-xs text-[#cfd3d9]">{p.type}</small></span>
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-red transition-transform group-hover:rotate-45"><Arrow /></span>
        </span>
      </a>
    </section>
  );
}