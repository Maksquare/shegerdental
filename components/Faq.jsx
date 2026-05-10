"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";

const faqItemsData = [
  {
    title: "What services does homecare cover?",
    description:
      "Homecare includes daily assistance, medication reminders, nursing care, and specialized support based on individual needs. Our team tailors every plan to the specific condition and lifestyle of your loved one.",
  },
  {
    title: "How do I choose the right caregiver?",
    description:
      "We match caregivers based on experience, skills, and personality to fit your loved one's specific needs. You'll meet your caregiver before care begins — no surprises.",
  },
  {
    title: "Is homecare available 24/7?",
    description:
      "Yes, we offer round-the-clock care for clients who need continuous support at home. Our on-call team is always reachable for any urgent needs.",
  },
  {
    title: "How is care monitored and reviewed?",
    description:
      "Our team regularly reviews care plans and conducts check-ins to ensure quality and safety. Families receive updates and can request reviews at any time.",
  },
  {
    title: "Can homecare support medical needs?",
    description:
      "Absolutely. Our trained nurses provide medical monitoring, medication administration, and assistance with medical equipment including oxygen concentrators, CPAP machines, and more.",
  },
  {
    title: "How much does homecare cost?",
    description:
      "Costs vary based on care level, hours, and specific services. We provide clear, transparent quotes before starting — no hidden fees, ever.",
  },
];

const FaqItem = ({ title, description, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        onClick={onClick}
        className={[
          "group relative cursor-pointer rounded-2xl border transition-all duration-300",
          isOpen
            ? "bg-primary border-primary shadow-custom"
            : "bg-white border-border hover:border-primary/20 shadow-sm hover:shadow-custom",
        ].join(" ")}
      >
        {/* Accent left bar when open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-accent origin-top"
            />
          )}
        </AnimatePresence>

        {/* Header row */}
        <div className="flex items-center justify-between gap-4 px-7 py-5">
          <div className="flex items-center gap-4">
            {/* Index number */}
            <span
              className={[
                "font-primary text-xs font-bold tabular-nums transition-colors duration-300",
                isOpen ? "text-accent/60" : "text-primary/20",
              ].join(" ")}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3
              className={[
                "font-secondary text-base xl:text-lg font-bold leading-snug tracking-tight transition-colors duration-300",
                isOpen ? "text-white" : "text-primary",
              ].join(" ")}
            >
              {title}
            </h3>
          </div>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={[
              "flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-all duration-300",
              isOpen
                ? "bg-accent/20 text-accent"
                : "bg-primary/5 text-primary group-hover:bg-primary/10",
            ].join(" ")}
          >
            {isOpen ? (
              <PiMinusBold className="text-sm" />
            ) : (
              <PiPlusBold className="text-sm" />
            )}
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 pb-6 pl-[4.5rem]">
                <div className="h-px bg-white/10 mb-5" />
                <p className="font-primary text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 xl:py-36 overflow-hidden" id="faq">
      <div className="container">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8 mb-14 xl:mb-16"
        >
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                FAQ
              </span>
            </div>

            <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-primary leading-tight tracking-tight max-w-lg">
              Got Questions?{" "}
              <span className="relative inline-block">
                We're Here
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
                />
              </span>{" "}
              for You
            </h2>
          </div>

          {/* Right */}
          <p className="font-primary text-base leading-relaxed text-secondary max-w-sm xl:text-right">
            From care plans to daily support — answers to the questions families
            ask most before starting their homecare journey.
          </p>
        </motion.div>

        {/* ── FAQ Grid ── */}
        <div className="grid xl:grid-cols-2 gap-3 xl:gap-4">
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

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-2xl bg-primary border border-primary/80"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <p className="font-primary text-sm font-medium text-white/70">
              Still have questions? Our care team is available 24/7.
            </p>
          </div>
          <button className="shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-primary font-primary text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:bg-accent/90 shadow-custom">
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Faq;