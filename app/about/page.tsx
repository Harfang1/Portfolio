import PortfolioShell from "@/components/site/PortfolioShell";

export default function AboutPage() {
  return (
    <PortfolioShell>
      <section className="space-y-7">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-200">About me</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Profil et parcours</h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            Etudiant en BUT Informatique a l IUT de Creteil (UPEC), je cherche une alternance
            en developpement informatique. Je suis organise, perseverant et j aime le travail
            en equipe.
          </p>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1">
            <h2 className="text-lg font-medium">Formation</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>BUT Informatique - UPEC (depuis septembre 2024)</li>
              <li>Baccalaureat General - specialites Maths et NSI (2024)</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1">
            <h2 className="text-lg font-medium">Langues</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>Anglais - B1</li>
              <li>Espagnol - B1</li>
              <li>Mandarin - A2</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1">
            <h2 className="text-lg font-medium">Logiciels</h2>
            <p className="mt-4 text-sm text-slate-200">
              Visual Studio Code, IntelliJ IDEA, DBeaver, Oracle VirtualBox,
              MobaXterm, Microsoft Office.
            </p>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1">
            <h2 className="text-lg font-medium">Centres d interet</h2>
            <p className="mt-4 text-sm text-slate-200">
              Piano, basket-ball, badminton, scoutisme (chef d animation), permis B.
            </p>
          </article>
        </div>
      </section>
    </PortfolioShell>
  );
}
