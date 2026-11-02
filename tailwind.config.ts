import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    screens: { md: "768px", xl: "1200px" }, // base = mobile, md = tablet, xl = desktop
    colors: { bg: "#8493A1", panel: "#AAB4BF", ink: "#111318", ink2: "#414954", red: "#FF202B", dark: "#111216", lt: "#F5F5F5" },
    fontFamily: { display: ["var(--f-display)", "sans-serif"], body: ["var(--f-body)", "system-ui", "sans-serif"], mono: ["var(--f-mono)", "monospace"] },
    keyframes: { drop: { from: { transform: "translateY(-16px)", opacity: "0" }, to: { transform: "none", opacity: "1" } }, scan: { "0%,100%": { top: "8%" }, "50%": { top: "92%" } } },
    animation: { drop: "drop .3s ease-out", scan: "scan 5s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
