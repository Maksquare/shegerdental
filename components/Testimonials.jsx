"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine, RiDoubleQuotesL } from "react-icons/ri";
import { PiStarFill } from "react-icons/pi";
import Slider from "./Slider";

const stats = [
  { value: "98%", label: "Happy Families" },
  { value: "5★",  label: "Average Rating" },
];

const Testimonials = () => {
  return (
    <section className="pt-20 xl:pt-36 overflow-hidden" id="testimonials">
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
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
              Built on{" "}
              <span className="relative inline-block">
                Trust,
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
                />
              </span>{" "}
              Proven Through Care
            </h2>

            {/* Body */}
            <p className="font-primary text-base leading-relaxed text-secondary mb-10 max-w-[400px]">
              From families to individuals, our clients share their experiences
              of receiving compassionate, professional homecare — supporting
              their health, comfort, and peace of mind.
            </p>

            {/* Mini stat row */}
            <div className="flex items-center gap-6 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-secondary text-3xl font-bold text-primary leading-none mb-1">
                    {s.value}
                  </span>
                  <span className="font-primary text-xs font-medium text-secondary tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}

              {/* Star row */}
              <div className="flex items-center gap-1 ml-auto">
                {[...Array(5)].map((_, i) => (
                  <PiStarFill key={i} className="text-accent text-sm" />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-10" />

            {/* CTA */}
            <ScrollLink to="contact" smooth spy offset={-120} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center rounded-lg bg-primary
                           pl-5 pr-1.5 py-1.5
                           font-primary text-xs font-bold tracking-[0.15em] uppercase text-white
                           transition-all duration-200 shadow-custom"
              >
                <span className="mr-4 transition-all duration-200 group-hover:mr-5">
                  Contact Us
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 transition-all duration-200 group-hover:bg-white/20">
                  <RiArrowRightUpLine className="text-base transition-transform duration-300 group-hover:rotate-45" />
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
            <div className="relative hidden xl:block xl:w-[520px] xl:h-[560px] rounded-2xl overflow-hidden shadow-custom">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt="Happy patient receiving homecare"
              />
              {/* Gradient overlay at bottom so slider blends in */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

              {/* Decorative accent corner */}
              <div className="absolute top-5 left-5 w-10 h-10 border-t-[3px] border-l-[3px] border-accent rounded-tl-lg" />
              <div className="absolute bottom-5 right-5 w-10 h-10 border-b-[3px] border-r-[3px] border-accent rounded-br-lg" />
            </div>

            {/* Slider card — overlaps image on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative xl:absolute xl:bottom-0 xl:-left-16
                         w-full xl:w-[380px]"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-6 z-20 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-custom">
                <RiDoubleQuotesL className="text-primary text-lg" />
              </div>

              {/* Slider wrapper */}
              <div className="bg-white rounded-2xl shadow-custom border border-border overflow-hidden pt-6">
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