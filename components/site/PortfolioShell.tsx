import Link from "next/link";
import Aurora from "@/components/Aurora";

export default function PortfolioShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070f] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Aurora />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.15),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 transition hover:text-cyan-200"
          >
            Yoni.dev
          </Link>
          <nav className="flex items-center gap-4 text-xs text-slate-200 md:gap-6 md:text-sm">
            <Link href="/" className="transition hover:text-cyan-300">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-cyan-300">
              About
            </Link>
            <Link href="/projects" className="transition hover:text-cyan-300">
              Projects
            </Link>
            <Link href="/contact" className="transition hover:text-cyan-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-14 md:px-8 md:pt-20">
        {children}
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-slate-400 md:px-8">
          <span>© {new Date().getFullYear()} Vaysse Yoni</span>
          <span className="font-mono text-[10px]">Aurora Portfolio Theme</span>
        </div>
      </footer>
    </main>
  );
}
