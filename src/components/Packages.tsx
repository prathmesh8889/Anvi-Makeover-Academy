import { ALACARTE, PACKAGES } from "../data";
import { Reveal, SectionHeading } from "../lib";
import { IconArrow, IconCheck, IconCrown, IconSparkle } from "./icons";

export default function Packages({ onBook }: { onBook: (service: string) => void }) {
  return (
    <section id="packages" className="relative scroll-mt-28 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,162,78,0.08),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Bridal Packages"
          title={
            <>
              Invest in the face you’ll<br />
              <em className="italic text-gold-400">remember forever</em>
            </>
          }
          sub="Transparent pricing, no hidden charges. Every package includes a pre-bridal consultation at our Arni Road studio — and your date is locked only after your trial."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 130}>
              <div
                className={`card-lift relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border p-8 ${
                  p.featured
                    ? "border-gold-500/70 bg-plum-800 shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:-translate-y-5"
                    : "border-ink/10 bg-plum-900/70 hover:border-gold-500/40"
                }`}
              >
                {p.featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/15 blur-2xl"
                    />
                    <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-plum-950">
                      <IconCrown className="h-3.5 w-3.5" /> {p.badge}
                    </span>
                  </>
                )}
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${
                    p.featured ? "text-gold-400" : "text-fog"
                  }`}
                >
                  {p.note}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink">{p.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-display text-[2.6rem] leading-none ${
                      p.featured ? "shimmer-gold bg-clip-text text-transparent" : "text-gold-300"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span className="text-xs text-fog">/ bride</span>
                </p>

                <div className="hairline my-6" />

                <ul className="flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light text-mist">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.featured ? "bg-gold-500 text-plum-950" : "bg-rose-600/25 text-blush-300"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onBook(`${p.name} Package — ${p.price}`)}
                  className={`group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                    p.featured
                      ? "bg-gold-500 text-plum-950 hover:bg-gold-400 hover:shadow-[0_8px_30px_rgba(212,162,78,0.5)]"
                      : "border border-gold-500/50 text-gold-300 hover:bg-gold-500 hover:text-plum-950"
                  }`}
                >
                  Reserve {p.name.split(" ")[0]}
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* à la carte menu */}
        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-4xl rounded-[1.6rem] border border-gold-500/15 bg-plum-900/60 p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl italic text-ink">À la carte menu</h3>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-fog">
                <IconSparkle className="h-3 w-3 text-gold-500" /> Single services · studio or on-site
              </p>
            </div>
            <div className="mt-7 grid gap-x-12 gap-y-1 sm:grid-cols-2">
              {ALACARTE.map((a) => (
                <div
                  key={a.item}
                  className="group flex items-baseline gap-3 border-b border-ink/5 py-3.5 transition-colors hover:border-gold-500/30"
                >
                  <span className="text-sm text-mist transition-colors group-hover:text-gold-200">
                    {a.item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mx-1 flex-1 border-b border-dotted border-gold-500/25 transition-colors group-hover:border-gold-500/60"
                  />
                  <span className="font-display text-lg text-gold-300">{a.price}</span>
                </div>
              ))}
              <div className="hidden items-center py-3.5 text-xs font-light italic text-fog sm:flex">
                * On-site travel within 40 km of Yavatmal is complimentary.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
