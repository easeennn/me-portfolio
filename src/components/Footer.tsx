// ---- content (edit here) ----
const name = "Muhammad Easin", role = "Web Developer";
export default function Footer() {
  return <footer className="px-4 py-8 text-center font-mono text-xs text-ink">© {new Date().getFullYear()} {name} — {role}</footer>;
}
