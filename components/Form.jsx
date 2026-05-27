"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiLoader4Line,
  RiWhatsappLine,
} from "react-icons/ri";

/* ─── Services list ──────────────────────────────────────────────── */
const services = [
  "General Check-up",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics / Aligners",
  "Teeth Whitening",
  "Restorative Dentistry",
  "Emergency Care",
  "Preventive Care",
];

/* ─── WhatsApp number — no + or spaces ──────────────────────────── */
const WHATSAPP_NUMBER = "251912345678";

/* ─── Shared styles ──────────────────────────────────────────────── */
const inputClass = [
  "w-full bg-porcelain border border-border",
  "text-primary placeholder:text-subtle/60",
  "px-4 py-3 text-[14px] font-secondary tracking-wide",
  "focus:outline-none focus:border-gold/60 focus:bg-white",
  "hover:border-gold/30 transition-all duration-300",
].join(" ");

const labelClass = [
  "block font-secondary text-[10px] font-semibold",
  "tracking-[0.18em] uppercase text-gold/80 mb-2",
].join(" ");

/* ─── Custom branded dropdown ────────────────────────────────────── */
const ServiceSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const selected = services.find((s) => s === value);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={[
          "w-full flex items-center justify-between",
          "bg-porcelain border px-4 py-3",
          "font-secondary text-[14px] tracking-wide",
          "transition-all duration-300 outline-none",
          open
            ? "border-gold/60 bg-white"
            : "border-border hover:border-gold/30",
          selected ? "text-primary" : "text-subtle/60",
        ].join(" ")}
      >
        <span>{selected || "Select a treatment…"}</span>

        {/* Animated chevron */}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={open ? "text-gold" : "text-subtle"}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </motion.svg>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 z-50 mt-1
                       bg-surface border border-border shadow-elevated
                       overflow-hidden"
          >
            {/* Gold top accent */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <ul className="py-1 max-h-64 overflow-y-auto">
              {services.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => { onChange(s); setOpen(false); }}
                    className={[
                      "w-full text-left px-4 py-3 flex items-center gap-3",
                      "font-secondary text-[13px] tracking-wide",
                      "transition-all duration-150 group",
                      value === s
                        ? "bg-gold/8 text-primary"
                        : "text-secondary hover:bg-porcelain hover:text-primary",
                    ].join(" ")}
                  >
                    {/* Gold dot for selected */}
                    <span
                      className={[
                        "w-1 h-1 rounded-full shrink-0 transition-all duration-200",
                        value === s ? "bg-gold" : "bg-transparent group-hover:bg-gold/30",
                      ].join(" ")}
                    />
                    {s}
                    {/* Checkmark for selected */}
                    {value === s && (
                      <svg
                        className="ml-auto text-gold shrink-0"
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Form ───────────────────────────────────────────────────────── */
const Form = ({ selectedService = "" }) => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name:    "",
    phone:   "",
    email:   "",
    service: "",
    message: "",
  });

  /* Sync pill selection from Contact.jsx */
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const lines = [
      `🦷 *New Appointment Request — Sheger Dental Clinic*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email   ? `📧 *Email:* ${formData.email}`       : null,
      formData.service ? `🏥 *Treatment:* ${formData.service}` : null,
      formData.message ? `📝 *Notes:* ${formData.message}`     : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    await new Promise((res) => setTimeout(res, 800));
    setStatus("success");
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center text-center py-12 gap-5"
      >
        <div className="w-14 h-14 border border-gold/40 bg-gold/10 flex items-center justify-center">
          <RiCheckLine className="text-gold text-2xl" />
        </div>

        <div>
          <h3 className="font-primary text-xl font-semibold text-primary mb-2">
            Redirecting to WhatsApp…
          </h3>
          <p className="font-secondary text-[14px] text-secondary leading-relaxed max-w-xs">
            Thank you,{" "}
            <span className="text-primary font-medium">
              {formData.name.split(" ")[0]}
            </span>
            . Complete your request on WhatsApp and we'll confirm within 1 hour.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `🦷 *Sheger Dental* — Hi, I'd like to book${
              formData.service ? ` a ${formData.service}` : " an appointment"
            }.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-secondary text-[12px] font-semibold tracking-[0.14em] uppercase hover:opacity-90 transition-opacity"
        >
          <RiWhatsappLine size={16} />
          Open WhatsApp
        </a>

        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", phone: "", email: "", service: "", message: "" });
          }}
          className="font-secondary text-[11px] tracking-[0.15em] uppercase text-subtle hover:text-gold border-b border-border hover:border-gold/40 transition-all duration-300 pb-0.5"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  /* ── Form state ────────────────────────────────────────────────── */
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-5"
    >
      {/* Row 1 — Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Selam Tesfaye"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+251 9__ ___ ___"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 — Email */}
      <div>
        <label className={labelClass}>Email Address</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com (optional)"
          className={inputClass}
        />
      </div>

      {/* Row 3 — Custom branded dropdown */}
      <div>
        <label className={labelClass}>Treatment Type</label>
        <ServiceSelect
          value={formData.service}
          onChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
        />
      </div>

      {/* Row 4 — Message */}
      <div>
        <label className={labelClass}>Additional Notes</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your concern or preferred appointment time…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-between w-full
                   bg-gold text-primary overflow-hidden
                   pl-6 pr-1.5 py-1.5 mt-1
                   font-secondary text-[11px] font-bold tracking-[0.18em] uppercase
                   shadow-gold-glow hover:shadow-[0_6px_32px_rgba(201,168,76,0.45)]
                   transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 pointer-events-none" />

        <span className="relative flex items-center gap-2">
          {status === "loading" ? "Sending Request…" : (
            <><RiWhatsappLine size={15} /> Book via WhatsApp</>
          )}
        </span>

        <span className="relative flex h-9 w-9 items-center justify-center bg-primary/15 transition-all duration-300 group-hover:bg-primary/25">
          {status === "loading"
            ? <RiLoader4Line className="text-base animate-spin" />
            : <RiArrowRightLine size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          }
        </span>
      </motion.button>

      <p className="font-secondary text-[10px] text-subtle tracking-wide text-center">
        Free first consultation · No commitment · In-clinic or video call
      </p>
    </motion.form>
  );
};

export default Form;