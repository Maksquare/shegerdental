"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
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
  RiArrowRightLine,
} from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

/* ─── Update with your real contact details ──────────────────────── */
const contactDetails = [
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "+251 91 234 5678",
    href: "tel:+251912345678",
    note: "Mon – Sat, 8am – 8pm",
  },
  {
    icon: RiWhatsappLine,
    label: "WhatsApp",
    value: "+251 91 234 5678",
    href: "https://wa.me/251912345678",
    note: "Fastest response",
  },
  {
    icon: RiMailLine,
    label: "Email",
    value: "hello@Texashomecare.com",
    href: "mailto:hello@Texashomecare.com",
    note: "We reply within 1 hour",
  },
  {
    icon: RiMapPinLine,
    label: "Address",
    value: "Bole Road, Addis Ababa",
    href: "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
    note: "Open in Maps",
  },
];

const socials = [
  { icon: RiInstagramLine,   label: "Instagram", href: "https://instagram.com" },
  { icon: RiFacebookBoxLine, label: "Facebook",  href: "https://facebook.com" },
  { icon: RiWhatsappLine,    label: "WhatsApp",  href: "https://wa.me/251912345678" },
  { icon: RiTiktokLine,      label: "TikTok",    href: "https://tiktok.com" },
];

/* ─── Nav links ──────────────────────────────────────────────────── */
const links = [
  { name: "Home",     link: "home"     },
  { name: "About",    link: "about"    },
  { name: "Services", link: "services" },
  { name: "Our Work", link: "our work" },
  { name: "Contact",  link: "contact"  },
];

const SCROLL_OFFSET = -120;

/* ─── Contact Drawer ─────────────────────────────────────────────── */
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
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Drawer panel — slides in from the right */}
      <motion.div
        className="relative ml-auto h-full w-full max-w-[520px] bg-primary flex flex-col overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Large faint background numeral — editorial texture */}
        <span
          className="pointer-events-none select-none absolute -bottom-6 -right-4 font-secondary text-[220px] font-bold leading-none text-white/[0.03]"
          aria-hidden="true"
        >
          C
        </span>

        {/* ── Header row ─────────────────────────────── */}
        <div className="flex items-center justify-between px-10 pt-10 pb-8 shrink-0">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-primary text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Contact Us
            </span>
          </motion.div>

          <motion.button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Close contact drawer"
          >
            <RiCloseLine size={18} />
          </motion.button>
        </div>

        {/* ── Headline ───────────────────────────────── */}
        <div className="px-10 mb-10 shrink-0">
          <motion.h2
            className="font-secondary text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's start a<br />
            <span className="text-accent">conversation.</span>
          </motion.h2>

          <motion.p
            className="font-primary text-sm text-white/50 mt-3 leading-relaxed max-w-[320px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.45 }}
          >
            Our care team is always close. Reach out through any of the channels below.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          className="mx-10 h-px bg-white/10 mb-8 shrink-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.38, duration: 0.5 }}
        />

        {/* ── Contact rows ───────────────────────────── */}
        <div className="px-10 flex flex-col gap-3 overflow-y-auto scrollbar-none">
          {contactDetails.map(({ icon: Icon, label, value, href, note }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 hover:border-accent/35 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon bubble */}
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.06] group-hover:bg-accent/15 transition-colors duration-300 shrink-0">
                <Icon size={19} className="text-white/40 group-hover:text-accent transition-colors duration-300" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-primary text-[10px] font-bold tracking-[0.18em] uppercase text-white/25 mb-0.5">
                  {label}
                </p>
                <p className="font-primary text-sm font-semibold text-white/80 group-hover:text-white truncate transition-colors duration-200">
                  {value}
                </p>
                <p className="font-primary text-[11px] text-white/30 mt-0.5">{note}</p>
              </div>

              {/* Arrow */}
              <RiArrowRightUpLine
                size={15}
                className="shrink-0 text-white/15 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>

        {/* ── Socials + footer ───────────────────────── */}
        <motion.div
          className="mt-auto px-10 pb-10 pt-8 shrink-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
        >
          {/* Divider */}
          <div className="h-px bg-white/10 mb-7" />

          <p className="font-primary text-[10px] font-bold tracking-[0.2em] uppercase text-white/25 mb-4">
            Follow us
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-white/35 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.68 + i * 0.06 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="font-primary text-[11px] text-white/20 mt-6 leading-relaxed">
            Free assessment call · No commitment required
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Header ─────────────────────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [activeLink, setActiveLink]     = useState("home");
  const [contactOpen, setContactOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll lock — position-fixed trick works even if a parent has
     overflow: hidden in global CSS. Saves & restores scroll position. */
  useEffect(() => {
    if (contactOpen) {
      const y = window.scrollY;
      document.body.dataset.scrollY = String(y);
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const y = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, y);
    }
    return () => {
      const y = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, y);
    };
  }, [contactOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "top-0 bg-primary/95 backdrop-blur-md shadow-custom py-3"
            : "top-12 bg-primary py-4",
        ].join(" ")}
      >
        {/* Top accent line */}
        <div
          className={[
            "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent",
            "transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div className="container">
          <div className="flex items-center justify-between gap-8">

            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-10">
              <ul className="flex items-center gap-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={link.link}
                      smooth
                      spy
                      offset={SCROLL_OFFSET}
                      className="cursor-pointer"
                      onSetActive={() => setActiveLink(link.link)}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.15 }}
                        className={[
                          "relative inline-flex flex-col items-center px-3 py-1.5",
                          "font-primary text-xs font-semibold tracking-[0.15em] uppercase",
                          "transition-colors duration-200",
                          activeLink === link.link
                            ? "text-accent"
                            : "text-white/70 hover:text-white",
                        ].join(" ")}
                      >
                        {link.name}
                        <span
                          className={[
                            "absolute -bottom-0.5 left-1/2 -translate-x-1/2",
                            "w-1 h-1 rounded-full bg-accent transition-all duration-300",
                            activeLink === link.link
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0",
                          ].join(" ")}
                        />
                      </motion.span>
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-px h-6 bg-white/15" />

              {/* CTA — opens contact drawer */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setContactOpen(true); }}
                className="group flex items-center rounded-lg bg-accent
                           pl-5 pr-1.5 py-1.5
                           font-primary text-xs font-bold tracking-[0.15em] uppercase text-primary
                           transition-all duration-200 shadow-custom
                           hover:brightness-105 active:scale-[0.97]"
              >
                <span className="mr-4 transition-all duration-200 group-hover:mr-5">
                  Contact Us
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 transition-all duration-200 group-hover:bg-primary/25">
                  <RiArrowRightUpLine className="text-base transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </nav>

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <NavMobile />
            </div>

          </div>
        </div>
      </motion.header>

      {/* Contact Drawer — mounted in a portal to escape any parent stacking context */}
      {typeof window !== "undefined" && createPortal(
        <AnimatePresence>
          {contactOpen && (
            <ContactDrawer onClose={() => setContactOpen(false)} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;