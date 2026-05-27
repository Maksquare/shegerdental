"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { PiArrowRightBold, PiCheckFat, PiStarFourFill } from "react-icons/pi";

const highlights = [
  "Personalised treatment plans for every patient",
  "Board-certified dental specialists",
  "State-of-the-art digital X-ray & 3D imaging",
  "Painless procedures with sedation options",
];

const credentials = [
  { value: "12+",   label: "Years of Excellence" },
  { value: "8,500+", label: "Smiles Transformed" },
];

const About = () => {
  return (
    <section className="py-24 xl:py-36 overflow-hidden bg-porcelain-section" id="about">
      <div className="container">
        <div className="flex flex-col gap-20 xl:gap-0 xl:flex-row xl:items-center">

          {/* ── Left: Image ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 xl:flex xl:justify-start"
          >
            <div className="relative w-full xl:w-[480px]">

              {/* Decorative gold corner frame — top left */}
              <div className="hidden xl:block absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold/40 z-10 pointer-events-none" />

              {/* Decorative gold corner frame — bottom right */}
              <div className="hidden xl:block absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold/40 z-10 pointer-events-none" />

              {/* Background offset block */}
              <div className="hidden xl:block absolute -bottom-4 -right-4 w-full h-full bg-cream z-0" />

              {/* Main image */}
              <div className="relative overflow-hidden z-[1] shadow-elevated">
                <Image
                  src="/assets/img/about/img.png"
                  width={480}
                  height={560}
                  alt="Sheger Dental Clinic team"
                  className="w-full object-cover"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/70 to-transparent" />

                {/* Floating quote badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 px-5 py-4">
                    <p className="font-primary italic text-[15px] text-white/90 leading-snug mb-3">
                      "Every smile we create is a story of confidence restored."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-px bg-gold/60" />
                      <span className="font-secondary text-[11px] tracking-[0.18em] uppercase text-gold/80">
                        Dr. Amanuel Bekele · Chief Dentist
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating stat cards */}
              {credentials.map(({ value, label }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.88, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.55 + idx * 0.12 }}
                  className={[
                    "absolute z-20 bg-surface shadow-elevated border border-border px-5 py-4 min-w-[130px]",
                    idx === 0
                      ? "-top-8 -right-8 xl:-right-12"
                      : "top-1/2 -right-8 xl:-right-14 -translate-y-1/2",
                  ].join(" ")}
                >
                  <p className="font-primary text-[30px] font-semibold text-gold leading-none tracking-tight">
                    {value}
                  </p>
                  <p className="font-secondary text-[11px] text-subtle mt-1 leading-snug max-w-[100px]">
                    {label}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* ── Right: Text ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 xl:pl-20"
          >
            <div className="max-w-[520px] xl:mx-0 mx-auto">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <PiStarFourFill className="text-gold text-[10px]" />
                <span className="font-secondary text-[11px] font-medium tracking-[0.26em] uppercase text-gold">
                  About Us
                </span>
                <div className="h-px w-8 bg-gold/40" />
              </motion.div>

              {/* Heading */}
              <h2 className="font-primary font-light text-primary leading-[1.1] tracking-[-0.02em] mb-3"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                Crafting Smiles
              </h2>
              <h2
                className="font-primary font-semibold text-primary leading-[1.1] tracking-[-0.02em] mb-8"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                With{" "}
                <span className="relative inline-block">
                  Precision & Care.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold/50 origin-left block"
                  />
                </span>
              </h2>

              {/* Body */}
              <p className="font-secondary text-[16px] leading-[1.8] text-secondary mb-10">
                At Sheger Dental Clinic, we believe exceptional dental care
                is about more than teeth — it's about restoring confidence,
                relieving discomfort, and creating experiences that feel
                genuinely personal. Our specialists bring global training and
                local warmth to every chair.
              </p>

              {/* Highlights list */}
              <ul className="space-y-4 mb-10">
                {highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.09 }}
                    className="flex items-center gap-4 group"
                  >
                    {/* Gold check box */}
                    <div className="flex items-center justify-center w-6 h-6 border border-gold/40 bg-gold/5 shrink-0 group-hover:bg-gold/15 transition-colors duration-200">
                      <PiCheckFat className="text-gold text-[11px]" />
                    </div>
                    <span className="font-secondary text-[14px] font-medium text-primary/80">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Thin gold divider */}
              <div className="h-px bg-gradient-to-r from-gold/30 via-gold/15 to-transparent mb-10" />

              {/* Signature + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                {/* Signature block */}
                <div className="flex flex-col gap-1.5">
                  <Image
                    src="/assets/img/about/signature.svg"
                    width={130}
                    height={34}
                    alt="Dr. Amanuel Bekele signature"
                    className="opacity-70"
                  />
                  <p className="font-secondary text-[10px] text-subtle tracking-[0.2em] uppercase mt-0.5">
                    Chief Dental Officer
                  </p>
                </div>

                {/* Vertical rule */}
                <div className="hidden sm:block w-px h-10 bg-border" />

                {/* CTA */}
                <ScrollLink to="contact" smooth spy className="cursor-pointer">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex items-center gap-3 overflow-hidden
                               bg-primary px-7 py-3.5
                               font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-white
                               transition-all duration-300 hover:shadow-deep"
                  >
                    {/* Shimmer sweep */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative">Book a Consultation</span>
                    <PiArrowRightBold
                      size={12}
                      className="relative transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </ScrollLink>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;