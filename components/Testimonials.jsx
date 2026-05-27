"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightLine, RiDoubleQuotesL } from "react-icons/ri";
import { PiStarFill } from "react-icons/pi";
import Slider from "./Slider";

const stats = [
  { value: "4.9",  suffix: "★", label: "Google Rating"      },
  { value: "8,500", suffix: "+", label: "Smiles Transformed" },
];

const Testimonials = () => {
  return (
    <section
      className="pt-20 xl:pt-36 pb-20 xl:pb-36 overflow-hidden"
      id="testimonials"
      style={{ background: "var(--bg-cream-section, #F5F1EA)" }}
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-stretch gap-12 xl:gap-0 relative">

          {/* ── Left: Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[484px] xl:pt-14"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px w-8"
                style={{ background: "#C9A84C" }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "var(--font-secondary, Jost), sans-serif",
                  color: "#C9A84C",
                }}
              >
                Patient Stories
              </span>
              <div
                className="h-px w-8"
                style={{ background: "#C9A84C" }}
              />
            </div>

            {/* Heading — two-line system matching Hero */}
            <h2
              className="leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-primary, 'Cormorant Garamond'), serif",
              }}
            >
              <span
                className="block text-4xl xl:text-5xl font-light"
                style={{ color: "#0D1B2A" }}
              >
                Every Smile
              </span>
              <span
                className="block text-4xl xl:text-5xl font-semibold relative"
                style={{ color: "#0D1B2A" }}
              >
                Tells a Story.
                {/* Animated gold underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left block"
                  style={{ background: "#C9A84C" }}
                />
              </span>
            </h2>

            {/* Body */}
            <p
              className="text-base leading-relaxed mb-10 max-w-[400px]"
              style={{
                fontFamily: "var(--font-secondary, Jost), sans-serif",
                color: "rgba(13,27,42,0.6)",
              }}
            >
              From first consultations to complete smile transformations, our
              patients in Addis Ababa share what it truly feels like to receive
              world-class dental care close to home.
            </p>

            {/* Mini stat row */}
            <div className="flex items-center gap-8 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-baseline gap-0.5">
                    <span
                      className="text-4xl font-light leading-none"
                      style={{
                        fontFamily: "var(--font-primary, 'Cormorant Garamond'), serif",
                        color: "#0D1B2A",
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "#C9A84C" }}
                    >
                      {s.suffix}
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-medium tracking-wide mt-1"
                    style={{
                      fontFamily: "var(--font-secondary, Jost), sans-serif",
                      color: "rgba(13,27,42,0.5)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}

              {/* Star row */}
              <div className="flex items-center gap-1 ml-auto">
                {[...Array(5)].map((_, i) => (
                  <PiStarFill key={i} style={{ color: "#C9A84C", fontSize: "14px" }} />
                ))}
                <span
                  className="ml-2 text-[11px]"
                  style={{
                    fontFamily: "var(--font-secondary, Jost), sans-serif",
                    color: "rgba(13,27,42,0.4)",
                  }}
                >
                  Google & in-clinic reviews
                </span>
              </div>
            </div>

            {/* Gold divider rule */}
            <div
              className="mb-10 h-px"
              style={{
                background:
                  "linear-gradient(90deg, #C9A84C 0%, rgba(201,168,76,0.15) 100%)",
              }}
            />

            {/* CTA */}
            <ScrollLink to="contact" smooth spy offset={-120} className="cursor-pointer inline-block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center overflow-hidden
                           pl-6 pr-2 py-2
                           text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{
                  fontFamily: "var(--font-secondary, Jost), sans-serif",
                  background: "#0D1B2A",
                  color: "#fff",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.18) 50%, transparent 60%)",
                  }}
                />
                <span className="relative mr-5 transition-all duration-200 group-hover:mr-6">
                  Book a Consultation
                </span>
                <span
                  className="relative flex h-8 w-8 items-center justify-center transition-all duration-200"
                  style={{
                    background: "#C9A84C",
                    color: "#0D1B2A",
                  }}
                >
                  <RiArrowRightLine className="text-base transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </motion.button>
            </ScrollLink>
          </motion.div>

          {/* ── Right: Image + Slider column ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end relative"
          >
            {/* Main image — desktop only */}
            <div
              className="relative hidden xl:block xl:w-[520px] xl:h-[560px] overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(13,27,42,0.22)" }}
            >
              <Image
                src="/assets/img/testimonials/img.png"
                fill
                className="object-cover"
                quality={100}
                alt="Happy patient at Sheger Dental Clinic"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.45) 100%)",
                }}
              />

              {/* Gold L-shaped corner frames — matches About section */}
              <div
                className="absolute top-4 left-4"
                style={{
                  width: "36px",
                  height: "36px",
                  borderTop: "1.5px solid #C9A84C",
                  borderLeft: "1.5px solid #C9A84C",
                }}
              />
              <div
                className="absolute bottom-4 right-4"
                style={{
                  width: "36px",
                  height: "36px",
                  borderBottom: "1.5px solid #C9A84C",
                  borderRight: "1.5px solid #C9A84C",
                }}
              />

              {/* Frosted badge — "Rated #1 Dental Clinic · Addis Ababa" */}
              <div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5"
                style={{
                  background: "rgba(13,27,42,0.65)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <PiStarFill style={{ color: "#C9A84C", fontSize: "10px" }} />
                <span
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "var(--font-secondary, Jost), sans-serif",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  Rated #1 · Addis Ababa, 2024
                </span>
              </div>
            </div>

            {/* Slider card — overlaps image on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative xl:absolute xl:bottom-0 xl:-left-16 w-full xl:w-[390px]"
            >
              {/* Floating quote icon — gold square instead of rounded circle */}
              <div
                className="absolute -top-5 left-6 z-20 w-10 h-10 flex items-center justify-center"
                style={{
                  background: "#C9A84C",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.45)",
                }}
              >
                <RiDoubleQuotesL style={{ color: "#0D1B2A", fontSize: "18px" }} />
              </div>

              {/* Slider wrapper — no rounded corners, matching site language */}
              <div
                className="overflow-hidden pt-6"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,168,76,0.18)",
                  boxShadow:
                    "0 16px 48px rgba(13,27,42,0.18), 0 0 0 1px rgba(201,168,76,0.08)",
                }}
              >
                <Slider />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;