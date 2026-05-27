"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  PiCheckFat,
  PiArrowRightBold,
  PiXBold,
  PiStarFourFill,
  PiArrowUpRightBold,
} from "react-icons/pi";

const MotionLi = motion.li;

/* ─── Animation variants ─────────────────────────────────────────── */
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.22 } },
};

const panelVariants = {
  hidden:  { opacity: 0, y: 36, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Dental-specific mini stats ────────────────────────────────── */
const miniStats = [
  { label: "Consultations",  value: "Free"      },
  { label: "Technology",     value: "Digital 3D" },
  { label: "Specialists",    value: "Certified"  },
];

export default function ServiceModal({ service, open, onOpenChange, onBookConsultation }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!service) return null;

  function handleContact() {
    onOpenChange(false);
    onBookConsultation?.();
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* ── Overlay ──────────────────────────────────────── */}
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed inset-0 z-[80] bg-primary/70 backdrop-blur-md"
                />
              </Dialog.Overlay>

              {/* ── Panel ────────────────────────────────────────── */}
              <Dialog.Content asChild forceMount>
                <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
                  <VisuallyHidden.Root>
                    <Dialog.Title>{service?.name ?? "Service details"}</Dialog.Title>
                  </VisuallyHidden.Root>

                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={[
                      "relative w-full max-w-5xl max-h-[92vh]",
                      "bg-surface shadow-deep",
                      "flex flex-col overflow-hidden",
                      "outline-none pointer-events-auto",
                      "border border-border",
                    ].join(" ")}
                    style={{ willChange: "transform, opacity" }}
                  >
                    {/* Gold top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

                    {/* ── Header Bar ───────────────────────────── */}
                    <div className="relative flex items-center justify-between px-7 py-5 border-b border-border shrink-0">
                      <div className="flex items-center gap-4">
                        {/* Icon square */}
                        <div className="flex items-center justify-center w-10 h-10 border border-gold/20 bg-gold/5 shrink-0">
                          {service.icon && (
                            <service.icon size={17} className="text-gold" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <PiStarFourFill className="text-gold/50 text-[8px]" />
                            <p className="font-secondary text-[10px] font-medium tracking-[0.24em] uppercase text-gold/80">
                              {service.tag} — {service.name}
                            </p>
                          </div>
                          <p
                            className="font-primary font-semibold text-primary leading-tight tracking-[-0.01em]"
                            style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                          >
                            {service.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Premium badge */}
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gold/20 bg-gold/5">
                          <PiStarFourFill className="text-gold text-[8px]" />
                          <span className="font-secondary text-[10px] font-medium tracking-[0.18em] uppercase text-gold/80">
                            Premium Care
                          </span>
                        </div>

                        {/* Close button */}
                        <Dialog.Close asChild>
                          <button
                            className={[
                              "flex items-center justify-center w-9 h-9",
                              "border border-border text-subtle",
                              "hover:border-gold/40 hover:text-gold",
                              "transition-all duration-200 outline-none",
                            ].join(" ")}
                            aria-label="Close"
                          >
                            <PiXBold size={13} />
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>

                    {/* ── Scrollable Body ──────────────────────── */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="flex flex-col lg:flex-row">

                        {/* ── Left: Images & stats ─────────────── */}
                        <div className="shrink-0 lg:w-[250px] xl:w-[270px] p-6 bg-porcelain flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-border">

                          {/* Thumbnails */}
                          <div className="flex lg:flex-col gap-3">
                            {service.thumbs.map((thumb, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                className="relative flex-1 min-h-[120px] overflow-hidden bg-primary/5"
                                style={{ aspectRatio: "4/3" }}
                              >
                                <Image
                                  src={thumb.url}
                                  alt={thumb.alt}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                                {/* Gold hover overlay */}
                                <div className="absolute inset-0 bg-gold/0 hover:bg-gold/10 transition-colors duration-300" />
                              </motion.div>
                            ))}
                          </div>

                          {/* Mini stats */}
                          <div className="flex lg:flex-col gap-2">
                            {miniStats.map(({ label, value }, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + i * 0.07 }}
                                className="flex-1 lg:flex-none flex items-center justify-between gap-3 px-4 py-3 bg-surface border border-border hover:border-gold/25 transition-colors duration-200"
                              >
                                <span className="font-secondary text-[11px] font-medium text-subtle tracking-wide">
                                  {label}
                                </span>
                                <span
                                  className="font-primary font-semibold text-primary leading-none"
                                  style={{ fontSize: "clamp(13px, 1.2vw, 15px)" }}
                                >
                                  {value}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Gold divider */}
                          <div className="hidden lg:block h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mt-auto" />
                        </div>

                        {/* ── Right: Content ───────────────────── */}
                        <div className="flex-1 p-7 xl:p-9">

                          {/* Subtitle */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="font-primary italic text-[14px] text-gold/80 mb-4 font-light"
                          >
                            {service.subtitle}
                          </motion.p>

                          {/* Gold rule */}
                          <div className="w-10 h-px bg-gold/30 mb-5" />

                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 }}
                            className="font-secondary text-[14px] leading-[1.8] text-secondary mb-8 max-w-xl"
                          >
                            {service.description}
                          </motion.p>

                          {/* What's included label */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.22 }}
                            className="flex items-center gap-3 mb-6"
                          >
                            <div className="h-px flex-1 bg-border" />
                            <span className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-subtle">
                              What's Included
                            </span>
                            <div className="h-px flex-1 bg-border" />
                          </motion.div>

                          {/* Items grid */}
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
                            {service.items.map((itm, idx) => (
                              <MotionLi
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.28 + idx * 0.045 }}
                                className="flex items-start gap-3 group"
                              >
                                <div className="flex items-center justify-center w-5 h-5 border border-gold/25 bg-gold/5 shrink-0 mt-[1px] group-hover:bg-gold/15 transition-colors duration-200">
                                  <PiCheckFat className="text-gold text-[9px]" />
                                </div>
                                <span className="font-secondary text-[13px] font-medium text-primary/80 leading-snug group-hover:text-primary transition-colors duration-200">
                                  {itm}
                                </span>
                              </MotionLi>
                            ))}
                          </ul>

                          {/* Commitment banner */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38 }}
                            className="flex items-center gap-4 p-5 border border-gold/15 bg-gold/[0.03] mb-8"
                          >
                            <div className="w-[2px] h-12 bg-gradient-to-b from-gold to-gold/20 shrink-0" />
                            <div>
                              <p className="font-secondary text-[10px] font-medium tracking-[0.22em] uppercase text-subtle mb-1">
                                Our Commitment
                              </p>
                              <p className="font-secondary text-[13px] text-primary/75 leading-snug">
                                Every treatment is delivered by certified specialists using cutting-edge technology — with your comfort and confidence at the centre of every decision.
                              </p>
                            </div>
                          </motion.div>

                          {/* ── CTA Row ─────────────────────────── */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.42 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-border"
                          >
                            {/* Primary CTA */}
                            <motion.button
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={handleContact}
                              className="group relative flex items-center justify-center gap-3 overflow-hidden
                                         bg-primary px-7 py-3.5
                                         font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-white
                                         transition-all duration-300 hover:shadow-deep"
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                              <span className="relative">Book a Consultation</span>
                              <PiArrowRightBold size={11} className="relative transition-transform duration-300 group-hover:translate-x-0.5" />
                            </motion.button>

                            {/* Secondary CTA */}
                            <motion.button
                              whileHover={{ y: -1 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={handleContact}
                              className="flex items-center justify-center gap-2 px-6 py-3.5
                                         border border-border text-primary
                                         font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase
                                         hover:border-gold/40 hover:text-gold transition-all duration-200"
                            >
                              Contact Us
                              <PiArrowUpRightBold size={11} />
                            </motion.button>

                            {/* Quick-dial */}
                            <a
                              href="tel:+251912345678"
                              className="font-secondary text-[12px] font-medium text-subtle hover:text-gold transition-colors duration-200 sm:ml-auto tracking-wide"
                            >
                              +251 91 234 5678
                            </a>
                          </motion.div>

                        </div>
                      </div>
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