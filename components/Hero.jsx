"use client";

import { motion } from "framer-motion";
import {
  PiArrowRightBold,
  PiStarFourFill,
  PiMedalFill,
  PiCalendarCheckFill,
  PiToothFill,
} from "react-icons/pi";
import { RiArrowDownLine } from "react-icons/ri";

/* ─── Smooth scroll helper ───────────────────────────────────────── */
const scrollTo = (id, offset = -80) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
};

/* ─── Stats bar data ─────────────────────────────────────────────── */
const stats = [
  { value: "12+",   label: "Years of Excellence"  },
  { value: "8,500+",label: "Smiles Transformed"   },
  { value: "15",    label: "Expert Specialists"    },
  { value: "99%",   label: "Patient Satisfaction"  },
];

/* ─── Trust badges ───────────────────────────────────────────────── */
const trustBadges = [
  { icon: PiToothFill,         label: "Advanced Dental Technology" },
  { icon: PiMedalFill,         label: "Board-Certified Specialists" },
  { icon: PiCalendarCheckFill, label: "Same-Day Appointments"      },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Hero ───────────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[700px] bg-hero bg-center bg-no-repeat bg-cover overflow-hidden"
    >
      {/* Layered overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-primary/60 to-transparent" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] z-10 rounded-full bg-gold/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-primary/20 to-transparent" />
      <div
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="container relative z-20 h-full flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center xl:items-start xl:text-left max-w-[700px] mx-auto xl:mx-0"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold/60" />
              <span className="font-secondary text-[11px] font-medium tracking-[0.28em] uppercase text-gold/80">
                Sheger Dental Clinic · Addis Ababa
              </span>
              <PiStarFourFill className="text-gold/60 text-[8px]" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-primary font-light text-white leading-[1.06] tracking-[-0.02em] mb-3"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            Where Precision
          </motion.h1>

          <motion.div variants={item} className="mb-6">
            <h1
              className="font-primary font-semibold leading-[1.06] tracking-[-0.02em]"
              style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
            >
              <span className="text-shimmer">Meets Beauty.</span>
            </h1>
          </motion.div>

          {/* Decorative rule */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 mb-8 xl:self-start self-center"
          >
            <div className="h-px w-12 bg-gold/40" />
            <PiStarFourFill className="text-gold/40 text-[8px]" />
            <div className="h-px w-12 bg-gold/40" />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="font-secondary text-[16px] md:text-[18px] leading-[1.75] text-white/55 mb-10 max-w-[500px] xl:mx-0 mx-auto"
          >
            Sheger Dental Clinic combines world-class expertise with cutting-edge
            technology to give you a smile that is as healthy as it is radiant.
            Your comfort is our craft.
          </motion.p>

          {/* CTA Row — plain buttons, native scroll, zero library conflict */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            {/* Primary CTA */}
            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-3 overflow-hidden
                         bg-gold px-8 py-4
                         font-secondary text-[12px] font-semibold tracking-[0.16em] uppercase text-primary
                         transition-all duration-300 shadow-gold-glow hover:shadow-[0_8px_40px_rgba(201,168,76,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Book Free Consultation</span>
              <span className="relative flex items-center justify-center w-7 h-7 bg-primary/15 group-hover:bg-primary/25 transition-all duration-300">
                <PiArrowRightBold size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              type="button"
              onClick={() => scrollTo("services")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4
                         border border-white/20 bg-white/[0.06] backdrop-blur-sm
                         font-secondary text-[12px] font-semibold tracking-[0.16em] uppercase text-white/75
                         transition-all duration-300 hover:border-gold/40 hover:bg-white/10 hover:text-white"
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7"
          >
            {trustBadges.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                {idx !== 0 && (
                  <div className="hidden sm:block w-px h-3.5 bg-white/15 mr-2" />
                )}
                <Icon className="text-gold/70 text-[15px] shrink-0" />
                <span className="font-secondary text-[11px] font-medium tracking-wide text-white/45">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="container">
          <div className="grid grid-cols-2 xl:grid-cols-4 border-t border-white/[0.08] bg-primary/60 backdrop-blur-xl">
            {stats.map(({ value, label }, idx) => (
              <div
                key={idx}
                className={[
                  "flex flex-col items-center xl:items-start py-6 px-8 gap-1",
                  "border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.03]",
                  idx !== 0 ? "border-l" : "",
                ].join(" ")}
              >
                <span
                  className="font-primary font-semibold text-gold leading-none"
                  style={{ fontSize: "clamp(24px, 2.5vw, 34px)" }}
                >
                  {value}
                </span>
                <span className="font-secondary text-[11px] tracking-[0.12em] uppercase text-white/40 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-40 right-8 xl:right-16 z-20 hidden xl:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <RiArrowDownLine className="text-white/20 text-xl" />
        </motion.div>
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>

    </section>
  );
};

export default Hero;