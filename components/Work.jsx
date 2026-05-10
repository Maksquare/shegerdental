"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import { PiCheckCircleFill } from "react-icons/pi";

const workData = [
  {
    img: "/assets/img/work/01.png",
    name: "Homecare",
    description: "Core medical & nursing care",
    tag: "01",
    href: "",
  },
  {
    img: "/assets/img/work/02.png",
    name: "Rehabilitation",
    description: "Focused recovery programs",
    tag: "02",
    href: "",
  },
  {
    img: "/assets/img/work/03.png",
    name: "Medical Equipment",
    description: "Hospital-grade devices",
    tag: "03",
    href: "",
  },
  {
    img: "/assets/img/work/04.png",
    name: "Ambulance Service",
    description: "Emergency & special care",
    tag: "04",
    href: "",
  },
];

/* Stagger container for the cards */
const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Work = () => {
  return (
    <section className="pt-20 xl:pt-36 overflow-hidden" id="our work">

      {/* ── Section Header ── */}
      <div className="container mb-14 xl:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px] mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent" />
            <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Our Work
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-primary leading-tight tracking-tight mb-5">
            Discover Our{" "}
            <span className="relative inline-block">
              Care Services
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
              />
            </span>
          </h2>

          <p className="font-primary text-base leading-relaxed text-secondary max-w-[480px] mx-auto">
            Compassionate, expert homecare designed to support health, comfort,
            and dignity in every home — delivered with professionalism, trust,
            and attention to every detail.
          </p>
        </motion.div>
      </div>

      {/* ── Cards Grid ── */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="relative w-full h-[520px] overflow-hidden group"
          >
            {/* Background image */}
            <Image
              src={work.img}
              alt={work.name}
              fill
              quality={100}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            {/* Always-on dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

            {/* Number tag — top right */}
            <div className="absolute top-5 right-5 z-10">
              <span className="font-primary text-xs font-bold tracking-widest text-white/30">
                {work.tag}
              </span>
            </div>

            {/* Card content — slides up on hover */}
            <div
              className="absolute inset-x-0 bottom-0 z-10 p-6
                         translate-y-[64px] group-hover:translate-y-0
                         transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* Name + description (always visible part) */}
              <div className="mb-4">
                <h4 className="font-secondary text-xl font-bold text-white tracking-tight mb-1.5">
                  {work.name}
                </h4>
                <div className="flex items-center gap-2">
                  <PiCheckCircleFill className="text-accent text-base shrink-0" />
                  <p className="font-primary text-sm text-white/70">
                    {work.description}
                  </p>
                </div>
              </div>

              {/* Divider — appears on hover */}
              <div
                className="h-px bg-white/15 mb-4
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 delay-100"
              />

              {/* CTA row — appears on hover */}
              <div
                className="flex items-center justify-between
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 delay-150"
              >
                <span className="font-primary text-xs font-semibold tracking-[0.15em] uppercase text-white/50">
                  Learn More
                </span>
                <Link
                  href={work.href}
                  className="flex items-center justify-center w-10 h-10 rounded-lg
                             bg-accent text-primary text-xl
                             transition-transform duration-200 hover:scale-110 hover:rotate-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>

            {/* Accent left border — grows in on hover */}
            <div
              className="absolute left-0 bottom-0 w-[3px] bg-accent
                         h-0 group-hover:h-full
                         transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-20"
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Work;