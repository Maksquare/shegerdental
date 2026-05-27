"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTiktokLine,
} from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

/* ─── Smooth scroll helper — no library, no conflicts ───────────── */
const scrollToSection = (id, offset = -80) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
};

/* ─── Nav Links ─────────────────────────────────────────────────── */
const links = [
  { name: "Home",     id: "home"     },
  { name: "About",    id: "about"    },
  { name: "Services", id: "services" },
  { name: "Our Work", id: "our-work" },
  { name: "Contact",  id: "contact"  },
];

/* ─── Contact Details ───────────────────────────────────────────── */
const contactDetails = [
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "+251 95 494 4389",
    href: "tel:+251954944389",
    note: "Mon – Sat, 8am – 6pm",
  },
  {
    icon: RiWhatsappLine,
    label: "WhatsApp",
    value: "+251 95 494 4389",
    href: "https://wa.me/251954944389",
    note: "Fastest response",
  },
  {
    icon: RiMailLine,
    label: "Email",
    value: "info@shegerdentalclinic.com",
    href: "mailto:info@shegerdentalclinic.com",
    note: "We reply within 1 hour",
  },
  {
    icon: RiMapPinLine,
    label: "Location",
    value: "Bole Road, Addis Ababa",
    href: "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
    note: "Open in Maps",
  },
];

const socials = [
  { icon: RiInstagramLine,   label: "Instagram", href: "https://instagram.com" },
  { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com"  },
  { icon: RiWhatsappLine,    label: "WhatsApp",  href: "https://wa.me/251954944389" },
  { icon: RiTiktokLine,      label: "TikTok",    href: "https://tiktok.com"    },
];

/* ─── Announcement Bar ──────────────────────────────────────────── */
const AnnouncementBar = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="announcement"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-primary border-b border-white/[0.07]"
      >
        <div className="container">
          <div className="flex items-center justify-between py-2.5">
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
              <span className="font-secondary text-[11px] tracking-[0.18em] uppercase text-white/40">
                Sheger Dental Clinic — Addis Ababa
              </span>
            </div>
            <p className="font-secondary text-[11px] text-white/55 tracking-wide text-center flex-1 md:flex-none">
              <span className="text-gold font-medium">New patients welcome</span>
              &nbsp;· Free first consultation this month
            </p>
            <a
              href="tel:+251954944389"
              className="hidden md:flex items-center gap-1.5 text-white/40 hover:text-gold transition-colors duration-200"
            >
              <RiPhoneLine size={12} />
              <span className="font-secondary text-[11px] tracking-wide">+251 95 494 4389</span>
            </a>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── Contact Drawer ────────────────────────────────────────────── */
const ContactDrawer = ({ onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="absolute inset-0 bg-primary/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        className="relative ml-auto h-full w-full max-w-[500px] bg-primary flex flex-col overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="pointer-events-none select-none absolute -bottom-4 -right-2 font-primary text-[260px] font-light leading-none text-white/[0.025] italic" aria-hidden="true">
          S
        </span>

        <div className="flex items-center justify-between px-10 pt-10 pb-8 shrink-0">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-6 bg-gold" />
            <span className="font-secondary text-[10px] font-medium tracking-[0.28em] uppercase text-gold">
              Get in Touch
            </span>
          </motion.div>
          <motion.button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 border border-white/10 text-white/40 hover:text-white hover:border-gold/50 transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            aria-label="Close"
          >
            <RiCloseLine size={17} />
          </motion.button>
        </div>

        <div className="px-10 mb-10 shrink-0">
          <motion.h2
            className="font-primary text-[44px] font-light text-white leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Your smile begins<br />
            <em className="not-italic text-shimmer">with a conversation.</em>
          </motion.h2>
          <motion.p
            className="font-secondary text-[14px] text-white/45 mt-4 leading-relaxed max-w-[300px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Our team is here to answer your questions and schedule your visit at a time that suits you.
          </motion.p>
        </div>

        <motion.div
          className="mx-10 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent mb-8 shrink-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        />

        <div className="px-10 flex flex-col gap-2.5 overflow-y-auto">
          {contactDetails.map(({ icon: Icon, label, value, href, note }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-4 border border-white/[0.06] hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center w-10 h-10 border border-white/[0.07] group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                <Icon size={17} className="text-white/30 group-hover:text-gold transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-secondary text-[10px] font-medium tracking-[0.2em] uppercase text-white/25 mb-0.5">{label}</p>
                <p className="font-secondary text-[14px] font-medium text-white/70 group-hover:text-white truncate transition-colors duration-200">{value}</p>
                <p className="font-secondary text-[11px] text-white/25 mt-0.5">{note}</p>
              </div>
              <RiArrowRightUpLine size={14} className="shrink-0 text-white/15 group-hover:text-gold transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-auto px-10 pb-10 pt-8 shrink-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.4 }}
        >
          <div className="h-px bg-white/[0.07] mb-7" />
          <p className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-white/25 mb-4">Follow Us</p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 border border-white/[0.08] text-white/30 hover:text-gold hover:border-gold/40 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.66 + i * 0.06 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-7">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="font-primary italic text-[13px] text-white/20">Sheger Dental</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <p className="font-secondary text-[11px] text-white/20 mt-3 tracking-wide">
            Free consultation · No commitment required
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Header ────────────────────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [activeLink, setActiveLink]   = useState("home");
  const [contactOpen, setContactOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mounted, setMounted]         = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* Track scroll for header style + active section */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 120) setAnnouncementVisible(false);

      // Determine active section by proximity
      let current = "home";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveLink(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll lock — only runs when drawer is open */
  useEffect(() => {
    if (!contactOpen) return;
    const y = window.scrollY;
    document.body.dataset.scrollY = String(y);
    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    return () => {
      const savedY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo({ top: savedY, behavior: "instant" });
    };
  }, [contactOpen]);

  const handleNavClick = useCallback((id) => {
    setActiveLink(id);
    scrollToSection(id, -80);
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 z-50">
        <AnnouncementBar visible={announcementVisible && !scrolled} />

        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "transition-all duration-500",
            scrolled
              ? "bg-primary/95 backdrop-blur-xl shadow-deep py-3 border-b border-white/[0.06]"
              : "bg-primary py-5",
          ].join(" ")}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <div className="container">
            <div className="flex items-center justify-between gap-8">

              <Logo />

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center gap-8">
                <ul className="flex items-center gap-0.5">
                  {links.map(({ name, id }) => (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(id)}
                        className={[
                          "relative inline-flex flex-col items-center px-4 py-2",
                          "font-secondary text-[11px] font-medium tracking-[0.18em] uppercase",
                          "transition-colors duration-200 cursor-pointer select-none",
                          "hover:-translate-y-px",
                          activeLink === id
                            ? "text-gold"
                            : "text-white/55 hover:text-white",
                        ].join(" ")}
                      >
                        {name}

                        {/* Active dot */}
                        <span
                          className={[
                            "absolute -bottom-0.5 left-1/2 -translate-x-1/2",
                            "w-1 h-1 rounded-full bg-gold",
                            "transition-all duration-300",
                            activeLink === id
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0",
                          ].join(" ")}
                        />

                        {/* Hover underline */}
                        <span
                          className={[
                            "absolute -bottom-0.5 left-4 right-4 h-px bg-gold/40",
                            "transition-all duration-300 origin-left",
                            activeLink === id
                              ? "opacity-0 scale-x-0"
                              : "scale-x-0 hover:scale-x-100 opacity-100",
                          ].join(" ")}
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="w-px h-5 bg-white/10" />

                {/* Book Appointment CTA */}
                <motion.button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative flex items-center gap-3 overflow-hidden
                             bg-gold px-6 py-3
                             font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-primary
                             transition-all duration-300 shadow-gold-glow
                             hover:shadow-[0_6px_32px_rgba(201,168,76,0.45)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative">Book Appointment</span>
                  <span className="relative flex items-center justify-center w-6 h-6 bg-primary/15 transition-all duration-300 group-hover:bg-primary/25">
                    <RiArrowRightUpLine size={13} className="transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </motion.button>
              </nav>

              {/* Mobile Nav */}
              <div className="xl:hidden">
                <NavMobile />
              </div>

            </div>
          </div>
        </motion.header>
      </div>

      {/* Contact Drawer Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {contactOpen && <ContactDrawer onClose={() => setContactOpen(false)} />}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;