"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
  RiSendPlaneFill,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiTiktokLine,
} from "react-icons/ri";
import { PiStarFourFill, PiToothFill } from "react-icons/pi";

/* ─── Data ───────────────────────────────────────────────────────── */
const contactItems = [
  {
    icon: RiMapPinFill,
    value: "Bole Road, Addis Ababa, Ethiopia",
    href:  "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
  },
  {
    icon: RiPhoneFill,
    value: "+251 91 234 5678",
    href:  "tel:+251912345678",
  },
  {
    icon: RiMailFill,
    value: "hello@shegerdental.com",
    href:  "mailto:hello@shegerdental.com",
  },
];

const quickLinks = [
  { name: "Home",         to: "home"         },
  { name: "About",        to: "about"        },
  { name: "Services",     to: "services"     },
  { name: "Our Work",     to: "our-work"     },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact",      to: "contact"      },
];

// Maps footer label → service id in Services.jsx
const services = [
  { name: "Cosmetic Dentistry", id: "cosmetic"     },
  { name: "Dental Implants",    id: "restorative"  },
  { name: "Orthodontics",       id: "orthodontics" },
  { name: "Teeth Whitening",    id: "cosmetic"     },
  { name: "Preventive Care",    id: "preventive"   },
  { name: "Emergency Dentistry",id: "preventive"   },
];

const socials = [
  { icon: RiInstagramLine,   label: "Instagram", href: "https://instagram.com"        },
  { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com"         },
  { icon: RiWhatsappLine,    label: "WhatsApp",  href: "https://wa.me/251912345678"    },
  { icon: RiTiktokLine,      label: "TikTok",    href: "https://tiktok.com"            },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const animItem = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Footer ─────────────────────────────────────────────────────── */
const Footer = () => {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Scroll to services section then fire a custom event to activate the tab
  const handleServiceClick = (serviceId) => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Small delay so the scroll completes before the tab switches
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("sheger:setService", { detail: { id: serviceId } })
      );
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-primary overflow-hidden">

      {/* ── Background elements ───────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="container relative z-10"
      >

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="py-16 xl:py-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 xl:gap-10">

          {/* Col 1 — Brand ───────────────────────────────────────── */}
          <motion.div variants={animItem} className="xl:col-span-1">

            {/* Wordmark logo */}
            <ScrollLink to="home" smooth spy className="cursor-pointer inline-block mb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-9 h-9 bg-gold/10 border border-gold/20">
                  <PiToothFill className="text-gold text-base" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-primary text-[18px] font-semibold text-white tracking-[-0.01em]">
                    Sheger
                  </span>
                  <span className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-gold/70">
                    Dental Clinic
                  </span>
                </div>
              </div>
            </ScrollLink>

            <p className="font-secondary text-[13px] leading-[1.8] text-white/35 max-w-[230px] mb-8">
              World-class dental care in the heart of Addis Ababa. Precision,
              artistry, and genuine compassion — every visit.
            </p>

            {/* Hours badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-white/[0.08] bg-white/[0.03] mb-6">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
              </span>
              <span className="font-secondary text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                Open Mon – Sat, 8am – 6pm
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 border border-white/[0.08] text-white/25 hover:text-gold hover:border-gold/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Quick Links ──────────────────────────────────── */}
          <motion.div variants={animItem}>
            <h4 className="font-secondary text-[10px] font-medium tracking-[0.26em] uppercase text-gold/70 mb-7">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ name, to }, idx) => (
                <li key={idx} className="group flex items-center gap-2 cursor-pointer">
                  <RiArrowRightLine
                    size={11}
                    className="text-gold/0 group-hover:text-gold/60 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                  />
                  <ScrollLink
                    to={to}
                    smooth
                    spy
                    className="font-secondary text-[13px] font-medium text-white/35 hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Services ────────────────────────────────────── */}
          <motion.div variants={animItem}>
            <h4 className="font-secondary text-[10px] font-medium tracking-[0.26em] uppercase text-gold/70 mb-7">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map(({ name, id }, idx) => (
                <li
                  key={idx}
                  className="group flex items-center gap-2 cursor-pointer"
                  onClick={() => handleServiceClick(id)}
                >
                  <PiStarFourFill
                    className="text-gold/0 group-hover:text-gold/50 transition-colors duration-200 text-[7px] shrink-0"
                  />
                  <span className="font-secondary text-[13px] font-medium text-white/35 group-hover:text-white transition-colors duration-200">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Newsletter ───────────────────────────────────── */}
          <motion.div variants={animItem}>
            <h4 className="font-secondary text-[10px] font-medium tracking-[0.26em] uppercase text-gold/70 mb-7">
              Stay Updated
            </h4>
            <p className="font-secondary text-[13px] leading-[1.8] text-white/35 mb-6">
              Dental tips, clinic news, and special offers — delivered to your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-3 border border-gold/20 bg-gold/5"
              >
                <PiStarFourFill className="text-gold text-[9px] shrink-0" />
                <p className="font-secondary text-[12px] font-medium text-gold/80">
                  You're subscribed — thank you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-12 pl-4 pr-14 bg-white/[0.05] border border-white/[0.08] text-white text-[13px] font-secondary placeholder:text-white/20 outline-none focus:border-gold/30 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center bg-gold text-primary hover:bg-gold-light transition-colors duration-200"
                  aria-label="Subscribe"
                >
                  <RiSendPlaneFill size={14} />
                </button>
              </form>
            )}

            {/* Contact items */}
            <ul className="mt-8 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, value, href }, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <Icon
                    size={14}
                    className="text-gold/40 mt-0.5 shrink-0 group-hover:text-gold transition-colors duration-200"
                  />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-secondary text-[12px] text-white/30 hover:text-white/70 leading-snug transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-secondary text-[12px] text-white/30 leading-snug">
                      {value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-gold/15 via-white/[0.06] to-transparent" />

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <motion.div
          variants={animItem}
          className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-secondary text-[11px] text-white/20 tracking-wide">
            &copy; {new Date().getFullYear()} Sheger Dental Clinic. All rights reserved.
          </p>

          {/* Decorative center wordmark */}
          <div className="hidden xl:flex items-center gap-3">
            <div className="h-px w-8 bg-white/[0.07]" />
            <span className="font-primary italic text-[13px] text-white/15">
              Sheger Dental
            </span>
            <div className="h-px w-8 bg-white/[0.07]" />
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="font-secondary text-[11px] text-white/20 hover:text-white/50 transition-colors duration-200 tracking-wide">
              Privacy Policy
            </a>
            <div className="w-px h-3 bg-white/[0.08]" />
            <a href="#" className="font-secondary text-[11px] text-white/20 hover:text-white/50 transition-colors duration-200 tracking-wide">
              Terms of Service
            </a>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;