import { useEffect, useRef, useState } from "react";
import { BIZ, REVIEWS } from "../data";
import { Reveal, SectionHeading, prefersReducedMotion } from "../lib";
import { IconChevron, IconQuote, IconStar } from "./icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    timer.current = window.setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const n = REVIEWS.length;

  return (
    <section id="reviews" className="relative scroll-mt-28 overflow-hidden border-t border-gold-500/10 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(194,94,119,0.1),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Love Letters from Brides"
          title={
            <>
              5.0 stars. <em className="italic text-gold-400">151 times.</em>
              <br />
              Zero exceptions.
            </>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Google rating panel */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-gold-500/25 bg-plum-900/70 p-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-fog">
                  Google Business Profile
                </p>
                <p className="mt-4 font-display text-[4.2rem] leading-none text-gold-300">
                  5.0
                </p>
                <div className="mt-3 flex gap-1.5 text-gold-400">
                  {[...Array(5)].map((_, k) => (
                    <IconStar key={k} className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-light text-mist">
                  Based on <span className="font-semibold text-ink">{BIZ.reviews}</span> verified
                  reviews
                </p>
                <div className="mt-6 space-y-2">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <div key={s} className="flex items-center gap-3 text-xs text-fog">
                      <span className="w-6">{s}★</span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-1000"
                          style={{ width: s === 5 ? "100%" : "0%" }}
                        />
                      </span>
                      <span className="w-8 text-right">{s === 5 ? "151" : "0"}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=Anvi+Makeover+%26+Academy+Arni+Road+reviews"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center justify-between rounded-full border border-gold-500/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-plum-950"
              >
                Read all reviews
                <IconChevron className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* carousel */}
          <Reveal delay={150} className="lg:col-span-8">
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-ink/10 bg-plum-800/60"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <IconQuote className="pointer-events-none absolute -top-4 right-6 h-28 w-28 text-gold-500/10" />
              <div className="flex-1 overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${i * 100}%)` }}
                >
                  {REVIEWS.map((r) => (
                    <figure
                      key={r.name}
                      className="flex w-full shrink-0 flex-col justify-between p-8 sm:p-10"
                    >
                      <div>
                        <div className="flex gap-1 text-gold-400">
                          {[...Array(5)].map((_, k) => (
                            <IconStar key={k} className="h-4 w-4" />
                          ))}
                        </div>
                        <blockquote className="mt-5 max-w-2xl text-lg leading-relaxed font-light text-ink sm:text-[1.35rem] sm:leading-snug">
                          “{r.quote}”
                        </blockquote>
                      </div>
                      <figcaption className="mt-8 flex items-center gap-4">
                        <span className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-rose-600 font-display text-lg italic text-plum-950">
                          {r.initials}
                        </span>
                        <span>
                          <span className="block font-semibold text-ink">{r.name}</span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-gold-400">
                            {r.context}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gold-500/15 px-8 py-4">
                <div className="flex gap-2">
                  {REVIEWS.map((_, k) => (
                    <button
                      key={k}
                      onClick={() => setI(k)}
                      aria-label={`Review ${k + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        k === i ? "w-8 bg-gold-400" : "w-3 bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setI((i + n - 1) % n)}
                    className="rounded-full border border-gold-500/40 p-2.5 text-gold-300 transition-all hover:bg-gold-500 hover:text-plum-950"
                    aria-label="Previous review"
                  >
                    <IconChevron dir="l" className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setI((i + 1) % n)}
                    className="rounded-full border border-gold-500/40 p-2.5 text-gold-300 transition-all hover:bg-gold-500 hover:text-plum-950"
                    aria-label="Next review"
                  >
                    <IconChevron className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
