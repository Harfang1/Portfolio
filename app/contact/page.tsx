import PortfolioShell from "@/components/site/PortfolioShell";

export default function ContactPage() {
  return (
    <PortfolioShell>
      <section className="space-y-7">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Discutons d une opportunite</h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            Je suis disponible pour une alternance en developpement informatique.
            N hesite pas a me contacter pour un stage, une mission ou un entretien.
          </p>
        </article>

        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="mailto:yonivaysse@gmail.com"
            className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">Email</p>
            <p className="mt-3 text-sm text-slate-100">yonivaysse@gmail.com</p>
          </a>

          <a
            href="tel:+33698684931"
            className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">Telephone</p>
            <p className="mt-3 text-sm text-slate-100">06 98 68 49 31</p>
          </a>

          <a
            href="#"
            className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">LinkedIn</p>
            <p className="mt-3 text-sm text-slate-100">Yoni Vaysse</p>
          </a>
        </div>

        <article className="rounded-3xl border border-cyan-300/25 bg-cyan-400/10 p-6 backdrop-blur-xl">
          <p className="text-sm text-slate-100">
            Localisation: Arpajon (91290) · Mobilite: Permis B · Disponibilite: immediate
            selon rythme d alternance.
          </p>
        </article>
      </section>
    </PortfolioShell>
  );
}
