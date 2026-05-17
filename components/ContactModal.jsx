"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  PiXBold,
  PiPhoneFill,
  PiEnvelopeFill,
  PiMapPinFill,
  PiClockFill,
  PiWhatsappLogoFill,
  PiTelegramLogoFill,
  PiInstagramLogoFill,
  PiFacebookLogoFill,
  PiArrowRightBold,
} from "react-icons/pi";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28 } },
  exit:    { opacity: 0, transition: { duration: 0.2  } },
};

const panelVariants = {
  hidden:   { opacity: 0, y: 36, scale: 0.97 },
  visible:  { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:     { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } },
};

const contactChannels = [
  {
    icon: <PiPhoneFill />,
    label: "Main Line",
    value: "+251 91 123 4567",
    sub: "Call us anytime",
    href: "tel:+251911234567",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <PiWhatsappLogoFill />,
    label: "WhatsApp",
    value: "+251 91 123 4567",
    sub: "Chat with us",
    href: "https://wa.me/251911234567",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <PiTelegramLogoFill />,
    label: "Telegram",
    value: "@Texashomecare",
    sub: "Message us on Telegram",
    href: "https://t.me/Texashomecare",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <PiEnvelopeFill />,
    label: "Email",
    value: "Texashomecare@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:Texashomecare@gmail.com",
    color: "bg-primary/10 text-primary",
  },
];

const socialLinks = [
  { icon: <PiFacebookLogoFill />, label: "Facebook",  href: "https://facebook.com/Texashomecare"  },
  { icon: <PiInstagramLogoFill />, label: "Instagram", href: "https://instagram.com/Texashomecare" },
  { icon: <PiTelegramLogoFill />, label: "Telegram",  href: "https://t.me/Texashomecare"          },
  { icon: <PiWhatsappLogoFill />, label: "WhatsApp",  href: "https://wa.me/251911234567"       },
];

export default function ContactModal({ open, onOpenChange }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  variants={overlayVariants}
                  initial="hidden" animate="visible" exit="exit"
                  className="fixed inset-0 z-[80] bg-primary/40 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              {/* Panel */}
              <Dialog.Content asChild forceMount>
                <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
                  <motion.div
                    variants={panelVariants}
                    initial="hidden" animate="visible" exit="exit"
                    className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-3xl shadow-[0_32px_80px_rgba(201,64,112,0.18)] flex flex-col overflow-hidden outline-none pointer-events-auto"
                  >

                    {/* ── Header ── */}
                    <div className="relative px-7 py-6 border-b border-border shrink-0 overflow-hidden">
                      {/* Decorative blob */}
                      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-2xl pointer-events-none" />

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          {/* Eyebrow */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-px w-6 bg-accent" />
                            <span className="font-primary text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                              Get In Touch
                            </span>
                          </div>
                          {/* FIX: replaced <h2> with <Dialog.Title> to satisfy Radix accessibility requirement */}
                          <Dialog.Title className="font-secondary text-2xl font-bold text-primary leading-tight">
                            Book a Consultation
                          </Dialog.Title>
                          <p className="font-primary text-sm text-secondary mt-1 max-w-xs">
                            Reach out through any channel — our care team is ready 24/7.
                          </p>
                        </div>

                        <Dialog.Close asChild>
                          <button
                            className="flex items-center justify-center w-9 h-9 rounded-xl bg-surface border border-border text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 outline-none shrink-0 mt-1"
                            aria-label="Close"
                          >
                            <PiXBold className="text-sm" />
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>

                    {/* ── Scrollable Body ── */}
                    <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-7">

                      {/* ── Contact channels grid ── */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {contactChannels.map((ch, idx) => (
                          <motion.a
                            key={idx}
                            href={ch.href}
                            target={ch.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + idx * 0.07 }}
                            whileHover={{ y: -2 }}
                            className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-custom transition-all duration-200 group"
                          >
                            {/* Icon */}
                            <div className={`flex items-center justify-center w-11 h-11 rounded-xl text-xl shrink-0 transition-transform duration-200 group-hover:scale-110 ${ch.color}`}>
                              {ch.icon}
                            </div>
                            {/* Text */}
                            <div className="min-w-0">
                              <p className="font-primary text-[11px] font-semibold uppercase tracking-widest text-muted mb-0.5">
                                {ch.label}
                              </p>
                              <p className="font-primary text-sm font-bold text-primary truncate">
                                {ch.value}
                              </p>
                              <p className="font-primary text-xs text-secondary">
                                {ch.sub}
                              </p>
                            </div>
                            {/* Arrow */}
                            <PiArrowRightBold className="text-muted text-xs ml-auto shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </motion.a>
                        ))}
                      </div>

                      {/* ── Divider ── */}
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <span className="font-primary text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                          More Ways to Reach Us
                        </span>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      {/* ── Address + Hours ── */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.36 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#fdf4f7] border border-border">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-lg shrink-0 mt-0.5">
                            <PiMapPinFill />
                          </div>
                          <div>
                            <p className="font-primary text-[11px] font-semibold uppercase tracking-widest text-muted mb-1">
                              Our Office
                            </p>
                            <p className="font-primary text-sm font-medium text-primary leading-snug">
                              Bole Sub-city, Woreda 03<br />
                              Addis Ababa, Ethiopia
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#fdf4f7] border border-border">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-lg shrink-0 mt-0.5">
                            <PiClockFill />
                          </div>
                          <div>
                            <p className="font-primary text-[11px] font-semibold uppercase tracking-widest text-muted mb-1">
                              Working Hours
                            </p>
                            <p className="font-primary text-sm font-medium text-primary leading-snug">
                              Mon – Sat: 8:00 AM – 8:00 PM<br />
                              Emergency: 24 / 7
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* ── Social links ── */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.44 }}
                        className="flex flex-col gap-3"
                      >
                        <p className="font-primary text-[11px] font-semibold uppercase tracking-widest text-muted">
                          Follow Us
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          {socialLinks.map((s, idx) => (
                            <motion.a
                              key={idx}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-custom transition-all duration-200 text-primary"
                              aria-label={s.label}
                            >
                              <span className="text-lg">{s.icon}</span>
                              <span className="font-primary text-xs font-semibold">{s.label}</span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>

                      {/* ── Bottom commitment strip ── */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary/[0.06] to-accent/[0.06] border border-primary/10"
                      >
                        <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                        <p className="font-primary text-sm font-medium text-primary leading-snug">
                          Our care coordinators typically respond within{" "}
                          <span className="font-bold text-primary">30 minutes</span>{" "}
                          during working hours, and within{" "}
                          <span className="font-bold text-primary">2 hours</span>{" "}
                          for after-hours inquiries.
                        </p>
                      </motion.div>

                    </div>
                  </motion.div>
                </div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}