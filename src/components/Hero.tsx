import { useEffect, useState } from "react";
import { BIZ, HERO_WORDS, IMG } from "../data";
import { MaskLines, Reveal, scrollToId } from "../lib";
import { IconArrow, IconSparkle, IconStar } from "./icons";

export default function Hero() {
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWi((v) => (v + 1) % HERO_WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const word = HERO_WORDS[wi];

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 lg:pt-44">
      {/* ambient layers */}
      <div
        aria-hidden="true"
        className="glow-drift pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(212,162,78,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-12%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(168,68,96,0.14),transparent_65%)]"
      />
      <div aria-hidden="true" className="dotted-plum pointer-events-none absolute left-6 top-36 hidden h-64 w-44 lg:block" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[26vw] italic leading-none text-outline-gold opacity-40"
      >
        Anvi
      </span>

      {/* vertical side note */}
      <div
        aria-hidden="true"
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 items-center gap-4 xl:flex"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="h-16 w-px bg-gold-500/40" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-fog">
          Est. {BIZ.established} — Arni Road
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* ------------ copy ------------ */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold text-gold-300">
                <IconStar className="h-3.5 w-3.5 text-gold-400" />
                5.0 · {BIZ.reviews} Google reviews
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-600/40 bg-rose-600/10 px-3.5 py-1.5 text-xs font-medium text-blush-300">
                Arni Road · Arani
              </span>
            </div>
          </Reveal>

          <MaskLines
            className="mt-7 font-display font-medium tracking-tight text-ink"
            lineClassName=""
            lines={[
              <span key="a" className="block text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[1.02]">
                The Art of the
              </span>,
              <span
                key={word}
                className={`word-in block text-[clamp(2.9rem,7.4vw,6.2rem)] leading-[1.05] italic text-gold-400`}
              >
                {word}
              </span>,
            ]}
          />

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed font-light text-mist sm:text-base">
              5.0-rated bridal artistry studio &amp; professional makeup academy by{" "}
              <em className="font-display text-blush-300">Anvi</em> — where HD &amp; airbrush
              craft meets South-Indian tradition. From your muhurtham glow to a certified career
              in beauty, everything begins on Arni Road.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToId("book")}
                className="group inline-flex items-center gap-3 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-plum-950 shadow-[0_10px_36px_rgba(212,162,78,0.35)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_10px_44px_rgba(212,162,78,0.55)]"
              >
                Book Your Date
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <button
                onClick={() => scrollToId("portfolio")}
                className="group inline-flex items-center gap-3 rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:border-gold-400/70 hover:text-gold-300"
              >
                Bridal Portfolio
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 transition-transform duration-300 group-hover:scale-150" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["DR", "PS", "MI", "KP"].map((n, i) => (
                  <span
                    key={n}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-plum-950 text-[11px] font-semibold ${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-gold-500 to-gold-700 text-plum-950"
                        : "bg-gradient-to-br from-rose-500 to-rose-700 text-blush-100"
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-fog">
                Trusted by <span className="font-semibold text-gold-300">800+ brides</span> across
                Arani, Vellore &amp; Tiruvannamalai —
                <span className="text-mist"> every review a perfect five.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------ portrait ------------ */}
        <div className="relative lg:col-span-5">
          <Reveal delay={200}>
            <div className="relative mx-auto w-[78%] max-w-[400px]">
              {/* offset gold arch */}
              <div
                aria-hidden="true"
                className="arch absolute -inset-4 translate-x-5 translate-y-5 border border-gold-500/35"
              />
              <div className="dotted-plum arch absolute -inset-8 -z-10" aria-hidden="true" />

              <div className="arch relative overflow-hidden border border-gold-500/25 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                <img
                  src={IMG.heroBride}
                  alt="Bridal makeover by Anvi Makeover & Academy — airbrush bride in gold temple jewellery"
                  className="kenburns h-[420px] w-full object-cover sm:h-[520px]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-lg italic text-blush-200">Airbrush Bridal</p>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-gold-300">
                      Muhurtham Collection ’26
                    </p>
                  </div>
                  <IconSparkle className="h-5 w-5 text-gold-400" />
                </div>
              </div>

              {/* rotating circular badge */}
              <div className="absolute -right-10 -top-10 hidden h-32 w-32 sm:block">
                <svg viewBox="0 0 120 120" className="spin-slow h-full w-full text-gold-400">
                  <defs>
                    <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text fontSize="10.5" letterSpacing="2.6" fill="currentColor" className="uppercase">
                    <textPath href="#circ">
                      Anvi Makeover · Academy · Since 2019 ·
                    </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <IconSparkle className="h-6 w-6 text-gold-500" />
                </span>
              </div>

              {/* floating chips */}
              <div className="float-y absolute -left-8 top-16 hidden rounded-xl border border-gold-500/30 bg-plum-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] uppercase tracking-[0.22em] text-fog">Bridal 2026</p>
                <p className="mt-0.5 text-sm font-semibold text-gold-300">Dates Open</p>
              </div>
              <div className="float-y-late absolute -bottom-6 left-6 rounded-xl border border-blush-400/30 bg-plum-900/90 px-4 py-3 shadow-xl backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.22em] text-fog">Certified in</p>
                <p className="mt-0.5 text-sm font-semibold text-blush-300">Airbrush Artistry</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden="true"
        className="mt-16 flex flex-col items-center gap-2 text-fog lg:mt-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-ink/15">
          <span className="absolute left-0 top-0 h-4 w-px animate-bounce bg-gold-400" />
        </span>
      </div>
    </section>
  );
}
