"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightUpLine, RiCloseLine, RiArrowRightLine, RiArrowLeftLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiWhatsappLine, RiInstagramLine, RiFacebookBoxLine, RiTiktokLine } from "react-icons/ri";
import { PiCheckCircleFill } from "react-icons/pi";

/* ─── Contact info — update with your real details ──────────────── */
const contactInfo = {
  phone: "+251 91 234 5678",
  whatsapp: "+251 91 234 5678",
  email: "hello@yourclinic.com",
  address: "Bole Road, Addis Ababa, Ethiopia",
  socials: [
    { icon: RiInstagramLine,  label: "Instagram",  href: "https://instagram.com" },
    { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com" },
    { icon: RiWhatsappLine,   label: "WhatsApp",  href: "https://wa.me/251912345678" },
    { icon: RiTiktokLine,     label: "TikTok",    href: "https://tiktok.com" },
  ],
};

const workData = [
  {
    img: "/assets/img/work/01.png",
    name: "Homecare",
    description: "Core medical & nursing care",
    tag: "01",
    href: "",
    drawerImg: "/assets/img/work/01.png",
    eyebrow: "Primary Care",
    headline: "Expert nursing care,\nright at home.",
    body: "Our certified nurses and caregivers bring hospital-grade attention directly to your living room — without the sterile environment. From wound management to medication administration, every visit is tailored to your clinical needs and personal comfort.",
    features: [
      "24/7 on-call nursing support",
      "Medication management & IV therapy",
      "Post-surgical wound care",
      "Vital signs monitoring",
      "Personalised care plans",
    ],
    stat: { value: "98%", label: "Patient satisfaction rate" },
  },
  {
    img: "/assets/img/work/02.png",
    name: "Rehabilitation",
    description: "Focused recovery programs",
    tag: "02",
    href: "",
    drawerImg: "/assets/img/work/02.png",
    eyebrow: "Recovery",
    headline: "Structured recovery,\nat your own pace.",
    body: "Our physiotherapists and occupational therapists design evidence-based rehabilitation programs that rebuild strength, mobility, and confidence — in the comfort of your home, on your schedule.",
    features: [
      "Post-stroke & neurological rehab",
      "Orthopaedic & joint recovery",
      "Occupational therapy sessions",
      "Custom exercise programs",
      "Progress tracking & reporting",
    ],
    stat: { value: "3×", label: "Faster recovery vs. clinic-only care" },
  },
  {
    img: "/assets/img/work/03.png",
    name: "Medical Equipment",
    description: "Hospital-grade devices",
    tag: "03",
    href: "",
    drawerImg: "/assets/img/work/03.png",
    eyebrow: "Equipment",
    headline: "Clinical-grade tools,\ndelivered to your door.",
    body: "We supply, install, and maintain hospital-quality medical devices at home — from oxygen concentrators to adjustable care beds. Every piece of equipment is fully sanitised, calibrated, and supported by our technical team.",
    features: [
      "Oxygen & respiratory equipment",
      "Adjustable beds & mobility aids",
      "Infusion & feeding pumps",
      "Remote patient monitoring devices",
      "Same-day delivery & setup",
    ],
    stat: { value: "500+", label: "Equipment types available" },
  },
  {
    img: "/assets/img/work/04.png",
    name: "Ambulance Service",
    description: "Emergency & special care",
    tag: "04",
    href: "",
    drawerImg: "/assets/img/work/04.png",
    eyebrow: "Transport",
    headline: "Safe, swift transport\nwhen it matters most.",
    body: "Our fully-equipped ambulances and trained paramedic teams provide emergency response and non-emergency medical transport — ensuring continuity of care from home to hospital and back.",
    features: [
      "Advanced life support vehicles",
      "Paramedic-staffed transfers",
      "Non-emergency medical transport",
      "Airport & inter-hospital transfers",
      "GPS-tracked fleet",
    ],
    stat: { value: "<8 min", label: "Average urban response time" },
  },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Contact View ───────────────────────────────────────────────── */
const ContactView = ({ item, onBack }) => (
  <motion.div
    className="flex-1 flex flex-col overflow-y-auto px-8 md:px-14 py-10 md:py-16 scrollbar-none"
    key="contact"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 40 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Back + eyebrow row */}
    <div className="flex items-center justify-between mb-12">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
        aria-label="Back to service details"
      >
        <RiArrowLeftLine size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
        <span className="font-primary text-xs font-semibold tracking-[0.15em] uppercase">
          Back
        </span>
      </button>
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-accent" />
        <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
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
      <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
        Get in <span className="text-accent">touch.</span>
      </h2>
      <p className="font-primary text-sm text-white/50 max-w-[340px] leading-relaxed">
        Reach out via any channel below — our team responds within the hour during working hours.
      </p>
    </motion.div>

    {/* Divider */}
    <motion.div
      className="h-px bg-white/10 mb-10"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.18, duration: 0.5 }}
    />

    {/* Contact rows */}
    <motion.div
      className="space-y-3 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.22 }}
    >
      {[
        {
          icon: RiPhoneLine,
          label: "Phone",
          value: contactInfo.phone,
          href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
        },
        {
          icon: RiWhatsappLine,
          label: "WhatsApp",
          value: contactInfo.whatsapp,
          href: `https://wa.me/${contactInfo.whatsapp.replace(/[\s+]/g, "")}`,
        },
        {
          icon: RiMailLine,
          label: "Email",
          value: contactInfo.email,
          href: `mailto:${contactInfo.email}`,
        },
        {
          icon: RiMapPinLine,
          label: "Address",
          value: contactInfo.address,
          href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
        },
      ].map(({ icon: Icon, label, value, href }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/8 group-hover:bg-accent/15 transition-colors duration-300 shrink-0">
            <Icon size={18} className="text-white/50 group-hover:text-accent transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-primary text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-0.5">
              {label}
            </p>
            <p className="font-primary text-sm text-white/80 group-hover:text-white truncate transition-colors duration-200">
              {value}
            </p>
          </div>
          <RiArrowRightUpLine
            size={14}
            className="text-white/20 group-hover:text-accent shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      ))}
    </motion.div>

    {/* Social links */}
    <motion.div
      className="mt-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.45 }}
    >
      <p className="font-primary text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-4">
        Follow us
      </p>
      <div className="flex items-center gap-3">
        {contactInfo.socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Service View ───────────────────────────────────────────────── */
const ServiceView = ({ item, onContact }) => {
  const lines = item.headline.split("\n");

  return (
    <motion.div
      className="flex-1 flex flex-col overflow-y-auto px-8 md:px-14 py-10 md:py-16 scrollbar-none"
      key="service"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="h-px w-8 bg-accent" />
        <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
          {item.eyebrow}
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="font-secondary text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {lines.map((line, i) => (
          <span key={i} className={i === 1 ? "text-accent block" : "block"}>
            {line}
          </span>
        ))}
      </motion.h2>

      {/* Body */}
      <motion.p
        className="font-primary text-base leading-relaxed text-white/60 mb-10 max-w-[440px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.55 }}
      >
        {item.body}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="h-px bg-white/10 mb-10"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.42, duration: 0.5 }}
      />

      {/* Features */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.46 }}
      >
        <p className="font-primary text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
          What's included
        </p>
        <ul className="space-y-3">
          {item.features.map((f, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.48 + i * 0.07, duration: 0.4 }}
            >
              <PiCheckCircleFill className="text-accent text-base shrink-0" />
              <span className="font-primary text-sm text-white/70">{f}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.45 }}
      >
        <button
          onClick={onContact}
          className="group inline-flex items-center gap-3 bg-accent text-primary font-primary font-semibold text-sm px-7 py-4 rounded-xl hover:brightness-110 transition-all duration-200"
        >
          Book this service
          <RiArrowRightLine
            className="transition-transform duration-200 group-hover:translate-x-1"
            size={16}
          />
        </button>
        <p className="font-primary text-xs text-white/30 mt-4">
          Free assessment call · No commitment required
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Drawer ─────────────────────────────────────────────────────── */
const Drawer = ({ item, onClose }) => {
  const [view, setView] = useState("service"); // "service" | "contact"

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* close on Escape; back on Escape if on contact view */
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative ml-auto w-full max-w-[1080px] h-full bg-primary flex flex-col md:flex-row overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Left: Image column ───────────────────────────── */}
        <div className="relative w-full md:w-[45%] shrink-0 h-64 md:h-full overflow-hidden">
          <Image
            src={item.drawerImg}
            alt={item.name}
            fill
            quality={100}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/60 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent md:hidden" />

          {/* Floating stat */}
          <motion.div
            className="absolute bottom-8 left-8 z-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4">
              <p className="font-secondary text-3xl font-bold text-white leading-none mb-1">
                {item.stat.value}
              </p>
              <p className="font-primary text-xs text-white/60 leading-snug max-w-[140px]">
                {item.stat.label}
              </p>
            </div>
          </motion.div>

          {/* Close button — pinned to image top-right */}
          <motion.button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            aria-label="Close panel"
          >
            <RiCloseLine size={18} />
          </motion.button>
        </div>

        {/* ── Right: Animated view slot ────────────────────── */}
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
      <section className="pt-20 xl:pt-36 overflow-hidden" id="our-work">

        {/* Section Header */}
        <div className="container mb-14 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[600px] mx-auto text-center"
          >
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

        {/* Cards Grid */}
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
              className="relative w-full h-[520px] overflow-hidden group cursor-pointer"
              onClick={() => setActiveItem(work)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${work.name} details`}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveItem(work); }}
            >
              {/* Background image */}
              <Image
                src={work.img}
                alt={work.name}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

              {/* Number tag */}
              <div className="absolute top-5 right-5 z-10">
                <span className="font-primary text-xs font-bold tracking-widest text-white/30">
                  {work.tag}
                </span>
              </div>

              {/* Card content */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 p-6
                           translate-y-[64px] group-hover:translate-y-0
                           transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
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

                <div
                  className="h-px bg-white/15 mb-4
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 delay-100"
                />

                <div
                  className="flex items-center justify-between
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 delay-150"
                >
                  <span className="font-primary text-xs font-semibold tracking-[0.15em] uppercase text-white/50">
                    Learn More
                  </span>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg
                               bg-accent text-primary text-xl
                               transition-transform duration-200 hover:scale-110 hover:rotate-3"
                  >
                    <RiArrowRightUpLine />
                  </div>
                </div>
              </div>

              {/* Accent left border */}
              <div
                className="absolute left-0 bottom-0 w-[3px] bg-accent
                           h-0 group-hover:h-full
                           transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Drawer */}
      <AnimatePresence>
        {activeItem && (
          <Drawer item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;