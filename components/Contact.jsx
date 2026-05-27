"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiChat1Line,
  RiMapPin2Line,
  RiSmartphoneLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTiktokLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { PiStarFourFill, PiCalendarCheckFill } from "react-icons/pi";
import Form from "./Form";

/* ─── Contact Items ──────────────────────────────────────────────── */
const contactItems = [
  {
    icon: RiSmartphoneLine,
    title:    "Call Us",
    subtitle: "Mon – Sat, 8am – 6pm",
    value:    "+251 91 234 5678",
    href:     "tel:+251912345678",
  },
  {
    icon: RiWhatsappLine,
    title:    "WhatsApp",
    subtitle: "Fastest response — usually within minutes",
    value:    "+251 91 234 5678",
    href:     "https://wa.me/251912345678",
  },
  {
    icon: RiChat1Line,
    title:    "Email Us",
    subtitle: "We reply within 1 hour during working hours",
    value:    "hello@shegerdental.com",
    href:     "mailto:hello@shegerdental.com",
  },
  {
    icon: RiMapPin2Line,
    title:    "Visit Us",
    subtitle: "Open Mon – Sat, 8am – 6pm",
    value:    "Bole Road, Addis Ababa, Ethiopia",
    href:     "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
  },
];

const socials = [
  { icon: RiInstagramLine,   label: "Instagram", href: "https://instagram.com"         },
  { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com"          },
  { icon: RiWhatsappLine,    label: "WhatsApp",  href: "https://wa.me/251912345678"     },
  { icon: RiTiktokLine,      label: "TikTok",    href: "https://tiktok.com"             },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Contact Section ────────────────────────────────────────────── */
const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  return (
    <section className="py-24 xl:py-36 overflow-hidden bg-cream-section" id="contact">
      <div className="container">

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 mb-14 xl:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PiStarFourFill className="text-gold text-[10px]" />
              <span className="font-secondary text-[11px] font-medium tracking-[0.26em] uppercase text-gold">
                Contact
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>

            <h2
              className="font-primary font-light text-primary leading-[1.1] tracking-[-0.02em] mb-1"
              style={{ fontSize: "clamp(32px, 3.8vw, 50px)" }}
            >
              Let's Start Your
            </h2>
            <h2
              className="font-primary font-semibold text-primary leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 3.8vw, 50px)" }}
            >
              <span className="relative inline-block">
                Smile Journey.
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold/50 origin-left block"
                />
              </span>
            </h2>
          </div>

          <p className="font-secondary text-[15px] leading-[1.8] text-secondary max-w-sm xl:text-right">
            Whether you have a question, need advice, or are ready to book —
            our team at Sheger Dental is here and happy to help.
          </p>
        </motion.div>

        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid xl:grid-cols-[340px_1fr] gap-5 xl:gap-7 items-start">

          {/* ── Left: Info Panel ─────────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-3"
          >
            {contactItems.map(({ icon: Icon, title, subtitle, value, href }, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                className="group flex items-start gap-4 p-5 bg-surface border border-border shadow-card hover:shadow-elevated hover:border-gold/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 border border-border bg-porcelain group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-300 shrink-0">
                  <Icon
                    size={17}
                    className="text-subtle group-hover:text-gold transition-colors duration-300"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-secondary text-[10px] font-medium tracking-[0.2em] uppercase text-subtle mb-0.5">
                    {subtitle}
                  </p>
                  <p className="font-secondary text-[13px] font-semibold text-primary mb-1">
                    {title}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-secondary text-[13px] font-medium text-gold/80 hover:text-gold transition-colors duration-200 truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-secondary text-[13px] font-medium text-gold/80">
                      {value}
                    </p>
                  )}
                </div>

                <RiArrowRightLine
                  size={13}
                  className="text-border group-hover:text-gold transition-all duration-300 group-hover:translate-x-0.5 mt-1 shrink-0"
                />
              </motion.div>
            ))}

            {/* Socials card */}
            <motion.div
              variants={itemVariant}
              className="p-5 bg-primary border border-primary/80 border-l-2 border-l-gold/60"
            >
              <p className="font-secondary text-[10px] font-medium tracking-[0.24em] uppercase text-white/30 mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socials.map(({ icon: Icon, label, href }) => (
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

          {/* ── Right: Form Panel ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface border border-border shadow-elevated overflow-hidden"
          >
            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-border flex items-center justify-between gap-4">
              <div>
                <h3
                  className="font-primary font-semibold text-primary leading-[1.15] tracking-[-0.01em] mb-1"
                  style={{ fontSize: "clamp(22px, 2.2vw, 28px)" }}
                >
                  Book a Consultation
                </h3>
                <p className="font-secondary text-[13px] text-subtle">
                  We'll confirm your appointment within 1 hour.
                </p>
              </div>

              {/* Live badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gold/20 bg-gold/5 shrink-0">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                </span>
                <span className="font-secondary text-[10px] font-medium tracking-[0.18em] uppercase text-gold/80">
                  Accepting Patients
                </span>
              </div>
            </div>

            {/* Appointment type pills */}
            <div className="px-8 pt-6 pb-2 flex items-center gap-3 flex-wrap">
              {[
                { label: "General Check-up",  value: "General Check-up"      },
                { label: "Cosmetic Consult",   value: "Cosmetic Dentistry"    },
                { label: "Emergency Care",     value: "Emergency Care"        },
                { label: "Orthodontics",       value: "Orthodontics / Aligners"},
              ].map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setSelectedService((prev) => (prev === value ? "" : value))
                  }
                  className={[
                    "font-secondary text-[11px] font-medium tracking-wide px-3 py-1.5",
                    "border transition-all duration-200 cursor-pointer",
                    selectedService === value
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border text-subtle hover:border-gold/40 hover:text-gold",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-8 mt-4 h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />

            {/* Form */}
            <div className="px-8 py-8">
              <Form selectedService={selectedService} />
            </div>

            {/* Footer note */}
            <div className="px-8 pb-6 flex items-center gap-3">
              <PiCalendarCheckFill className="text-gold/50 text-base shrink-0" />
              <p className="font-secondary text-[12px] text-subtle leading-snug">
                Free first consultation · No commitment required ·
                Available in-clinic or via video call
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;