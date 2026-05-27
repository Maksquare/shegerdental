"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiToothFill,
  PiSparkleFill,
  PiShieldCheckFill,
  PiFirstAidKitFill,
  PiArrowRightBold,
  PiCheckFat,
  PiStarFourFill,
} from "react-icons/pi";
import ServiceModal from "@/components/ServiceModal";
import ContactModal from "@/components/ContactModal";

/* ─── Services Data ──────────────────────────────────────────────── */
const servicesData = [
  {
    id: "cosmetic",
    name: "Cosmetic",
    label: "Cosmetic Dentistry",
    icon: PiSparkleFill,
    tag: "01",
    title: "Cosmetic Dentistry",
    subtitle: "Smile transformations crafted with artistry & precision",
    description:
      "From subtle refinements to complete smile makeovers, our cosmetic dental specialists combine aesthetic vision with clinical mastery. Every treatment is tailored to complement your unique facial features and personality.",
    items: [
      "Teeth Whitening & Bleaching",
      "Porcelain Veneers",
      "Smile Makeover",
      "Composite Bonding",
      "Gum Contouring",
      "Enamel Shaping",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg", alt: "Smile makeover" },
      { url: "/assets/img/services/thumb-2.jpg", alt: "Veneers" },
    ],
    accentLabel: "Most Popular",
  },
  {
    id: "restorative",
    name: "Restorative",
    label: "Restorative Dentistry",
    icon: PiToothFill,
    tag: "02",
    title: "Restorative Dentistry",
    subtitle: "Rebuilding function, strength & natural beauty",
    description:
      "Our restorative specialists use the latest materials and digital workflows to rebuild damaged, decayed, or missing teeth. We restore not just the tooth — but your confidence to eat, speak, and smile freely.",
    items: [
      "Dental Implants",
      "Porcelain Crowns & Bridges",
      "Inlays & Onlays",
      "Full-Arch Restoration",
      "Dentures & Partial Dentures",
      "Root Canal Therapy",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg", alt: "Dental implants" },
      { url: "/assets/img/services/thumb-4.jpg", alt: "Crowns" },
    ],
    accentLabel: null,
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    label: "Orthodontics",
    icon: PiShieldCheckFill,
    tag: "03",
    title: "Orthodontics & Alignment",
    subtitle: "Precision alignment for a lifetime of confident smiles",
    description:
      "From traditional braces to discreet clear aligners, our orthodontic team creates beautifully aligned smiles at any age. We use advanced 3D scanning and digital planning for predictable, efficient treatment.",
    items: [
      "Clear Aligners (Invisalign-style)",
      "Metal & Ceramic Braces",
      "Lingual Braces",
      "Retainers & Maintenance",
      "Early Intervention (Ages 7+)",
      "Adult Orthodontics",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg", alt: "Clear aligners" },
      { url: "/assets/img/services/thumb-6.jpg", alt: "Orthodontics" },
    ],
    accentLabel: null,
  },
  {
    id: "preventive",
    name: "Preventive",
    label: "Preventive & General",
    icon: PiFirstAidKitFill,
    tag: "04",
    title: "Preventive & General Care",
    subtitle: "Protecting your smile before problems arise",
    description:
      "Prevention is the foundation of lifelong oral health. Our comprehensive general dentistry services keep your teeth and gums in peak condition, catching issues early and educating you on best practices for home care.",
    items: [
      "Routine Examinations",
      "Professional Scale & Polish",
      "Digital X-Rays & 3D Imaging",
      "Fissure Sealants",
      "Fluoride Treatments",
      "Oral Cancer Screening",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg", alt: "Check-up" },
      { url: "/assets/img/services/thumb-8.jpg", alt: "Cleaning" },
    ],
    accentLabel: null,
  },
];

const stats = [
  { value: "15+", label: "Specialist Dentists" },
  { value: "3D",  label: "Digital Imaging" },
  { value: "99%", label: "Patient Satisfaction" },
  { value: "0",   label: "Waiting List" },
];

/* ─── Services Component ─────────────────────────────────────────── */
export default function Services() {
  const [activeId, setActiveId]           = useState(servicesData[0].id);
  const active                            = servicesData.find((s) => s.id === activeId);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [modalService, setModalService]   = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Listen for footer service link clicks
  useEffect(() => {
    const handler = (e) => {
      const { id } = e.detail;
      if (servicesData.find((s) => s.id === id)) {
        setActiveId(id);
      }
    };
    window.addEventListener("sheger:setService", handler);
    return () => window.removeEventListener("sheger:setService", handler);
  }, []);

  function openServiceModal(service) {
    setModalService(service);
    setServiceModalOpen(true);
  }

  return (
    <section
      className="relative py-24 xl:py-36 overflow-hidden bg-cream-section"
      id="services"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-full pointer-events-none bg-gradient-to-bl from-gold/[0.04] to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 pointer-events-none rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="container relative z-10">

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 xl:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <PiStarFourFill className="text-gold text-[10px]" />
            <span className="font-secondary text-[11px] font-medium tracking-[0.26em] uppercase text-gold">
              Our Services
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
            <div>
              <h2
                className="font-primary font-light text-primary leading-[1.1] tracking-[-0.02em] mb-1"
                style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
              >
                Comprehensive Dental
              </h2>
              <h2
                className="font-primary font-semibold text-primary leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
              >
                <span className="text-shimmer">Excellence</span> Under One Roof
              </h2>
            </div>
            <p className="font-secondary max-w-sm text-[15px] leading-relaxed text-secondary xl:text-right">
              From your first check-up to a complete smile transformation,
              Sheger Dental Clinic offers every treatment you need — with
              specialists dedicated to each discipline.
            </p>
          </div>
        </motion.div>

        {/* ── Main Grid ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="grid xl:grid-cols-[260px_1fr] gap-4 xl:gap-6 items-start"
        >

          {/* ── Left: Service Selector ───────────────────────────── */}
          <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 scrollbar-none">
            {servicesData.map((service) => {
              const isActive = service.id === activeId;
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={[
                    "relative flex items-center gap-4 text-left",
                    "shrink-0 xl:w-full min-w-[210px] xl:min-w-0",
                    "px-5 py-4 border transition-all duration-300 outline-none",
                    isActive
                      ? "bg-primary border-primary shadow-deep"
                      : "bg-surface border-border hover:border-gold/30 shadow-card hover:shadow-elevated",
                  ].join(" ")}
                >
                  {/* Tag number */}
                  <span
                    className={[
                      "absolute top-3 right-3 font-secondary text-[10px] font-medium tracking-widest",
                      isActive ? "text-gold/50" : "text-primary/20",
                    ].join(" ")}
                  >
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div
                    className={[
                      "flex items-center justify-center w-10 h-10 shrink-0 transition-all duration-300",
                      isActive
                        ? "bg-gold/15 text-gold"
                        : "bg-primary/5 text-primary/50",
                    ].join(" ")}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Label */}
                  <div>
                    <p
                      className={[
                        "font-secondary text-[13px] font-semibold leading-tight",
                        isActive ? "text-white" : "text-primary",
                      ].join(" ")}
                    >
                      {service.label}
                    </p>
                    {isActive && (
                      <p className="font-secondary text-[11px] mt-0.5 text-white/35 tracking-wide">
                        Currently viewing
                      </p>
                    )}
                  </div>

                  {/* Active gold bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── Right: Content Panel ─────────────────────────────── */}
          <div className="bg-surface border border-border shadow-elevated overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row"
              >

                {/* Images column */}
                <div className="flex lg:flex-col gap-3 p-5 lg:w-[200px] xl:w-[220px] shrink-0 bg-porcelain">
                  {active.thumbs.map((thumb, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden flex-1 min-h-[110px] bg-primary/5"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <Image
                        src={thumb.url}
                        alt={thumb.alt}
                        fill
                        className="object-cover"
                      />
                      {/* Gold overlay on hover */}
                      <div className="absolute inset-0 bg-gold/0 hover:bg-gold/10 transition-colors duration-300" />
                    </div>
                  ))}

                  {/* Premium badge */}
                  {active.accentLabel && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-gold/10 border border-gold/20">
                      <PiStarFourFill className="text-gold text-[9px] shrink-0" />
                      <span className="font-secondary text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                        {active.accentLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text column */}
                <div className="flex-1 p-6 xl:p-10 flex flex-col justify-between">
                  <div>
                    {/* Tag + name */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-secondary text-[10px] font-medium tracking-[0.24em] uppercase text-gold">
                        {active.tag}
                      </span>
                      <div className="w-4 h-px bg-gold/40" />
                      <span className="font-secondary text-[10px] font-medium tracking-[0.24em] uppercase text-subtle">
                        {active.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-primary font-semibold text-primary leading-[1.15] tracking-[-0.01em] mb-2"
                      style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}
                    >
                      {active.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-primary italic text-[14px] text-gold/80 mb-5 font-light">
                      {active.subtitle}
                    </p>

                    {/* Gold rule */}
                    <div className="w-12 h-px bg-gold/30 mb-6" />

                    {/* Description */}
                    <p className="font-secondary text-[14px] leading-[1.8] text-secondary mb-8 max-w-[460px]">
                      {active.description}
                    </p>

                    {/* Items grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {active.items.map((itm, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: idx * 0.05 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="flex items-center justify-center w-5 h-5 border border-gold/30 bg-gold/5 shrink-0 group-hover:bg-gold/15 transition-colors duration-200">
                            <PiCheckFat className="text-gold text-[9px]" />
                          </div>
                          <span className="font-secondary text-[13px] font-medium text-primary/75">
                            {itm}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-border">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => openServiceModal(active)}
                      className="group relative flex items-center gap-3 overflow-hidden
                                 bg-primary px-7 py-3.5
                                 font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-white
                                 transition-all duration-300 hover:shadow-deep"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative">Learn More</span>
                      <PiArrowRightBold
                        size={12}
                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setContactModalOpen(true)}
                      className="group flex items-center gap-2 font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-gold/70 hover:text-gold transition-colors duration-200 bg-transparent border-none cursor-pointer"
                    >
                      Book a Consultation
                      <PiArrowRightBold
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Stats Bar ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 grid grid-cols-2 xl:grid-cols-4 border border-border bg-surface shadow-card"
        >
          {stats.map(({ value, label }, idx) => (
            <div
              key={idx}
              className={[
                "flex flex-col items-center xl:items-start py-6 px-8 gap-1",
                "transition-colors duration-300 hover:bg-porcelain",
                idx !== 0 ? "border-l border-border" : "",
              ].join(" ")}
            >
              <span
                className="font-primary font-semibold text-gold leading-none"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
              >
                {value}
              </span>
              <span className="font-secondary text-[11px] tracking-[0.12em] uppercase text-subtle font-medium">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Modals ───────────────────────────────────────────────────── */}
      <ServiceModal
        service={modalService}
        open={serviceModalOpen}
        onOpenChange={setServiceModalOpen}
        onBookConsultation={() => setContactModalOpen(true)}
      />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
}