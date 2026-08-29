import { useEffect, useRef, useState, type ReactNode } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- intersection observer, fires once ---------- */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ---------- fade-up reveal wrapper ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- line-mask title reveal ---------- */
export function MaskLines({
  lines,
  className = "",
  lineClassName = "",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`mask-line ${inView ? "is-in" : ""} ${lineClassName}`}
        >
          <span style={{ transitionDelay: `${i * 140}ms` }}>{line}</span>
        </span>
      ))}
    </div>
  );
}

/* ---------- animated counter ---------- */
export function useCountUp(target: number, start: boolean, duration = 1700, decimals = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val.toFixed(decimals);
}

/* ---------- section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p
          className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] ${
            centered ? "justify-center" : ""
          } ${tone === "dark" ? "text-gold-400" : "text-rose-600"}`}
        >
          <SparkleLine tone={tone} />
          {eyebrow}
          {centered && <SparkleLine tone={tone} flip />}
        </p>
      </Reveal>
      <MaskLines
        lines={Array.isArray(title) ? title : [title]}
        className={`mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-medium tracking-tight ${
          tone === "dark" ? "text-ink" : "text-plum-900"
        }`}
      />
      {sub && (
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed font-light ${
              centered ? "mx-auto" : ""
            } ${tone === "dark" ? "text-mist" : "text-plum-700"}`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function SparkleLine({ tone, flip }: { tone: "dark" | "light"; flip?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${flip ? "flex-row-reverse" : ""}`}
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" className={tone === "dark" ? "text-gold-500" : "text-rose-600"}>
        <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" fill="currentColor" />
      </svg>
      <span className={`h-px w-8 ${tone === "dark" ? "bg-gold-500/50" : "bg-rose-600/40"}`} />
    </span>
  );
}

/* ---------- smooth scroll helper ---------- */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}
