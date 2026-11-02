import type { Metadata } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const display = Orbitron({ subsets:["latin"], variable:"--f-display", weight:["600","800"] });
const body = Inter({ subsets:["latin"], variable:"--f-body" });
const mono = JetBrains_Mono({ subsets:["latin"], variable:"--f-mono" });
export const metadata: Metadata = { title:"Muhammad Easin — Web Developer & Creative Technologist", description:"Portfolio of Muhammad Easin: web development, UI/UX and AI integration." };
export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable} overflow-x-hidden bg-bg font-body leading-normal text-ink antialiased`}>{children}</body></html>;
}
