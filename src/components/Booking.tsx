import { useMemo, useState } from "react";
import { BIZ, BOOKING_SERVICES, TIME_SLOTS } from "../data";
import { Reveal, SectionHeading } from "../lib";
import {
  IconCalendar,
  IconCheck,
  IconClock,
  IconPhone,
  IconPin,
  IconSend,
  IconWhatsApp,
} from "./icons";

type Props = {
  service: string;
  setService: (s: string) => void;
};

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-plum-950/60 px-4 py-3.5 text-sm text-ink placeholder:text-fog transition-all duration-300 focus:border-gold-400 focus:bg-plum-950 focus:shadow-[0_0_0_3px_rgba(212,162,78,0.15)]";

export default function Booking({ service, setService }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", date: "", note: "" });
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [refCode, setRefCode] = useState("");

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    const digits = form.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.date) e.date = "Pick your preferred date.";
    else if (form.date < today) e.date = "Date can’t be in the past.";
    if (!time) e.time = "Choose a time slot.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => {
      setRefCode(
        "ANVI-" +
          Array.from({ length: 4 }, () => "ABCDEFGHJKMNPQRSTUVWXYZ23456789"[Math.floor(Math.random() * 31)]).join("")
      );
      setStatus("done");
    }, 1000);
  };

  const waMsg = `Hi Anvi Makeover! I'd like to confirm my booking.\n• Ref: ${refCode}\n• Name: ${form.name}\n• Service: ${service}\n• Date: ${form.date} at ${time}${form.note ? `\n• Note: ${form.note}` : ""}`;

  const reset = () => {
    setForm({ name: "", phone: "", date: "", note: "" });
    setTime("");
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="book" className="relative scroll-mt-28 border-t border-gold-500/10 bg-plum-900/40 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(212,162,78,0.1),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
        {/* left info */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Book an Appointment"
            title={
              <>
                Your chair is<br />
                <em className="italic text-gold-400">waiting</em> on Arni Road
              </>
            }
            sub="Bridal consultations, makeovers, trials or an academy demo class — reserve a slot and we’ll confirm on WhatsApp within 30 minutes during studio hours."
          />

          <Reveal delay={200}>
            <ol className="mt-10 space-y-5">
              {[
                ["Share your details", "Tell us the look, the date and the function."],
                ["We confirm on WhatsApp", "Anvi personally replies with availability & advance."],
                ["Trial, then perfection", "Bridal bookings include a trial before your date is locked."],
              ].map(([t, d], i) => (
                <li key={t} className="group flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 font-display text-lg italic text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-plum-950">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t}</span>
                    <span className="block text-sm font-light text-mist">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={BIZ.phoneTel}
                className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-plum-950/50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50"
              >
                <IconPhone className="h-5 w-5 text-gold-400" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-fog">Call us</span>
                  <span className="block text-sm font-semibold text-ink">{BIZ.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={BIZ.whatsapp("Hi Anvi Makeover! I'd like to enquire about a booking.")}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-plum-950/50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3fbf66]/60"
              >
                <IconWhatsApp className="h-5 w-5 text-[#3fbf66]" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-fog">WhatsApp</span>
                  <span className="block text-sm font-semibold text-ink">Instant reply</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-plum-950/50 px-5 py-4 sm:col-span-2">
                <IconPin className="h-5 w-5 shrink-0 text-rose-500" />
                <span className="text-sm font-light text-mist">{BIZ.address}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={150} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-gold-500/25 bg-plum-900 p-7 shadow-[0_36px_90px_rgba(0,0,0,0.5)] sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-rose-600/15 blur-2xl" />

            {status === "done" ? (
              <div className="relative flex min-h-[480px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500 text-plum-950 shadow-[0_0_60px_rgba(212,162,78,0.5)]">
                  <IconCheck className="h-9 w-9" />
                </span>
                <h3 className="mt-7 font-display text-3xl italic text-ink">Request received!</h3>
                <p className="mt-3 max-w-sm text-sm font-light text-mist">
                  Thank you, <span className="text-gold-300">{form.name}</span>. Your reference is
                </p>
                <p className="mt-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-5 py-2 font-display text-xl tracking-[0.2em] text-gold-300">
                  {refCode}
                </p>
                <div className="mt-6 w-full max-w-sm space-y-1.5 rounded-xl border border-ink/10 bg-plum-950/50 p-5 text-left text-sm font-light text-mist">
                  <p><span className="text-fog">Service:</span> {service}</p>
                  <p><span className="text-fog">Date:</span> {form.date} · {time}</p>
                  <p><span className="text-fog">Phone:</span> {form.phone}</p>
                </div>
                <a
                  href={BIZ.whatsapp(waMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#23a55b] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#2cbe6b] hover:shadow-[0_10px_34px_rgba(43,180,100,0.45)]"
                >
                  <IconWhatsApp className="h-4.5 w-4.5" />
                  Confirm on WhatsApp
                </a>
                <button onClick={reset} className="mt-4 text-xs uppercase tracking-[0.2em] text-fog underline-offset-4 transition-colors hover:text-gold-300 hover:underline">
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="relative" noValidate>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl italic text-ink">Reserve your slot</h3>
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3fbf66]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-[#3fbf66] opacity-60" />
                      <span className="relative h-2 w-2 rounded-full bg-[#3fbf66]" />
                    </span>
                    Studio open today
                  </span>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-name" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Your name *
                    </label>
                    <input
                      id="bk-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Divya Ramkumar"
                      className={`${inputCls} ${errors.name ? "border-rose-500" : ""}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-blush-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-phone" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Mobile number *
                    </label>
                    <input
                      id="bk-phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      inputMode="tel"
                      className={`${inputCls} ${errors.phone ? "border-rose-500" : ""}`}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-blush-400">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="bk-service" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Service / course *
                    </label>
                    <div className="relative">
                      <select
                        id="bk-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`${inputCls} appearance-none pr-10`}
                      >
                      {Object.entries(BOOKING_SERVICES).map(([group, opts]) => (
                        <optgroup key={group} label={group} className="bg-plum-900">
                          {opts.map((o) => (
                            <option key={o} value={o} className="bg-plum-900 text-ink">
                              {o}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      </select>
                      <svg
                        viewBox="0 0 12 8"
                        className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 text-gold-500"
                        aria-hidden="true"
                      >
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bk-date" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Preferred date *
                    </label>
                    <div className="relative">
                      <IconCalendar className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gold-500" />
                      <input
                        id="bk-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={`${inputCls} pl-11 [color-scheme:dark] ${errors.date ? "border-rose-500" : ""}`}
                      />
                    </div>
                    {errors.date && <p className="mt-1.5 text-xs text-blush-400">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Time slot *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 ${
                            time === t
                              ? "border-gold-500 bg-gold-500 text-plum-950 shadow-[0_4px_18px_rgba(212,162,78,0.4)]"
                              : "border-ink/15 text-mist hover:border-gold-500/50 hover:text-gold-300"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.time && <p className="mt-1.5 text-xs text-blush-400">{errors.time}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="bk-note" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
                      Tell us about the occasion
                    </label>
                    <textarea
                      id="bk-note"
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Function type, outfit colours, venue, reference looks…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold-500 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-plum-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_12px_40px_rgba(212,162,78,0.5)] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-plum-950/30 border-t-plum-950" />
                      Reserving your slot…
                    </>
                  ) : (
                    <>
                      <IconSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      Request Appointment
                    </>
                  )}
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-light text-fog">
                  <IconClock className="h-3.5 w-3.5 text-gold-500" />
                  No advance needed to request — confirmation within 30 min ({BIZ.hours})
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
