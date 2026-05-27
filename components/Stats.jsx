"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CountUp from "react-countup";
import { PiStarFourFill } from "react-icons/pi";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Patient Satisfaction",
    description: "Consistently rated excellent by our patients across all treatments",
  },
  {
    endCountNum: 8500,
    endCountText: "+",
    text: "Smiles Transformed",
    description: "From routine care to complete cosmetic makeovers",
  },
  {
    endCountNum: 15,
    endCountText: "",
    text: "Specialist Dentists",
    description: "Board-certified experts across every dental discipline",
  },
  {
    endCountNum: 12,
    endCountText: "+",
    text: "Years of Excellence",
    description: "Serving Addis Ababa with world-class dental care",
  },
];

const Stats = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { amount: 0.25, once: true });

  return (
    <section ref={ref} className="relative overflow-hidden">

      {/* ── Background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-navy-gradient" />

      {/* Radial gold glow — center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,168,76,0.08),transparent)] pointer-events-none" />

      {/* Top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Bottom gold hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container py-20 xl:py-28">

        {/* ── Section Label ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-16 xl:mb-20"
        >
          <div className="h-px w-10 bg-gold/30" />
          <PiStarFourFill className="text-gold/50 text-[9px]" />
          <span className="font-secondary text-[11px] font-medium tracking-[0.28em] uppercase text-gold/60">
            Our Impact in Numbers
          </span>
          <PiStarFourFill className="text-gold/50 text-[9px]" />
          <div className="h-px w-10 bg-gold/30" />
        </motion.div>

        {/* ── Stats Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group relative flex flex-col items-center xl:items-start",
                "text-center xl:text-left px-8 py-10 xl:py-0",
                "transition-colors duration-500 hover:bg-white/[0.025]",
                index !== statsData.length - 1
                  ? "border-b xl:border-b-0 xl:border-r border-white/[0.07]"
                  : "",
              ].join(" ")}
            >
              {/* Subtle gold top accent per cell — visible on hover */}
              <div className="absolute top-0 left-8 right-8 xl:left-0 xl:right-auto xl:w-8 h-[1px] bg-gold/0 group-hover:bg-gold/40 transition-colors duration-500" />

              {/* ── Number ──────────────────────────────────────── */}
              <div className="flex items-end gap-1 mb-4">
                <span className="font-primary font-light text-white leading-none tabular-nums"
                  style={{ fontSize: "clamp(52px, 5vw, 72px)" }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.endCountNum}
                      delay={0.2 + index * 0.13}
                      duration={2.8}
                      separator=","
                      useEasing
                    />
                  ) : (
                    "0"
                  )}
                </span>
                {stat.endCountText && (
                  <span
                    className="font-primary font-semibold text-gold leading-none pb-2"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                  >
                    {stat.endCountText}
                  </span>
                )}
              </div>

              {/* Gold animated rule */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.13,
                  ease: "easeOut",
                }}
                className="h-px w-10 bg-gradient-to-r from-gold/60 to-transparent mb-4 xl:self-start self-center"
              />

              {/* Label */}
              <p className="font-secondary text-[12px] font-semibold tracking-[0.18em] uppercase text-white/80 mb-2">
                {stat.text}
              </p>

              {/* Description */}
              <p className="font-secondary text-[13px] leading-relaxed text-white/35 max-w-[180px] xl:mx-0 mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Decorative Quote ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 xl:mt-20 pt-10 border-t border-white/[0.06] flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
        >
          <p className="font-primary italic text-[18px] xl:text-[22px] text-white/25 leading-snug max-w-xl xl:mx-0 mx-auto text-center xl:text-left">
            "We don't just treat teeth — we restore confidence,
            one smile at a time."
          </p>

          <div className="flex items-center gap-4 xl:justify-end justify-center">
            <div className="h-px w-8 bg-gold/30" />
            <span className="font-secondary text-[11px] tracking-[0.22em] uppercase text-gold/50">
              Sheger Dental Clinic
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;