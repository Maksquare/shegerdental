"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTiktokLine,
} from "react-icons/ri";
import { PiCheckFat, PiStarFourFill } from "react-icons/pi";

/* ─── Contact Info ───────────────────────────────────────────────── */
const contactInfo = {
  phone:    "+251 91 234 5678",
  whatsapp: "+251 91 234 5678",
  email:    "hello@shegerdental.com",
  address:  "Bole Road, Addis Ababa, Ethiopia",
  socials: [
    { icon: RiInstagramLine,   label: "Instagram", href: "https://instagram.com" },
    { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com" },
    { icon: RiWhatsappLine,    label: "WhatsApp",  href: "https://wa.me/251912345678" },
    { icon: RiTiktokLine,      label: "TikTok",    href: "https://tiktok.com" },
  ],
};

/* ─── Work Data ──────────────────────────────────────────────────── */
const workData = [
  {
    img:        "/assets/img/work/sm.png",
    name:       "Smile Makeovers",
    description: "Complete cosmetic transformations",
    tag:        "01",
    drawerImg:  "/assets/img/work/sm.png",
    eyebrow:    "Cosmetic Dentistry",
    headline:   "Smile transformations\ncrafted with artistry.",
    body: "Our cosmetic specialists blend clinical precision with an artist's eye to craft smiles that feel natural, confident, and uniquely yours. From a single veneer to a full smile makeover, every result is designed to complement your face and personality.",
    features: [
      "Porcelain veneers & composite bonding",
      "Professional teeth whitening",
      "Gum contouring & reshaping",
      "Full smile design planning",
      "Digital preview before treatment",
    ],
    stat: { value: "98%", label: "Patient satisfaction with cosmetic results" },
  },
  {
    img:        "/assets/img/work/di.png",
    name:       "Dental Implants",
    description: "Permanent tooth replacement",
    tag:        "02",
    drawerImg:  "/assets/img/work/di.png",
    eyebrow:    "Restorative Dentistry",
    headline:   "Permanent solutions,\nnatural-looking results.",
    body: "Our implant specialists use the latest titanium and ceramic technology to replace missing teeth with restorations that look, feel, and function exactly like your natural teeth — built to last a lifetime.",
    features: [
      "Single & multiple tooth implants",
      "Full-arch implant restoration",
      "Same-day implant protocols",
      "Bone grafting & site preparation",
      "5-year implant guarantee",
    ],
    stat: { value: "97%", label: "Long-term implant success rate" },
  },
  {
    img:        "/assets/img/work/od.png",
    name:       "Orthodontics",
    description: "Precision alignment at any age",
    tag:        "03",
    drawerImg:  "/assets/img/work/od.png",
    eyebrow:    "Alignment & Braces",
    headline:   "Perfectly aligned smiles,\nfor life.",
    body: "Using cutting-edge 3D digital scanning and treatment planning, our orthodontic team creates discreet, efficient alignment solutions for children, teens, and adults — with results that last.",
    features: [
      "Clear aligners (Invisalign-style)",
      "Ceramic & metal braces",
      "3D digital treatment preview",
      "Retainers & long-term maintenance",
      "Adult & teen orthodontic programs",
    ],
    stat: { value: "3D", label: "Digital planning for every orthodontic case" },
  },
  {
    img:        "/assets/img/work/pc.png",
    name:       "Preventive Care",
    description: "Protecting your smile daily",
    tag:        "04",
    drawerImg:  "/assets/img/work/pc.png",
    eyebrow:    "Preventive & General",
    headline:   "Prevention first,\nbecause your smile deserves it.",
    body: "Great dental health starts with prevention. Our comprehensive check-up and hygiene programs use advanced digital imaging to detect issues early, keeping your smile healthy for decades to come.",
    features: [
      "Digital X-rays & 3D CBCT imaging",
      "Professional scale & polish",
      "Oral cancer screening",
      "Fluoride & fissure sealant treatments",
      "Personalised home-care coaching",
    ],
    stat: { value: "6×", label: "Issues caught earlier with 3D imaging vs film X-ray" },
  },
];

/* ─── Animation Variants ─────────────────────────────────────────── */
const gridContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Contact View (inside drawer) ──────────────────────────────── */
const ContactView = ({ item, onBack }) => (
  <motion.div
    key="contact"
    className="flex-1 flex flex-col overflow-y-auto px-8 md:px-14 py-10 md:py-16 scrollbar-none"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 40 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Back row */}
    <div className="flex items-center justify-between mb-12">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-white/35 hover:text-white transition-colors duration-200"
      >
        <RiArrowLeftLine
          size={15}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        <span className="font-secondary text-[11px] font-medium tracking-[0.2em] uppercase">
          Back
        </span>
      </button>
      <div className="flex items-center gap-2">
        <div className="h-px w-6 bg-gold/50" />
        <span className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-gold/70">
          {item.eyebrow}
        </span>
      </div>
    </div>

    {/* Heading */}
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <h2
        className="font-primary font-light text-white leading-[1.1] tracking-[-0.02em] mb-4"
        style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}
      >
        Your smile begins<br />
        <em className="not-italic text-shimmer">with a conversation.</em>
      </h2>
      <p className="font-secondary text-[13px] text-white/45 leading-relaxed max-w-[320px]">
        Our team responds within the hour during working hours. Reach out through any channel below.
      </p>
    </motion.div>

    {/* Divider */}
    <motion.div
      className="h-px bg-gradient-to-r from-gold/30 via-gold/15 to-transparent mb-10"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.18, duration: 0.5 }}
    />

    {/* Contact rows */}
    <div className="space-y-2.5 mb-10">
      {[
        { icon: RiPhoneLine,   label: "Phone",    value: contactInfo.phone,    href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
        { icon: RiWhatsappLine, label: "WhatsApp", value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/[\s+]/g, "")}` },
        { icon: RiMailLine,    label: "Email",    value: contactInfo.email,    href: `mailto:${contactInfo.email}` },
        { icon: RiMapPinLine,  label: "Address",  value: contactInfo.address,  href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}` },
      ].map(({ icon: Icon, label, value, href }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 p-4 border border-white/[0.06] hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
        >
          <div className="flex items-center justify-center w-10 h-10 border border-white/[0.07] group-hover:border-gold/25 group-hover:bg-gold/10 transition-all duration-300 shrink-0">
            <Icon size={16} className="text-white/30 group-hover:text-gold transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-secondary text-[10px] font-medium tracking-[0.2em] uppercase text-white/25 mb-0.5">{label}</p>
            <p className="font-secondary text-[13px] text-white/70 group-hover:text-white truncate transition-colors duration-200">{value}</p>
          </div>
          <RiArrowRightUpLine
            size={13}
            className="text-white/15 group-hover:text-gold shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      ))}
    </div>

    {/* Socials */}
    <motion.div
      className="mt-auto"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
    >
      <div className="h-px bg-white/[0.07] mb-6" />
      <p className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-white/25 mb-4">
        Follow Us
      </p>
      <div className="flex items-center gap-2.5">
        {contactInfo.socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 border border-white/[0.08] text-white/30 hover:text-gold hover:border-gold/40 transition-all duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Service View (inside drawer) ──────────────────────────────── */
const ServiceView = ({ item, onContact }) => {
  const lines = item.headline.split("\n");

  return (
    <motion.div
      key="service"
      className="flex-1 flex flex-col overflow-y-auto px-8 md:px-14 py-10 md:py-16 scrollbar-none"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.28 }}
      >
        <PiStarFourFill className="text-gold/60 text-[9px]" />
        <span className="font-secondary text-[10px] font-medium tracking-[0.26em] uppercase text-gold/70">
          {item.eyebrow}
        </span>
        <div className="h-px w-6 bg-gold/30" />
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="font-primary font-light text-white leading-[1.1] tracking-[-0.02em] mb-6"
        style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className={[
              "block",
              i === 1 ? "font-semibold text-shimmer" : "font-light",
            ].join(" ")}
          >
            {line}
          </span>
        ))}
      </motion.h2>

      {/* Gold rule */}
      <motion.div
        className="w-10 h-px bg-gold/40 mb-7"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.36, duration: 0.5 }}
      />

      {/* Body */}
      <motion.p
        className="font-secondary text-[14px] leading-[1.8] text-white/50 mb-10 max-w-[420px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.55 }}
      >
        {item.body}
      </motion.p>

      {/* Features */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.44 }}
      >
        <p className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-white/25 mb-5">
          What's Included
        </p>
        <ul className="space-y-3.5">
          {item.features.map((f, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3.5 group"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.46 + i * 0.07, duration: 0.4 }}
            >
              <div className="flex items-center justify-center w-5 h-5 border border-gold/25 bg-gold/5 shrink-0 group-hover:bg-gold/15 transition-colors duration-200">
                <PiCheckFat className="text-gold text-[9px]" />
              </div>
              <span className="font-secondary text-[13px] text-white/60 group-hover:text-white/80 transition-colors duration-200">
                {f}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62 }}
      >
        <motion.button
          onClick={onContact}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group relative flex items-center gap-3 overflow-hidden
                     bg-gold px-7 py-4
                     font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-primary
                     transition-all duration-300 shadow-gold-glow hover:shadow-[0_8px_32px_rgba(201,168,76,0.45)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative">Book This Treatment</span>
          <RiArrowRightLine
            size={14}
            className="relative transition-transform duration-200 group-hover:translate-x-1"
          />
        </motion.button>
        <p className="font-secondary text-[11px] text-white/25 mt-4 tracking-wide">
          Free consultation · No commitment required
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Drawer ─────────────────────────────────────────────────────── */
const Drawer = ({ item, onClose }) => {
  const [view, setView] = useState("service");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (view === "contact") setView("service");
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, view]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-stretch"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-primary/75 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative ml-auto w-full max-w-[1040px] h-full bg-primary flex flex-col md:flex-row overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent z-30" />

        {/* ── Image column ─────────────────────────────────── */}
        <div className="relative w-full md:w-[42%] shrink-0 h-64 md:h-full overflow-hidden">
          <Image
            src={item.drawerImg}
            alt={item.name}
            fill
            quality={100}
            className="object-cover"
            priority
          />
          {/* Right fade into panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/50 hidden md:block" />
          {/* Bottom fade on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden" />

          {/* Floating stat badge */}
          <motion.div
            className="absolute bottom-8 left-8 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 px-5 py-4">
              <p
                className="font-primary font-semibold text-gold leading-none mb-1.5"
                style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}
              >
                {item.stat.value}
              </p>
              <p className="font-secondary text-[12px] text-white/50 leading-snug max-w-[150px]">
                {item.stat.label}
              </p>
            </div>
          </motion.div>

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 flex items-center justify-center w-9 h-9 bg-black/20 backdrop-blur-sm border border-white/10 text-white/50 hover:text-white hover:border-gold/40 transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Close panel"
          >
            <RiCloseLine size={16} />
          </motion.button>
        </div>

        {/* ── Animated view slot ───────────────────────────── */}
        <AnimatePresence mode="wait">
          {view === "service" ? (
            <ServiceView key="service" item={item} onContact={() => setView("contact")} />
          ) : (
            <ContactView key="contact" item={item} onBack={() => setView("service")} />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

/* ─── Work Section ───────────────────────────────────────────────── */
const Work = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <section id="our-work" className="pt-24 xl:pt-36 overflow-hidden bg-porcelain-section">

        {/* ── Section Header ───────────────────────────────── */}
        <div className="container mb-14 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[580px] mx-auto text-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/40" />
              <PiStarFourFill className="text-gold/60 text-[9px]" />
              <span className="font-secondary text-[11px] font-medium tracking-[0.26em] uppercase text-gold">
                Our Work
              </span>
              <PiStarFourFill className="text-gold/60 text-[9px]" />
              <div className="h-px w-8 bg-gold/40" />
            </div>

            <h2
              className="font-primary font-light text-primary leading-[1.1] tracking-[-0.02em] mb-2"
              style={{ fontSize: "clamp(32px, 4vw, 50px)" }}
            >
              Treatments That
            </h2>
            <h2
              className="font-primary font-semibold text-primary leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontSize: "clamp(32px, 4vw, 50px)" }}
            >
              <span className="text-shimmer">Change Lives</span>
            </h2>

            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-10 bg-gold/25" />
              <PiStarFourFill className="text-gold/30 text-[8px]" />
              <div className="h-px w-10 bg-gold/25" />
            </div>

            <p className="font-secondary text-[15px] leading-relaxed text-secondary max-w-[440px] mx-auto">
              From a first check-up to a complete transformation, explore the
              treatments that have given thousands of patients in Addis Ababa
              a reason to smile.
            </p>
          </motion.div>
        </div>

        {/* ── Cards Grid ───────────────────────────────────── */}
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
              className="relative w-full h-[540px] overflow-hidden group cursor-pointer"
              onClick={() => setActiveItem(work)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${work.name} details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveItem(work);
              }}
            >
              {/* Background image */}
              <Image
                src={work.img}
                alt={work.name}
                fill
                quality={100}
                className="object-cover transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />

              {/* Base dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/25 to-primary/10" />

              {/* Gold shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag */}
              <div className="absolute top-6 right-6 z-10">
                <span className="font-secondary text-[11px] font-medium tracking-[0.22em] text-white/25">
                  {work.tag}
                </span>
              </div>

              {/* Top gold line — appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold/0 group-hover:bg-gold/60 transition-colors duration-500 z-20" />

              {/* Card content */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 p-7
                           translate-y-[72px] group-hover:translate-y-0
                           transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <h4
                  className="font-primary font-semibold text-white leading-[1.15] tracking-[-0.01em] mb-2"
                  style={{ fontSize: "clamp(20px, 1.8vw, 24px)" }}
                >
                  {work.name}
                </h4>

                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-px bg-gold/50" />
                  <p className="font-secondary text-[12px] text-white/55 tracking-wide">
                    {work.description}
                  </p>
                </div>

                {/* Divider — appears on hover */}
                <div
                  className="h-px bg-white/10 mb-5
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 delay-75"
                />

                {/* Bottom CTA row */}
                <div
                  className="flex items-center justify-between
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 delay-100"
                >
                  <span className="font-secondary text-[10px] font-medium tracking-[0.2em] uppercase text-white/45">
                    Explore Treatment
                  </span>
                  <div
                    className="flex items-center justify-center w-9 h-9
                               bg-gold text-primary text-base
                               transition-all duration-300 group-hover:shadow-gold-glow"
                  >
                    <RiArrowRightUpLine
                      size={15}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </div>
              </div>

              {/* Left gold border — slides up on hover */}
              <div
                className="absolute left-0 bottom-0 w-[1px] bg-gold/70
                           h-0 group-hover:h-full
                           transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] z-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Drawer ───────────────────────────────────────────── */}
      <AnimatePresence>
        {activeItem && (
          <Drawer item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;