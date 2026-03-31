import Link from "next/link";
import PortfolioShell from "@/components/site/PortfolioShell";

export default function Home() {
  return (
    <PortfolioShell>
      <section className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
            Portfolio 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Vaysse Yoni
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Etudiant en BUT Informatique
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-slate-200 md:text-base">
            Je recherche une alternance en developpement informatique. J'aime concevoir
            des applications web, bien structurées.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Me contacter
            </Link>
          </div>
        </article>

        <div className="grid gap-4">
          
          <article className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-5 backdrop-blur-xl transition hover:-translate-y-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyan-200">Objectif</p>
            <p className="mt-2 text-sm text-slate-100">
              Integrer une equipe en alternance et contribuer à des projets réels.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-slate-300">Parcours</p>
            <p className="mt-2 text-sm text-slate-100">BUT Informatique - UPEC (en cours)</p>
            <p className="text-sm text-slate-300">Bac general Maths / NSI</p>
          </article>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <Link
          href="/about"
          className="group rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-violet-300/60 hover:bg-white/[0.1]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200">About</p>
          <h2 className="mt-3 text-lg font-medium">Mon profil complet</h2>
          <p className="mt-2 text-sm text-slate-300">Formation, langues, qualites, centres d interet.</p>
          <p className="mt-4 text-sm text-violet-200 transition group-hover:translate-x-1">Explorer →</p>
        </Link>

        <Link
          href="/projects"
          className="group rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-emerald-300/60 hover:bg-white/[0.1]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200">Projects</p>
          <h2 className="mt-3 text-lg font-medium">Mes realisations</h2>
          <p className="mt-2 text-sm text-slate-300">Applications universitaires et projets techniques.</p>
          <p className="mt-4 text-sm text-emerald-200 transition group-hover:translate-x-1">Explorer →</p>
        </Link>

        <Link
          href="/contact"
          className="group rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-white/[0.1]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">Contact</p>
          <h2 className="mt-3 text-lg font-medium">Travaillons ensemble</h2>
          <p className="mt-2 text-sm text-slate-300">Alternance, stage, echange sur une opportunite.</p>
          <p className="mt-4 text-sm text-cyan-200 transition group-hover:translate-x-1">Explorer →</p>
        </Link>
      </section>
    </PortfolioShell>
  );
}