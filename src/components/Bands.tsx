import { MARQUEE, STATS } from "../data";
import { Reveal, useCountUp, useInView } from "../lib";
import { IconSparkle } from "./icons";

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const display = useCountUp(value, inView, 1700, decimals);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="group border-l border-gold-500/20 py-2 pl-5 transition-colors duration-500 hover:border-gold-400 sm:pl-6">
        <p className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-none text-gold-300 transition-colors duration-500 group-hover:text-gold-200">
          {display}
          <span className="text-[0.55em] text-gold-500">{suffix}</span>
        </p>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
          {label}
        </p>
      </div>
    </Reveal>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-gold-500/20 bg-plum-900/70 py-4"
      aria-label="Signature services"
    >
      <div className="marquee-track flex items-center">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap pr-8">
            <span
              className={`font-display text-lg tracking-wide ${
                i % 2 === 0 ? "italic text-gold-300" : "text-mist"
              }`}
            >
              {m}
            </span>
            <IconSparkle className="h-3.5 w-3.5 text-rose-500/80" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-plum-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-plum-950 to-transparent" />
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,162,78,0.07),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              decimals={s.decimals ?? 0}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
