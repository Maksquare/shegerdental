"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { PiArrowRightBold, PiCheckCircleFill } from "react-icons/pi";

const highlights = [
  "Personalised care plans for every patient",
  "Licensed & trained medical professionals",
  "24/7 availability for urgent support",
  "Compassionate, family-centred approach",
];

const About = () => {
  return (
    <section className="pt-20 xl:pt-36 overflow-hidden" id="about">
      <div className="container">
        <div className="flex flex-col gap-16 xl:gap-0 xl:flex-row xl:items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="max-w-[540px]">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-accent" />
                <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
                Care You Can{" "}
                <span className="relative inline-block">
                  Trust,
                  {/* Accent underline decoration */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
                  />
                </span>{" "}
                Support You Deserve
              </h2>

              {/* Body */}
              <p className="font-primary text-base leading-relaxed text-secondary mb-8">
                At the heart of our service is a deep commitment to people. We
                create personalised care experiences that enhance quality of
                life, ensuring every individual feels valued, respected, and
                supported at home.
              </p>

              {/* Highlights list */}
              <ul className="space-y-3 mb-10">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <PiCheckCircleFill className="text-accent text-lg shrink-0" />
                    <span className="font-primary text-sm font-medium text-primary">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-border mb-10" />

              {/* Signature + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Signature block */}
                <div className="flex flex-col gap-1">
                  <Image
                    src="/assets/img/about/signature.svg"
                    width={140}
                    height={36}
                    alt="CEO signature"
                    className="opacity-80"
                  />
                  <p className="font-primary text-xs text-secondary tracking-widest uppercase mt-1">
                    Chief Executive Officer
                  </p>
                </div>

                {/* Vertical rule on sm+ */}
                <div className="hidden sm:block w-px h-12 bg-border" />

                {/* CTA button */}
                <ScrollLink to="contact" smooth spy className="cursor-pointer">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-primary text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-primary/90"
                  >
                    Contact Us
                    <PiArrowRightBold className="text-xs" />
                  </motion.button>
                </ScrollLink>
              </div>

            </div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="relative w-full xl:w-[444px]">

              {/* Decorative accent block — offset behind image */}
              <div className="hidden xl:block absolute -top-5 -right-5 w-full h-full bg-accent/15 rounded-2xl -z-10" />

              {/* Subtle border accent on bottom-left */}
              <div className="hidden xl:block absolute -bottom-5 -left-5 w-32 h-32 border-[3px] border-accent/30 rounded-xl -z-10" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-custom">
                <Image
                  src="/assets/img/about/img.jpg"
                  width={444}
                  height={493}
                  alt="About our care team"
                  className="w-full object-cover"
                />

                {/* Floating stat badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-custom"
                >
                  {/* Accent dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />

                  <div className="flex-1">
                    <p className="font-secondary text-xl font-bold text-primary leading-none">
                      5+ Years
                    </p>
                    <p className="font-primary text-xs text-secondary mt-0.5">
                      of compassionate home medical care
                    </p>
                  </div>

                  {/* Vertical divider */}
                  <div className="w-px h-10 bg-border" />

                  <div className="text-right shrink-0">
                    <p className="font-secondary text-xl font-bold text-accent leading-none">
                      1800+
                    </p>
                    <p className="font-primary text-xs text-secondary mt-0.5">
                      Families served
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;