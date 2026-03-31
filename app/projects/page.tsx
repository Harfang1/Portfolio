import PortfolioShell from "@/components/site/PortfolioShell";

export default function ProjectsPage() {
  return (
    <PortfolioShell>
      <section className="space-y-7">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200">Projects</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Mes projets</h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            Une selection de projets universitaires avec une approche concrete:
            architecture, donnees, authentification et visualisation.
          </p>
        </article>

        <div className="grid gap-5">
          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-violet-300/60 hover:bg-white/[0.1]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200">
              Application web
            </p>
            <h2 className="mt-3 text-xl font-medium">Donnees environnementales</h2>
            <p className="mt-3 text-sm text-slate-200">
              Implementation d une architecture MVC en PHP objet avec routage dynamique
              et autoloader. Conception d une base hybride MySQL + Firebase Realtime DB.
              Integration de Firebase Auth pour l authentification et gestion de session.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Frontend: cartes, graphiques et appels API pour afficher les donnees.
            </p>
            <p className="mt-4 text-[11px] text-slate-300">PHP OOP · MySQL · Firebase · API</p>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-emerald-300/60 hover:bg-white/[0.1]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200">
              Besoin client
            </p>
            <h2 className="mt-3 text-xl font-medium">Creation de base de donnees</h2>
            <p className="mt-3 text-sm text-slate-200">
              Application Python avec Flask, Pandas et Matplotlib pour analyser et
              representer des donnees issues de fichiers CSV de l Assurance Maladie.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Structuration et integration des donnees Ameli dans une base avec DBeaver.
            </p>
            <p className="mt-4 text-[11px] text-slate-300">
              Python · Flask · Pandas · Matplotlib · SQL
            </p>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-white/[0.1]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">
              Algorithmique
            </p>
            <h2 className="mt-3 text-xl font-medium">Comparaison d approches</h2>
            <p className="mt-3 text-sm text-slate-200">
              Developpement d algorithmes de tri en C et Python avec comparaison de
              methodes et redaction en pseudo-code, dans un cadre de travail en equipe.
            </p>
            <p className="mt-4 text-[11px] text-slate-300">C · Python · Pseudo-code</p>
          </article>
        </div>
      </section>
    </PortfolioShell>
  );
}
