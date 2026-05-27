"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlusBold, PiMinusBold, PiStarFourFill } from "react-icons/pi";
import { RiArrowRightLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

/* ─── FAQ Data ───────────────────────────────────────────────────── */
const faqItemsData = [
  {
    title: "What happens during my first visit?",
    description:
      "Your first visit begins with a comprehensive consultation and digital examination, including X-rays and where appropriate, a 3D CBCT scan. Your dentist will discuss your oral health, listen to your concerns, and create a personalised treatment plan — with complete transparency on timelines and costs before anything begins.",
  },
  {
    title: "Are your procedures painful?",
    description:
      "Patient comfort is our highest priority. We use the latest anaesthetic techniques and, for anxious patients, offer conscious sedation options. Most patients are surprised at how comfortable modern dentistry can be. Our team works at your pace and will always pause if you need a moment.",
  },
  {
    title: "How long does a smile makeover take?",
    description:
      "It depends on the treatments involved. A teeth whitening session takes around 90 minutes. Porcelain veneers typically require two appointments over two to three weeks. Full smile makeovers involving multiple treatments are planned in stages and can take one to six months. We'll give you a clear timeline at your consultation.",
  },
  {
    title: "Do you offer payment plans?",
    description:
      "Yes. We believe everyone deserves access to excellent dental care. We offer flexible payment options and can spread the cost of larger treatments over several months. Our treatment coordinator will walk you through all available options with no pressure and no hidden fees.",
  },
  {
    title: "How often should I visit the dentist?",
    description:
      "We recommend a check-up and professional clean every six months for most patients. Some patients with specific conditions such as gum disease or higher decay risk may benefit from more frequent visits. Regular prevention is always less costly — in time and money — than treating problems after they arise.",
  },
  {
    title: "Are dental implants right for me?",
    description:
      "Implants are suitable for most adults with healthy gums and sufficient bone density. Our implant specialists use 3D imaging to assess your suitability precisely. Even if bone loss has occurred, procedures like bone grafting can often make implants possible. A consultation is the best first step.",
  },
];

/* ─── FAQ Item ───────────────────────────────────────────────────── */
const FaqItem = ({ title, description, isOpen, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
  >
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      className={[
        "group relative cursor-pointer border transition-all duration-400 outline-none",
        isOpen
          ? "bg-primary border-primary shadow-deep"
          : "bg-surface border-border hover:border-gold/30 shadow-card hover:shadow-elevated",
      ].join(" ")}
    >
      {/* Gold left bar — open state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-top"
          />
        )}
      </AnimatePresence>

      {/* Header row */}
      <div className="flex items-center justify-between gap-4 px-7 py-5">
        <div className="flex items-center gap-5">
          {/* Index */}
          <span
            className={[
              "font-secondary text-[11px] font-medium tracking-[0.18em] tabular-nums transition-colors duration-300 shrink-0",
              isOpen ? "text-gold/50" : "text-primary/20",
            ].join(" ")}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3
            className={[
              "font-primary text-[16px] xl:text-[18px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300",
              isOpen ? "text-white" : "text-primary",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>

        {/* Toggle icon */}
        <div
          className={[
            "flex items-center justify-center w-8 h-8 shrink-0 border transition-all duration-300",
            isOpen
              ? "border-gold/30 bg-gold/10 text-gold"
              : "border-border bg-transparent text-subtle group-hover:border-gold/30 group-hover:text-gold",
          ].join(" ")}
        >
          {isOpen
            ? <PiMinusBold size={12} />
            : <PiPlusBold size={12} />
          }
        </div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 pl-[4.75rem]">
              <div className="h-px bg-white/[0.08] mb-5" />
              <p className="font-secondary text-[14px] leading-[1.8] text-white/55">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

/* ─── FAQ Section ────────────────────────────────────────────────── */
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 xl:py-36 overflow-hidden bg-porcelain-section" id="faq">
      <div className="container">

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8 mb-14 xl:mb-16"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PiStarFourFill className="text-gold text-[10px]" />
              <span className="font-secondary text-[11px] font-medium tracking-[0.26em] uppercase text-gold">
                FAQ
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>

            <h2
              className="font-primary font-light text-primary leading-[1.1] tracking-[-0.02em] mb-1"
              style={{ fontSize: "clamp(32px, 3.8vw, 50px)" }}
            >
              Got Questions?
            </h2>
            <h2
              className="font-primary font-semibold text-primary leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 3.8vw, 50px)" }}
            >
              <span className="relative inline-block">
                We Have Answers.
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

          {/* Right */}
          <p className="font-secondary text-[15px] leading-[1.8] text-secondary max-w-sm xl:text-right">
            Everything you need to know before your first visit — from
            procedures and pricing to what to expect in the chair.
          </p>
        </motion.div>

        {/* ── FAQ Grid ─────────────────────────────────────────────── */}
        <div className="grid xl:grid-cols-2 gap-2.5 xl:gap-3">
          {faqItemsData.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              title={faq.title}
              description={faq.description}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

        {/* ── Bottom CTA Strip ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-5 bg-primary border-l-2 border-gold/60"
        >
          <div className="flex items-center gap-4">
            {/* Pulsing gold dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <p className="font-secondary text-[14px] text-white/60 leading-snug">
              Still have questions?{" "}
              <span className="text-white/85 font-medium">
                Our team is available Mon – Sat, 8am – 6pm.
              </span>
            </p>
          </div>

          <ScrollLink to="contact" smooth duration={500} className="shrink-0 cursor-pointer">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-3 overflow-hidden
                         bg-gold px-6 py-3
                         font-secondary text-[11px] font-semibold tracking-[0.16em] uppercase text-primary
                         transition-all duration-300 shadow-gold-glow hover:shadow-[0_6px_28px_rgba(201,168,76,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Book a Consultation</span>
              <RiArrowRightLine
                size={13}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </ScrollLink>
        </motion.div>

      </div>
    </section>
  );
};

export default Faq;