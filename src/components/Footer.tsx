import { BIZ, INSTA_TILES } from "../data";
import { Reveal, SectionHeading } from "../lib";
import {
  IconArrow,
  IconClock,
  IconComment,
  IconHeart,
  IconInstagram,
  IconPhone,
  IconPin,
  IconWhatsApp,
  Monogram,
} from "./icons";

export function InstagramSection() {
  return (
    <section id="instagram" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Daily Transformations"
            title={
              <>
                Follow the glow on{" "}
                <em className="italic text-gold-400">{BIZ.instaHandle}</em>
              </>
            }
            sub="Before–afters, backstage chaos, student wins and bridal-day films — posted every single day."
          />
          <Reveal delay={160}>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-gold-500/50 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-plum-950 hover:shadow-[0_8px_30px_rgba(212,162,78,0.45)]"
            >
              <IconInstagram className="h-4.5 w-4.5" />
              Follow us
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INSTA_TILES.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-gold-500/15"
                aria-label={`Instagram post ${i + 1}`}
              >
                <img
                  src={t.src}
                  alt="Anvi Makeover Instagram content"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-plum-950/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                  <IconInstagram className="h-6 w-6 text-blush-200" />
                  <div className="flex gap-4 text-xs font-semibold text-ink">
                    <span className="flex items-center gap-1.5">
                      <IconHeart className="h-3.5 w-3.5 text-rose-500" /> {t.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <IconComment className="h-3.5 w-3.5 text-gold-300" /> {t.comments}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contact" className="relative scroll-mt-28 border-t border-gold-500/15 bg-plum-900/60">
      {/* contact band */}
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {[
          {
            icon: <IconPin className="h-6 w-6" />,
            title: "Visit the studio",
            lines: [BIZ.address],
            action: { label: "Open in Google Maps", href: BIZ.mapUrl },
          },
          {
            icon: <IconPhone className="h-6 w-6" />,
            title: "Call or WhatsApp",
            lines: [BIZ.phoneDisplay, "Bridal enquiries · 9 AM – 9 PM"],
            action: { label: "Chat on WhatsApp", href: BIZ.whatsapp("Hi Anvi Makeover! I found you via your website.") },
          },
          {
            icon: <IconClock className="h-6 w-6" />,
            title: "Studio hours",
            lines: [BIZ.hours, "On-site bookings · by appointment"],
            action: { label: "Book a slot", href: "#book" },
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <div className="card-lift group h-full rounded-[1.4rem] border border-ink/10 bg-plum-950/50 p-7 hover:border-gold-500/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-plum-950">
                {c.icon}
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1.5 text-sm font-light text-mist">{l}</p>
              ))}
              <a
                href={c.action.href}
                target={c.action.href.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-400 transition-colors hover:text-gold-200"
              >
                {c.action.label}
                <IconArrow className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* live location map */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-gold-500/25 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <iframe
              title="Anvi Makeover & Academy on Google Maps — Arni Road, Vaidya Nagar, Yavatmal"
              src={BIZ.mapEmbed}
              className="h-[320px] w-full sm:h-[400px]"
              style={{ border: 0, filter: "grayscale(0.25) contrast(1.03)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-plum-950 via-plum-950/70 to-transparent p-5 pt-16 sm:p-6">
              <div>
                <p className="flex items-center gap-2 font-display text-xl italic text-ink">
                  <IconPin className="h-5 w-5 text-gold-400" />
                  Find us on Arni Road
                </p>
                <p className="mt-1 text-xs font-light text-mist">
                  Near Himalaya Bajaj Showroom · Opp. MITHAS · Vaidya Nagar, Yavatmal 445001
                </p>
              </div>
              <a
                href={BIZ.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-plum-950 shadow-[0_10px_30px_rgba(212,162,78,0.4)] transition-all duration-300 hover:bg-gold-400"
              >
                Get Directions
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* footer bottom */}
      <div className="border-t border-gold-500/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 sm:px-6 lg:flex-row">
          <div className="flex items-center gap-3">
            <Monogram className="h-12 w-12 text-gold-400" />
            <div>
              <p className="font-display text-xl text-ink">Anvi Makeover &amp; Academy</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-fog">{BIZ.tagline}</p>
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-mist">
            {[
              ["Portfolio", "portfolio"],
              ["Packages", "packages"],
              ["Academy", "academy"],
              ["Reviews", "reviews"],
              ["Book", "book"],
            ].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-gold-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {[
              { icon: <IconInstagram className="h-4.5 w-4.5" />, href: BIZ.instagram, label: "Instagram" },
              { icon: <IconWhatsApp className="h-4.5 w-4.5" />, href: BIZ.whatsapp("Hi Anvi Makeover!"), label: "WhatsApp" },
              { icon: <IconPhone className="h-4.5 w-4.5" />, href: BIZ.phoneTel, label: "Phone" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("tel") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 transition-all duration-300 hover:-translate-y-1 hover:bg-gold-500 hover:text-plum-950"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gold-500/10 py-5 text-center text-xs font-light text-fog">
          © 2026 Anvi Makeover &amp; Academy · Arni Road, Yavatmal · Crafted with
          <span className="mx-1 inline-block text-rose-500">♥</span> for every bride
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={BIZ.whatsapp("Hi Anvi Makeover! I'd like to book an appointment.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Anvi Makeover on WhatsApp"
      className="ring-pulse group fixed bottom-6 right-6 z-[70] flex items-center gap-0 overflow-hidden rounded-full bg-[#23a55b] text-white shadow-[0_14px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:bg-[#2cbe6b]"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <IconWhatsApp className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[180px] group-hover:pr-5">
        Book on WhatsApp
      </span>
    </a>
  );
}
