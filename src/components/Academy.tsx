import { ACADEMY_PERKS, COURSES, IMG, type Course } from "../data";
import { Reveal, SectionHeading } from "../lib";
import {
  IconArrow,
  IconCamera,
  IconCertificate,
  IconCheck,
  IconKit,
  IconSparkle,
  IconUsers,
} from "./icons";
import type { ComponentType } from "react";

const PERK_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  kit: IconKit,
  certificate: IconCertificate,
  users: IconUsers,
  camera: IconCamera,
};

const ACCENT: Record<Course["accent"], { border: string; text: string; chip: string }> = {
  blush: { border: "border-l-blush-400", text: "text-rose-600", chip: "bg-blush-200 text-rose-700" },
  gold: { border: "border-l-gold-500", text: "text-gold-600", chip: "bg-gold-200/70 text-gold-700" },
  rose: { border: "border-l-rose-600", text: "text-rose-600", chip: "bg-rose-600/15 text-rose-700" },
};

export default function Academy({ onEnroll }: { onEnroll: (course: string) => void }) {
  return (
    <section id="academy" className="relative scroll-mt-16 bg-paper py-20 text-plum-900 sm:py-28">
      <div aria-hidden="true" className="dotted-rose pointer-events-none absolute left-8 top-14 h-52 w-44" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(212,162,78,0.18),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
        {/* left — intro + imagery */}
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="Anvi Academy of Makeup Arts"
            title={
              <>
                Learn the craft.
                <br />
                <em className="italic text-rose-600">Own your future.</em>
              </>
            }
            sub="Small batches, live bridal models and lifetime mentorship. Our graduates now run studios across Yavatmal, Washim and Amravati — many booked their first client before the course even ended."
          />

          <Reveal delay={200}>
            <div className="relative mt-10 max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[1.6rem] border border-rose-600/30"
              />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-plum-900/10 shadow-[0_30px_60px_rgba(61,20,43,0.25)]">
                <img
                  src={IMG.academy}
                  alt="Students practicing bridal makeup at Anvi Academy vanity stations"
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="font-display text-xl italic text-blush-100">Batch 12 in session</p>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-gold-300">
                    Vanity labs · Live models
                  </p>
                </div>
              </div>

              {/* batch badges */}
              <div className="float-y absolute -top-6 right-4 rounded-xl border border-gold-500/50 bg-plum-950 px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Next batch</p>
                <p className="mt-0.5 text-sm font-semibold text-blush-100">2 June 2026</p>
              </div>
              <div className="float-y-late absolute -bottom-5 left-6 rounded-xl border border-rose-500/40 bg-plum-950 px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-blush-400">Seats left</p>
                <p className="mt-0.5 text-sm font-semibold text-gold-300">Only 5 of 12</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12 grid grid-cols-2 gap-4">
              {ACADEMY_PERKS.map((p) => {
                const Icon = PERK_ICONS[p.icon];
                return (
                  <div
                    key={p.text}
                    className="group flex items-center gap-3 rounded-xl border border-plum-900/10 bg-blush-100/60 px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-600/40 hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5 text-rose-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-plum-800">
                      {p.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* right — courses */}
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {COURSES.map((c, i) => {
              const a = ACCENT[c.accent];
              return (
                <Reveal key={c.name} delay={i * 120}>
                  <div
                    className={`card-lift group rounded-[1.4rem] border border-plum-900/10 ${a.border} border-l-4 bg-blush-100/70 p-7 shadow-[0_16px_44px_rgba(61,20,43,0.12)] hover:shadow-[0_26px_60px_rgba(61,20,43,0.2)] sm:p-8`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-display text-2xl text-plum-900 sm:text-[1.7rem]">
                            {c.name}
                          </h3>
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${a.chip}`}
                          >
                            {c.duration}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-fog">
                          {c.mode}
                        </p>
                      </div>
                      <p className={`font-display text-3xl ${a.text}`}>{c.fee}</p>
                    </div>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {c.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-plum-800">
                          <span className="mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-rose-600/15 text-rose-600">
                            <IconCheck className="h-2.5 w-2.5" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs font-light italic text-plum-700">
                        EMI available · certificate on completion
                      </p>
                      <button
                        onClick={() => onEnroll(`${c.name} — ${c.fee}`)}
                        className="group/btn inline-flex items-center gap-2.5 rounded-full bg-plum-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-blush-100 transition-all duration-300 hover:bg-rose-600 hover:shadow-[0_10px_28px_rgba(168,68,96,0.45)]"
                      >
                        Apply for admission
                        <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={320}>
            <p className="mt-8 flex items-center gap-3 text-sm font-light text-plum-700">
              <IconSparkle className="h-4 w-4 shrink-0 text-gold-600" />
              Free demo class every Saturday, 11 AM — walk in at our Arni Road studio or call{" "}
              <span className="font-semibold text-rose-600">+91 96230 48864</span> to reserve a seat.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
