"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
  PiArrowRightBold,
  PiCheckCircleFill,
} from "react-icons/pi";

const servicesData = [
  {
    id: "homecare",
    name: "Homecare",
    label: "Homecare Services",
    icon: <PiWallFill />,
    tag: "01",
    title: "Homecare Services",
    subtitle: "Core medical and nursing care delivered to your door",
    description:
      "Professional, compassionate medical care provided in the comfort of your home. Our trained nursing staff ensures hospital-level attention with the warmth of familiar surroundings.",
    items: ["24 ሰዓት ነርሲንግ", "የቤት ውስጥ ICU", "የሀኪሞች ጉብኝት"],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg", alt: "Home nursing" },
      { url: "/assets/img/services/thumb-2.jpg", alt: "ICU care" },
    ],
  },
  {
    id: "therapy",
    name: "Therapy",
    label: "Therapy & Rehab",
    icon: <PiPaintRollerFill />,
    tag: "02",
    title: "Therapy & Rehabilitation",
    subtitle: "Recovery programs tailored to your unique journey",
    description:
      "Comprehensive rehabilitation designed to restore strength, mobility, and independence. Our specialists craft personalised programs across a wide range of therapeutic disciplines.",
    items: [
      "Physiotherapy",
      "Neurological Rehabilitation",
      "Orthopedic Rehabilitation",
      "Cardio-Pulmonary Rehabilitation",
      "Pediatric Rehabilitation",
      "Speech & Swallow Therapy",
      "Occupational Therapy (OT)",
      "Geriatric Rehabilitation",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg", alt: "Physiotherapy" },
      { url: "/assets/img/services/thumb-4.jpg", alt: "Rehabilitation" },
    ],
  },
  {
    id: "equipment",
    name: "Equipment",
    label: "Medical Equipment",
    icon: <PiWrenchFill />,
    tag: "03",
    title: "Medical Equipment & Support",
    subtitle: "Hospital-grade technology delivered to your home",
    description:
      "Access to the full spectrum of medical devices and technical support services. Every piece of equipment is maintained to the highest clinical standards.",
    items: [
      "Oxygen concentrator (5–10L)",
      "Oxygen cylinders",
      "Flow meter",
      "Nebulizer",
      "Suction machine",
      "CPAP / BiPAP machine",
      "Portable ventilator",
      "Monitoring Devices",
      "Hospital bed (manual/electric)",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg", alt: "Medical equipment" },
      { url: "/assets/img/services/thumb-6.jpg", alt: "Support devices" },
    ],
  },
  {
    id: "emergency",
    name: "Emergency",
    label: "Emergency & Special",
    icon: <PiUserGearFill />,
    tag: "04",
    title: "Emergency & Special Services",
    subtitle: "Rapid response when every second matters",
    description:
      "Immediate medical assistance and specialised services available around the clock. We are committed to providing fast, effective care during critical moments.",
    items: [
      "ነፃ የአምቡላንስ አገልግሎት",
      "ነፃ የአልትራሳውንድ ምርመራ",
      "ለስትሮክ ህሙማን ታላቅ ቅናሽ",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg", alt: "Ambulance" },
      { url: "/assets/img/services/thumb-8.jpg", alt: "Emergency care" },
    ],
  },
];

const stats = [
  { value: "24/7", label: "Round-the-clock care" },
  { value: "15+",  label: "Specialised services" },
  { value: "100%", label: "Licensed professionals" },
  { value: "48h",  label: "Average setup time" },
];

export default function Services() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const active = servicesData.find((s) => s.id === activeId);

  return (
    <section
      className="relative py-24 xl:py-36 overflow-hidden bg-[#f4f7f7]"
      id="services"
    >
      {/* Decorative tints using brand colors */}
      <div className="absolute top-0 right-0 w-[40vw] h-full pointer-events-none bg-gradient-to-bl from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none rounded-full bg-primary/[0.03] blur-3xl" />

      <div className="container relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 xl:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent" />
            <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Our Services
            </span>
          </div>

          {/* Title + description */}
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
            <h2 className="font-secondary text-4xl xl:text-5xl font-bold leading-tight max-w-xl text-primary tracking-tight">
              Integrated Homecare &{" "}
              <span className="text-accent">Medical Solutions</span>
            </h2>
            <p className="font-primary max-w-md text-base leading-relaxed text-secondary xl:text-right">
              Compassionate caregiving paired with advanced medical support —
              from daily assistance to hospital-grade equipment, delivered with
              precision and care.
            </p>
          </div>
        </motion.div>

        {/* ── Main Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="grid xl:grid-cols-[280px_1fr] gap-5 xl:gap-8 items-start"
        >

          {/* ── Left: Service Selector ── */}
          <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0">
            {servicesData.map((service) => {
              const isActive = service.id === activeId;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  whileHover={{ x: isActive ? 0 : 3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className={[
                    "relative flex items-center gap-4 text-left",
                    "shrink-0 xl:w-full min-w-[220px] xl:min-w-0",
                    "p-4 xl:p-5 rounded-xl border transition-all duration-300 outline-none",
                    isActive
                      ? "bg-primary border-primary shadow-custom"
                      : "bg-white border-border hover:border-primary/30 shadow-sm hover:shadow-custom",
                  ].join(" ")}
                >
                  {/* Number tag */}
                  <span
                    className={[
                      "absolute top-3 right-3 text-xs font-mono font-semibold",
                      isActive ? "text-accent/60" : "text-primary/20",
                    ].join(" ")}
                  >
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div
                    className={[
                      "flex items-center justify-center w-11 h-11 rounded-lg shrink-0 text-xl",
                      "transition-all duration-300",
                      isActive
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/5 text-primary",
                    ].join(" ")}
                  >
                    {service.icon}
                  </div>

                  {/* Label */}
                  <div>
                    <p
                      className={[
                        "font-primary text-sm font-semibold leading-tight",
                        isActive ? "text-white" : "text-primary",
                      ].join(" ")}
                    >
                      {service.label}
                    </p>
                    {isActive && (
                      <p className="font-primary text-xs mt-0.5 text-white/40">
                        Currently viewing
                      </p>
                    )}
                  </div>

                  {/* Active left-bar indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-accent"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── Right: Content Panel ── */}
          <div className="bg-white rounded-2xl border border-border shadow-custom overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row"
              >
                {/* Images column */}
                <div className="flex lg:flex-col gap-3 p-5 lg:w-[220px] xl:w-[240px] shrink-0 bg-[#f4f7f7]">
                  {active.thumbs.map((thumb, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl flex-1 min-h-[120px] bg-primary/5"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <Image
                        src={thumb.url}
                        alt={thumb.alt}
                        fill
                        className="object-cover rounded-xl"
                      />
                      {/* Accent frame */}
                      <div className="absolute inset-0 rounded-xl border border-accent/20 pointer-events-none" />
                    </div>
                  ))}

                  {/* Premium badge */}
                  <div className="hidden lg:flex items-center gap-2 mt-1 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="font-primary text-xs font-semibold text-primary/60">
                      Premium Care
                    </span>
                  </div>
                </div>

                {/* Text column */}
                <div className="flex-1 p-6 xl:p-9 flex flex-col justify-between">
                  <div>
                    {/* Tag */}
                    <span className="font-primary inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                      {active.tag} / {active.name}
                    </span>

                    {/* Title */}
                    <h3 className="font-secondary text-2xl xl:text-3xl font-bold text-primary leading-snug tracking-tight mb-2">
                      {active.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-primary text-sm font-semibold text-accent mb-4">
                      {active.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-primary text-sm leading-relaxed text-secondary mb-8">
                      {active.description}
                    </p>

                    {/* Services list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                      {active.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.22, delay: idx * 0.04 }}
                          className="flex items-center gap-2.5"
                        >
                          <PiCheckCircleFill className="text-accent text-base shrink-0" />
                          <span className="font-primary text-sm font-medium text-primary">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center gap-4 pt-5 border-t border-border">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-primary text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-primary/90"
                    >
                      Learn More
                      <PiArrowRightBold className="text-xs" />
                    </motion.button>

                    <button className="font-primary text-sm font-semibold text-secondary transition-colors duration-200 hover:text-accent cursor-pointer bg-transparent border-none">
                      Book a Consultation →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-8 grid grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col p-5 rounded-xl bg-white border border-border shadow-sm"
            >
              <span className="font-secondary text-2xl font-bold text-accent mb-1">
                {stat.value}
              </span>
              <span className="font-primary text-xs font-medium text-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}