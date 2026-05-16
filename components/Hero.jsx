"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { PiArrowRightBold, PiPhoneFill, PiShieldCheckFill, PiClockCountdownFill } from "react-icons/pi";

const trustBadges = [
  { icon: <PiShieldCheckFill />, label: "Licensed Professionals" },
  { icon: <PiClockCountdownFill />, label: "24/7 Availability" },
  { icon: <PiPhoneFill />, label: "Free Consultation" },
];

/* Stagger container */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

/* Individual child */
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] pt-28 min-h-[620px] bg-hero bg-center bg-no-repeat bg-cover overflow-hidden">

      {/* ── Layered overlay: dark left-focus gradient ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      {/* Subtle bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-black/40 to-transparent" />
      {/* Accent color wash — very subtle top-left glow */}
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] z-10 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="container relative z-20 h-full flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center xl:items-start xl:text-left max-w-[660px] mx-auto xl:mx-0"
        >

          {/* Eyebrow pill */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
                Professional Home Medical Care
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-secondary text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-accent">Hospital-level</span>{" "}
            care, right{" "}
            <br className="hidden xl:block" />
            at{" "}
            <span className="relative inline-block">
              home.
              {/* Animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
              />
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="font-primary text-base md:text-lg leading-relaxed text-white/70 mb-10 max-w-[480px]"
          >
            Our caregivers offer the expert support your family deserves —
            protecting the independence and safety of your loved ones in the
            place they love most.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            {/* Primary CTA */}
            <ScrollLink to="contact" smooth spy className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-primary font-primary text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent/90 shadow-custom"
              >
                Get a Free Consultation
                <PiArrowRightBold className="text-sm" />
              </motion.button>
            </ScrollLink>

            {/* Secondary CTA */}
            <ScrollLink to="services" smooth spy className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm text-white font-primary text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-white/20"
              >
                Explore Services
              </motion.button>
            </ScrollLink>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {/* Divider between badges */}
                {idx !== 0 && (
                  <div className="hidden sm:block w-px h-4 bg-white/20 mr-2" />
                )}
                <span className="text-accent text-base">{badge.icon}</span>
                <span className="font-primary text-xs font-medium text-white/60">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-primary text-[10px] tracking-[0.2em] uppercase text-white/30">
          Scroll
        </span>
        {/* Animated scroll pill */}
        <div className="w-[22px] h-[36px] rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;