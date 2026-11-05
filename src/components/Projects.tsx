// // import SafeImage from "./SafeImage";
// // // ---- content (edit here) ----
// // type Project = { slug: string; name: string; type: string; description: string; role: string; tech: string[]; status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE"; image: string; demo?: string; source?: string };
// // // Status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE" (only use LIVE if truly live). Hero preview shows the first project.
// // export const projects: Project[] = [
// //   { slug: "chawmen", name: "CHAWMEN", type: "Virtual Shopping Mall", description: "A men's fashion marketplace and digital brand ecosystem focused on product discovery, brand presentation and ecommerce UX.", role: "Frontend development", tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"], status: "IN DEVELOPMENT", image: "/images/chawmen.png" },
// //   { slug: "zen-c", name: "ZEN-C SOLUTIONS", type: "Agency website", description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.", role: "Design & frontend engineering", tech: ["Next.js", "Tailwind CSS", "Motion"], status: "CONCEPT", image: "/images/zenc.jpeg" },
// //   { slug: "websource-it", name: "WEBSOURCE.IT", type: "Agency website", description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.", role: "Design & frontend engineering", tech: ["Next.js", "Tailwind CSS", "Motion"], status: "CONCEPT", image: "/images/websource-it.jpeg" },
// //   { slug: "a1-sports", name: "A1 SPORTS", type: "Sports ecommerce", description: "A sports-focused ecommerce concept covering product browsing, category structure and the shopping experience.", role: "Frontend development", tech: ["Next.js", "TypeScript", "Tailwind CSS"], status: "CONCEPT", image: "/images/a1sports.jpeg" },
// //   { slug: "Ice-Land Coffee", name: "ICE-LAND COFFEE", type: "Coffee shop website", description: "A modern coffee shop website concept: visual design, user experience and online ordering.", role: "Design & frontend engineering", tech: ["Next.js", "TypeScript", "Tailwind CSS"], status: "CONCEPT", image: "/images/ice-land-coffee.png" },
// //   { slug: "mandzdental", name: "Dental Clinic", type: "Clinic website", description: "A modern dental clinic website concept: visual design, user experience and online booking.", role: "Design & frontend engineering", tech: ["Next.js", "TypeScript", "Tailwind CSS"], status: "CONCEPT", image: "/images/mandzdental.png" },
// //   { slug: "rahma Granite", name: "RAHMA GRANITE", type: "Granite supplier website", description: "A modern granite supplier website concept: visual design, user experience and online ordering.", role: "Design & frontend engineering", tech: ["Next.js", "TypeScript", "Tailwind CSS"], status: "CONCEPT", image: "/images/rahma-granite.png" },
// //   { slug: "nemontonno", name: "NEMONTONNO", type: "Invitation platform", description: "A digital invitation platform concept: invitation design, creator experience and elegant presentation.", role: "Product, design & frontend", tech: ["Next.js", "TypeScript", "GSAP"], status: "CONCEPT", image: "/images/nemontonno.png" },
// // ];
// // // ---- styles ----
// // const sec = "py-[clamp(48px,7vw,96px)] text-ink";
// // const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
// // const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
// // const sub = "mt-4 max-w-[56ch] text-[1.05rem]";
// // export default function Projects() {
// //   return (
// //     <section id="work" aria-labelledby="t-work" className={sec}>
// //       <p className={eyebrow}>SELECTED WORK / 01—04</p>
// //       <h2 id="t-work" className={h2}>Selected work</h2>
// //       <p className={sub}>Experiments and products built at the intersection of design and technology.</p>
// //       <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
// //         {projects.map((p, i) => (
// //           <article key={p.slug} className="flex flex-col overflow-hidden rounded-[26px] bg-panel">
// //             <div className="relative aspect-[16/10] bg-dark"><SafeImage src={p.image} alt={`${p.name} screenshot`} label={p.name} /></div>
// //             <div className="flex flex-col gap-3 p-5">
// //               <div className="flex flex-wrap items-center justify-between gap-2.5"><span className="font-mono text-xs">0{i + 1} · {p.type.toUpperCase()}</span><span className={`rounded-full px-3 py-1 font-mono text-[.68rem] text-lt ${p.status === "LIVE" ? "bg-red" : "bg-dark"}`}>{p.status}</span></div>
// //               <h3 className="font-display text-[1.4rem] font-extrabold uppercase">{p.name}</h3>
// //               <p className="text-ink2">{p.description}</p>
// //               <p className="font-mono text-xs">ROLE: {p.role}</p>
// //               <ul className="flex list-none flex-wrap gap-1.5 p-0">{p.tech.map(t => <li key={t} className="rounded-full border border-ink px-3 py-0.5 font-mono text-[.7rem]">{t}</li>)}</ul>
// //               {(p.demo || p.source) && <div className="flex gap-4 font-semibold underline">{p.demo && <a href={p.demo}>Demo ↗</a>}{p.source && <a href={p.source}>Source ↗</a>}</div>}
// //             </div>
// //           </article>))}
// //       </div>
// //     </section>
// //   );
// // }


// import SafeImage from "./SafeImage";

// // ---- content (edit here) ----
// type Project = {
//   slug: string;
//   name: string;
//   type: string;
//   description: string;
//   role: string;
//   tech: string[];
//   status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE";
//   image: string;
//   demo?: string;
//   source?: string;
// };

// // Status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE" (only use LIVE if truly live). Hero preview shows the first project.
// export const projects: Project[] = [
//   {
//     slug: "chawmen",
//     name: "CHAWMEN",
//     type: "Virtual Shopping Mall",
//     description: "A men's fashion marketplace and digital brand ecosystem focused on product discovery, brand presentation and ecommerce UX.",
//     role: "Frontend development",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
//     status: "LIVE",
//     image: "/images/chawmen.png",
//     demo: "https://chawmen.com",
//     // source: "https://github.com/easeennn/chawmen"
//   },
//   {
//     slug: "zen-c",
//     name: "ZEN-C SOLUTIONS",
//     type: "Agency website",
//     description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.",
//     role: "Design & frontend engineering",
//     tech: ["Next.js", "Tailwind CSS", "Motion"],
//     status: "LIVE",
//     image: "/images/zenc.jpeg",
//     demo: "https://zencsolutions.vercel.app/",
//     // source: "https://github.com/easeennn/zen-c-solutions"
//   },
//    {
//     slug: "rahma Granite",
//     name: "RAHMA GRANITE",
//     type: "Granite supplier website",
//     description: "A modern granite supplier website concept: visual design, user experience and online ordering.",
//     role: "Design & frontend engineering",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     status: "LIVE",
//     image: "/images/rahma.jpeg",
//     demo: "https://rahma-granites.vercel.app/",
//     // source: "https://github.com/easeennn/rahma-granite"
//   },
//    {
//     slug: "Ice-Land Coffee",
//     name: "ICE-LAND COFFEE",
//     type: "Coffee shop website",
//     description: "A modern coffee shop website concept: visual design, user experience and online ordering.",
//     role: "Design & frontend engineering",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     status: "LIVE",
//     image: "/images/images.jfif",
//     demo: "https://icelandcoffee.vercel.app/",
//     // source: "https://github.com/easeennn/ice-land-coffee"
//   },
//   {
//     slug: "websource-it",
//     name: "WEBSOURCE.IT",
//     type: "Agency website",
//     description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.",
//     role: "Design & frontend engineering",
//     tech: ["Next.js", "Tailwind CSS", "Motion"],
//     status: "LIVE",
//     image: "/images/webs.png",
//     demo: "https://web-source-it.vercel.app/",
//     // source: "https://github.com/easeennn/websource-it"
//   },
  
//   {
//     slug: "a1-sports",
//     name: "A1 SPORTS",
//     type: "Sports ecommerce",
//     description: "A sports-focused ecommerce concept covering product browsing, category structure and the shopping experience.",
//     role: "Frontend development",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     status: "CONCEPT",
//     image: "/images/a1sports.jpeg",
//     demo: "https://a1sports.vercel.app/",
//     // source: "https://github.com/easeennn/a1-sports"
//   },
 
//   {
//     slug: "mandzdental",
//     name: "Dental Clinic",
//     type: "Clinic website",
//     description: "A modern dental clinic website concept: visual design, user experience and online booking.",
//     role: "Design & frontend engineering",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     status: "LIVE",
//     image: "/images/logo.avif",
//     demo: "https://dentalpointbyzenc.vercel.app/",
//     // source: "https://github.com/easeennn/mandz-dental"
//   },
 
//   {
//     slug: "nemontonno",
//     name: "NEMONTONNO",
//     type: "Invitation platform",
//     description: "A digital invitation platform concept: invitation design, creator experience and elegant presentation.",
//     role: "Product, design & frontend",
//     tech: ["Next.js", "TypeScript", "GSAP"],
//     status: "IN DEVELOPMENT",
//     image: "/images/nemontonno.png",
//     demo: "https://nemontonno.vercel.app",
//     // source: "https://github.com/easeennn/nemontonno"
//   },
// ];

// // ---- styles ----
// const sec = "py-[clamp(48px,7vw,96px)] text-ink";
// const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
// const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
// const sub = "mt-4 max-w-[56ch] text-[1.05rem]";

// export default function Projects() {
//   return (
//     <section id="work" aria-labelledby="t-work" className={sec}>
//       <p className={eyebrow}>SELECTED WORK </p>
//       <h2 id="t-work" className={h2}>Selected work</h2>
//       <p className={sub}>Experiments and products built at the intersection of design and technology.</p>
//       <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
//         {projects.map((p, i) => (
//           <article key={p.slug} className="flex flex-col overflow-hidden rounded-[26px] bg-panel">
//             <div className="relative aspect-[16/10] bg-dark">
//               <SafeImage src={p.image} alt={`${p.name} screenshot`} label={p.name} />
//             </div>
//             <div className="flex flex-col gap-3 p-5">
//               <div className="flex flex-wrap items-center justify-between gap-2.5">
//                 <span className="font-mono text-xs">0{i + 1} · {p.type.toUpperCase()}</span>
//                 <span className={`rounded-full px-3 py-1 font-mono text-[.68rem] text-lt ${p.status === "LIVE" ? "bg-red" : "bg-dark"}`}>{p.status}</span>
//               </div>
//               <h3 className="font-display text-[1.4rem] font-extrabold uppercase">{p.name}</h3>
//               <p className="text-ink2">{p.description}</p>
//               <p className="font-mono text-xs">ROLE: {p.role}</p>
//               <ul className="flex list-none flex-wrap gap-1.5 p-0">
//                 {p.tech.map(t => (
//                   <li key={t} className="rounded-full border border-ink px-3 py-0.5 font-mono text-[.7rem]">{t}</li>
//                 ))}
//               </ul>
//               {(p.demo || p.source) && (
//                 <div className="mt-2 flex gap-4 font-mono text-xs font-semibold">
//                   {p.demo && (
//                     <a href={p.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                       Live Demo ↗
//                     </a>
//                   )}
//                   {p.source && (
//                     <a href={p.source} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                       Source Code ↗
//                     </a>
//                   )}
//                 </div>
//               )}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import SafeImage from "./SafeImage";

// ---- content (edit here) ----
type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  role: string;
  tech: string[];
  status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE";
  image: string;
  demo?: string;
  source?: string;
};

// Status: "CONCEPT" | "IN DEVELOPMENT" | "LIVE" (only use LIVE if truly live). Hero preview shows the first project.
export const projects: Project[] = [
  {
    slug: "chawmen",
    name: "CHAWMEN",
    type: "Virtual Shopping Mall",
    description: "A men's fashion marketplace and digital brand ecosystem focused on product discovery, brand presentation and ecommerce UX.",
    role: "Frontend development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    status: "LIVE",
    image: "/images/chawmen.png",
    demo: "https://chawmen.com",
    // source: "https://github.com/easeennn/chawmen"
  },
  {
    slug: "zen-c",
    name: "ZEN-C SOLUTIONS",
    type: "Agency website",
    description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.",
    role: "Design & frontend engineering",
    tech: ["Next.js", "Tailwind CSS", "Motion"],
    status: "LIVE",
    image: "/images/zenc.jpeg",
    demo: "https://zencsolutions.vercel.app/",
    // source: "https://github.com/easeennn/zen-c-solutions"
  },
   {
    slug: "rahma Granite",
    name: "RAHMA GRANITE",
    type: "Granite supplier website",
    description: "A modern granite supplier website concept: visual design, user experience and online ordering.",
    role: "Design & frontend engineering",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "LIVE",
    image: "/images/rahma.jpeg",
    demo: "https://rahma-granites.vercel.app/",
    // source: "https://github.com/easeennn/rahma-granite"
  },
   {
    slug: "Ice-Land Coffee",
    name: "ICE-LAND COFFEE",
    type: "Coffee shop website",
    description: "A modern coffee shop website concept: visual design, user experience and online ordering.",
    role: "Design & frontend engineering",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "LIVE",
    image: "/images/images.jfif",
    demo: "https://icelandcoffee.vercel.app/",
    // source: "https://github.com/easeennn/ice-land-coffee"
  },
  {
    slug: "websource-it",
    name: "WEBSOURCE.IT",
    type: "Agency website",
    description: "A premium digital solutions agency website concept: visual direction, responsive design and motion.",
    role: "Design & frontend engineering",
    tech: ["Next.js", "Tailwind CSS", "Motion"],
    status: "LIVE",
    image: "/images/webs.png",
    demo: "https://web-source-it.vercel.app/",
    // source: "https://github.com/easeennn/websource-it"
  },
  
  {
    slug: "a1-sports",
    name: "A1 SPORTS",
    type: "Sports ecommerce",
    description: "A sports-focused ecommerce concept covering product browsing, category structure and the shopping experience.",
    role: "Frontend development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "CONCEPT",
    image: "/images/a1sports.jpeg",
    demo: "https://a1sports.vercel.app/",
    // source: "https://github.com/easeennn/a1-sports"
  },
 
  {
    slug: "mandzdental",
    name: "Dental Clinic",
    type: "Clinic website",
    description: "A modern dental clinic website concept: visual design, user experience and online booking.",
    role: "Design & frontend engineering",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "LIVE",
    image: "/images/logo.avif",
    demo: "https://dentalpointbyzenc.vercel.app/",
    // source: "https://github.com/easeennn/mandz-dental"
  },
 
  {
    slug: "nemontonno",
    name: "NEMONTONNO",
    type: "Invitation platform",
    description: "A digital invitation platform concept: invitation design, creator experience and elegant presentation.",
    role: "Product, design & frontend",
    tech: ["Next.js", "TypeScript", "GSAP"],
    status: "IN DEVELOPMENT",
    image: "/images/nemontonno.png",
    demo: "https://nemontonno.vercel.app",
    // source: "https://github.com/easeennn/nemontonno"
  },
];

// ---- styles ----
const sec = "py-[clamp(48px,7vw,96px)] text-ink";
const eyebrow = "mb-2.5 font-mono text-xs tracking-[.04em] text-ink2";
const h2 = "max-w-[22ch] font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-extrabold uppercase leading-[1.08]";
const sub = "mt-4 max-w-[56ch] text-[1.05rem]";

export default function Projects() {
  return (
    <section id="work" aria-labelledby="t-work" className={sec}>
      <p className={eyebrow}>SELECTED WORK </p>
      <h2 id="t-work" className={h2}>Selected work</h2>
      <p className={sub}>Experiments and products built at the intersection of design and technology.</p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
        {projects.map((p, i) => (
          <article key={p.slug} className="flex flex-col overflow-hidden rounded-[26px] bg-panel">
            <div className="relative aspect-[16/10] bg-dark">
              <SafeImage src={p.image} alt={`${p.name} screenshot`} label={p.name} />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="font-mono text-xs">0{i + 1} · {p.type.toUpperCase()}</span>
                <span className={`rounded-full px-3 py-1 font-mono text-[.68rem] text-lt ${p.status === "LIVE" ? "bg-red" : "bg-dark"}`}>{p.status}</span>
              </div>
              <h3 className="font-display text-[1.4rem] font-extrabold uppercase">{p.name}</h3>
              <p className="text-ink2">{p.description}</p>
              <p className="font-mono text-xs">ROLE: {p.role}</p>
              <ul className="flex list-none flex-wrap gap-1.5 p-0">
                {p.tech.map(t => (
                  <li key={t} className="rounded-full border border-ink px-3 py-0.5 font-mono text-[.7rem]">{t}</li>
                ))}
              </ul>
              {(p.demo || p.source) && (
                <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs font-semibold">
                  {p.demo && (
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 text-lt transition-transform hover:-translate-y-0.5 shadow-md"
                    >
                      <span>Live Demo</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lt/10 text-[10px]">↗</span>
                    </a>
                  )}
                  {p.source && (
                    <a 
                      href={p.source} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 rounded-full border border-dark/20 px-4 py-2 text-ink transition-transform hover:-translate-y-0.5 hover:border-dark"
                    >
                      <span>Source Code</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}