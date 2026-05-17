"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  PiCheckCircleFill,
  PiArrowRightBold,
  PiXBold,
  PiStarFill,
  PiArrowUpRightBold,
} from "react-icons/pi";

const MotionLi = motion.li;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.22 } },
};

const panelVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } },
};

// onBookConsultation — called by both "Book a Consultation" and "Contact Us"
// closes this modal and opens the ContactModal in the parent
export default function ServiceModal({ service, open, onOpenChange, onBookConsultation }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!service) return null;

  function handleContact() {
    onOpenChange(false);          // close service modal
    onBookConsultation?.();       // open contact modal
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* ── Overlay ── */}
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  variants={overlayVariants}
                  initial="hidden" animate="visible" exit="exit"
                  className="fixed inset-0 z-[80] bg-primary/40 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              {/* ── Centering wrapper ── */}
              <Dialog.Content asChild forceMount>
                <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
                  {/* Hidden title — satisfies Radix a11y requirement */}
                  <VisuallyHidden.Root>
                    <Dialog.Title>{service?.name ?? "Service details"}</Dialog.Title>
                  </VisuallyHidden.Root>
                  <motion.div
                    variants={panelVariants}
                    initial="hidden" animate="visible" exit="exit"
                    className={[
                      "relative w-full max-w-5xl max-h-[92vh]",
                      "bg-white rounded-3xl shadow-[0_32px_80px_rgba(201,64,112,0.18)]",
                      "flex flex-col overflow-hidden",
                      "outline-none pointer-events-auto",
                    ].join(" ")}
                    style={{ willChange: "transform, opacity" }}
                  >
                    {/* ── Header Bar ── */}
                    <div className="relative flex items-center justify-between px-7 py-5 border-b border-border shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent text-xl shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-primary text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                            {service.tag} — {service.name}
                          </p>
                          <p className="font-secondary text-lg font-bold text-primary leading-tight">
                            {service.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold font-primary text-primary/70">
                          <PiStarFill className="text-accent text-[10px]" />
                          Premium Care
                        </span>
                        <Dialog.Close asChild>
                          <button
                            className={[
                              "flex items-center justify-center w-9 h-9 rounded-xl",
                              "bg-surface border border-border text-muted",
                              "hover:bg-primary hover:text-white hover:border-primary",
                              "transition-all duration-200 outline-none",
                            ].join(" ")}
                            aria-label="Close"
                          >
                            <PiXBold className="text-sm" />
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>

                    {/* ── Scrollable Body ── */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="flex flex-col lg:flex-row">

                        {/* ── Left: Images & mini-stats ── */}
                        <div className="shrink-0 lg:w-[260px] xl:w-[280px] p-6 bg-[#fdf4f7] flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-border">
                          <div className="flex lg:flex-col gap-3">
                            {service.thumbs.map((thumb, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                className="relative flex-1 min-h-[130px] rounded-2xl overflow-hidden bg-primary/5"
                                style={{ aspectRatio: "4/3" }}
                              >
                                <Image src={thumb.url} alt={thumb.alt} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none rounded-2xl" />
                                <div className="absolute inset-0 rounded-2xl border border-accent/15 pointer-events-none" />
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex lg:flex-col gap-2">
                            {[
                              { label: "Availability", value: "24 / 7"    },
                              { label: "Setup Time",   value: "≤ 48 hrs"  },
                              { label: "Staff",        value: "Licensed"  },
                            ].map((stat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + i * 0.07 }}
                                className="flex-1 lg:flex-none flex lg:flex-row items-center justify-between lg:justify-start lg:gap-3 px-4 py-3 rounded-xl bg-white border border-border"
                              >
                                <span className="font-primary text-[11px] font-medium text-muted">{stat.label}</span>
                                <span className="font-secondary text-sm font-bold text-primary">{stat.value}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="hidden lg:block h-px w-full bg-gradient-to-r from-accent/30 via-primary/10 to-transparent mt-auto" />
                        </div>

                        {/* ── Right: Content ── */}
                        <div className="flex-1 p-7 xl:p-9">
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="font-primary text-sm font-semibold text-accent mb-3 tracking-wide"
                          >
                            {service.subtitle}
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 }}
                            className="font-primary text-sm leading-relaxed text-secondary mb-8 max-w-xl"
                          >
                            {service.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.22 }}
                            className="flex items-center gap-3 mb-5"
                          >
                            <div className="h-px flex-1 bg-border" />
                            <span className="font-primary text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                              What's Included
                            </span>
                            <div className="h-px flex-1 bg-border" />
                          </motion.div>

                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mb-10">
                            {service.items.map((item, idx) => (
                              <MotionLi
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.28 + idx * 0.045 }}
                                className="flex items-start gap-2.5 group"
                              >
                                <PiCheckCircleFill className="text-accent text-base shrink-0 mt-[1px] group-hover:scale-110 transition-transform" />
                                <span className="font-primary text-sm font-medium text-primary leading-snug">
                                  {item}
                                </span>
                              </MotionLi>
                            ))}
                          </ul>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38 }}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary/[0.06] to-accent/[0.06] border border-primary/10 mb-8"
                          >
                            <div className="w-2 h-12 rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                            <div>
                              <p className="font-primary text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                                Our Commitment
                              </p>
                              <p className="font-primary text-sm font-medium text-primary leading-snug">
                                Every service is delivered by licensed professionals with a focus on dignity, comfort, and clinical excellence.
                              </p>
                            </div>
                          </motion.div>

                          {/* ── CTA Row ── */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.42 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-5 border-t border-border"
                          >
                            {/* Book a Consultation → closes this, opens ContactModal */}
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={handleContact}
                              className={[
                                "flex items-center justify-center gap-2.5",
                                "px-7 py-3.5 rounded-xl",
                                "bg-primary text-white",
                                "font-primary text-sm font-semibold tracking-wide",
                                "shadow-[0_4px_24px_rgba(201,64,112,0.3)]",
                                "hover:bg-primary/90 transition-all duration-200",
                              ].join(" ")}
                            >
                              Book a Consultation
                              <PiArrowRightBold className="text-xs" />
                            </motion.button>

                            {/* Contact Us → same behaviour */}
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={handleContact}
                              className={[
                                "flex items-center justify-center gap-2",
                                "px-6 py-3.5 rounded-xl",
                                "bg-transparent border border-border text-primary",
                                "font-primary text-sm font-semibold",
                                "hover:border-accent hover:text-accent transition-all duration-200",
                              ].join(" ")}
                            >
                              Contact Us
                              <PiArrowUpRightBold className="text-xs" />
                            </motion.button>

                            {/* Quick-dial link */}
                            <a
                              href="tel:+251911234567"
                              className="font-primary text-xs font-medium text-muted hover:text-primary transition-colors sm:ml-auto"
                            >
                              +251 91 123 4567
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