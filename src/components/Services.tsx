import type { ComponentType } from "react";
import { IMG, SERVICES } from "../data";
import { Reveal, SectionHeading, scrollToId } from "../lib";
import {
  IconArrow,
  IconCrown,
  IconGroom,
  IconHair,
  IconLips,
  IconNail,
  IconRings,
  IconSpray,
} from "./icons";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  veil: IconCrown,
  spray: IconSpray,
  rings: IconRings,
  lips: IconLips,
  hair: IconHair,
  nail: IconNail,
  groom: IconGroom,
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 border-t border-gold-500/10 bg-plum-900/40 py-20 sm:py-28">
      <div aria-hidden="true" className="dotted-plum pointer-events-none absolute right-8 top-16 h-56 w-40 opacity-70" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
        {/* sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Signature Services"
              title={
                <>
                  Seven crafts,
                  <br />
                  one <em className="italic text-gold-400">flawless</em> face
                </>
              }
              sub="Every service is performed personally by Anvi or her senior artists — sanitised kits, premium brands, and a look designed for your features, never copied from a reel."
            />
            <Reveal delay={220}>
              <div className="relative mt-10 max-w-sm">
                <div
                  aria-hidden="true"
                  className="arch absolute -inset-3 -translate-x-3 translate-y-3 border border-rose-600/40"
                />
                <div className="arch relative overflow-hidden border border-gold-500/25">
                  <img
                    src={IMG.artist}
                    alt="Anvi — founder & celebrity bridal makeup artist"
                    loading="lazy"
                    className="h-[380px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-2xl italic text-ink">Anvi</p>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-gold-300">
                      Founder · Certified Airbrush Artist
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <button
                onClick={() => scrollToId("book")}
                className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 transition-colors hover:text-gold-200"
              >
                Reserve a service
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/50 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-plum-950">
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </Reveal>
          </div>
        </div>

        {/* service rows */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-gold-500/10 border-y border-gold-500/10">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.num} delay={i * 70}>
                  <li className="group relative grid grid-cols-[auto_1fr] gap-x-5 px-2 py-7 transition-all duration-500 hover:bg-plum-800/50 sm:grid-cols-[3.5rem_auto_1fr] sm:gap-x-6 sm:px-5">
                    <span className="pt-1 font-display text-lg italic text-fog transition-colors duration-500 group-hover:text-gold-500">
                      {s.num}
                    </span>
                    <span className="hidden h-14 w-14 items-center justify-center rounded-full border border-gold-500/25 text-gold-400 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-500/10 group-hover:text-gold-300 sm:flex">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-200 sm:text-2xl">
                          {s.title}
                        </h3>
                        <IconArrow className="h-5 w-5 -translate-x-2 text-gold-400 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed font-light text-mist">
                        {s.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-rose-600/30 bg-rose-600/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blush-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
