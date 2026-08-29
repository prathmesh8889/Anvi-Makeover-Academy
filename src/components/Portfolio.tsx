import { useEffect, useMemo, useState } from "react";
import { PORTFOLIO } from "../data";
import { Reveal, SectionHeading } from "../lib";
import { IconChevron, IconClose, IconSparkle } from "./icons";

const CATS = ["All", "Bridal", "Reception", "Party", "Backstage"] as const;

export default function Portfolio() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === cat)),
    [cat]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + items.length) % items.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, items.length]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="portfolio" className="relative scroll-mt-28 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(194,94,119,0.12),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Bridal Portfolio"
            title={
              <>
                Looks that made<br />
                <em className="italic text-gold-400">151 brides</em> say “perfect”
              </>
            }
            sub="A glimpse of real transformations from our Arani studio — muhurtham classics, reception dreams and backstage craft. Tap any look to view it close up."
          />
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => {
                const n =
                  c === "All" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.cat === c).length;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                      cat === c
                        ? "border-gold-500 bg-gold-500 text-plum-950 shadow-[0_6px_24px_rgba(212,162,78,0.4)]"
                        : "border-ink/15 text-mist hover:border-gold-500/50 hover:text-gold-300"
                    }`}
                  >
                    {c} <span className="opacity-60">· {n}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* masonry */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 110} className="mb-6 break-inside-avoid">
              <button
                onClick={() => setLightbox(i)}
                className={`group relative block w-full overflow-hidden text-left ${
                  p.tall ? "arch" : "rounded-[1.4rem]"
                } border border-gold-500/15 transition-all duration-500 hover:border-gold-500/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]`}
                aria-label={`View ${p.title}`}
              >
                <img
                  src={p.src}
                  alt={`${p.title} — ${p.desc}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07] ${
                    p.tall ? "h-[440px]" : "h-[300px] sm:h-[340px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-400">
                      {p.cat}
                    </p>
                    <h3 className="mt-1 font-display text-xl italic text-ink">{p.title}</h3>
                    <p className="mt-1 max-h-0 overflow-hidden text-xs font-light text-mist opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                      {p.desc}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-plum-950/60 text-gold-300 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-500 group-hover:text-plum-950">
                    <IconSparkle className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-plum-950/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-2xl border border-gold-500/30 bg-plum-900"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.title}
              className="max-h-[72vh] w-full object-contain bg-plum-950"
            />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-400">
                  {current.cat}
                </p>
                <p className="font-display text-xl italic text-ink">{current.title}</p>
                <p className="mt-0.5 text-xs text-mist">{current.desc}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setLightbox((lightbox! + items.length - 1) % items.length)}
                  className="rounded-full border border-gold-500/40 p-2.5 text-gold-300 transition-colors hover:bg-gold-500 hover:text-plum-950"
                  aria-label="Previous look"
                >
                  <IconChevron dir="l" className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setLightbox((lightbox! + 1) % items.length)}
                  className="rounded-full border border-gold-500/40 p-2.5 text-gold-300 transition-colors hover:bg-gold-500 hover:text-plum-950"
                  aria-label="Next look"
                >
                  <IconChevron className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full border border-gold-500/40 bg-plum-950/70 p-3 text-gold-300 transition-colors hover:bg-gold-500 hover:text-plum-950"
            aria-label="Close"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
