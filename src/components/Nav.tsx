import { useEffect, useState } from "react";
import { BIZ } from "../data";
import { scrollToId } from "../lib";
import { IconClose, IconMenu, IconPhone, IconSparkle, Monogram } from "./icons";

const LINKS = [
  { label: "Portfolio", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Packages", id: "packages" },
  { label: "Academy", id: "academy" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* announcement ribbon */}
      <div className="shimmer-gold text-plum-950">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <IconSparkle className="h-3 w-3" />
          <span className="hidden sm:inline">Bridal Season 2026 · Muhurtham dates filling fast</span>
          <span className="sm:hidden">Bridal 2026 dates filling fast</span>
          <span aria-hidden="true">·</span>
          <span className="normal-case tracking-normal">5.0★ on Google (151 reviews)</span>
        </div>
      </div>

      {/* main bar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-gold-500/15 bg-plum-950/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => go("top")}
            className="group flex items-center gap-3 text-left"
            aria-label="Anvi Makeover and Academy — back to top"
          >
            <Monogram className="h-11 w-11 text-gold-400 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <span>
              <span className="block font-display text-xl leading-none tracking-wide text-ink">
                Anvi
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Makeover · Academy
              </span>
            </span>
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="group relative text-[13px] font-medium uppercase tracking-[0.16em] text-mist transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={BIZ.phoneTel}
              className="hidden items-center gap-2 text-sm text-mist transition-colors hover:text-gold-300 md:flex"
            >
              <IconPhone className="h-4 w-4 text-gold-400" />
              {BIZ.phoneDisplay}
            </a>
            <button
              onClick={() => go("book")}
              className="hidden rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-plum-950 hover:shadow-[0_0_28px_rgba(212,162,78,0.45)] sm:block"
            >
              Book Appointment
            </button>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-gold-500/30 p-2.5 text-gold-300 lg:hidden"
              aria-label="Open menu"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-plum-950 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-2xl italic text-gold-400">Anvi</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-gold-500/30 p-2.5 text-gold-300"
            aria-label="Close menu"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-2">
          {LINKS.map((l, i) => (
            <li
              key={l.id}
              className="overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => go(l.id)}
                className={`font-display text-4xl text-ink transition-all duration-500 hover:italic hover:text-gold-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-10">
          <button
            onClick={() => go("book")}
            className="w-full rounded-full bg-gold-500 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-plum-950"
          >
            Book Appointment
          </button>
          <a
            href={BIZ.phoneTel}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-mist"
          >
            <IconPhone className="h-4 w-4 text-gold-400" /> {BIZ.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
