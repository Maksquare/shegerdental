"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiLoader4Line,
} from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const inputClass = `
  w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25
  px-4 py-3 text-sm font-secondary tracking-wide
  focus:outline-none focus:border-gold/60 focus:bg-white/8
  hover:border-white/20 transition-all duration-300
`;

const labelClass = `
  block font-secondary text-[10px] font-semibold tracking-[0.18em] uppercase
  text-gold/70 mb-2
`;

const Form = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submit — replace with your real API call
    await new Promise((res) => setTimeout(res, 1800));
    setStatus("success");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        /* ── Success state ── */
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center py-12 gap-5"
        >
          <div className="w-14 h-14 border border-gold/40 bg-gold/10 flex items-center justify-center">
            <RiCheckLine className="text-gold text-2xl" />
          </div>
          <div>
            <h3 className="font-primary text-xl font-semibold text-white mb-2">
              Appointment Requested
            </h3>
            <p className="font-secondary text-sm text-white/50 leading-relaxed max-w-xs">
              Thank you, {formData.name.split(" ")[0]}. We'll confirm your
              appointment within 24 hours.
            </p>
          </div>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", phone: "", email: "", service: "", message: "" });
            }}
            className="font-secondary text-[11px] tracking-[0.15em] uppercase text-gold/60
                       hover:text-gold border-b border-gold/20 hover:border-gold/60
                       transition-all duration-300 pb-0.5"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        /* ── Form ── */
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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

          {/* Row 3 — Service selector */}
          <div>
            <label className={labelClass}>Treatment Type</label>
            <Select onValueChange={handleServiceChange} value={formData.service}>
              <SelectTrigger
                className="w-full bg-white/5 border border-white/10 text-sm font-secondary
                           tracking-wide text-white/70 px-4 py-3 h-auto
                           focus:border-gold/60 hover:border-white/20
                           transition-all duration-300 rounded-none
                           data-[placeholder]:text-white/25"
              >
                <SelectValue placeholder="Select a service…" />
              </SelectTrigger>
              <SelectContent
                className="bg-primary border border-white/10 rounded-none
                           font-secondary text-sm text-white"
              >
                {services.map((s) => (
                  <SelectItem
                    key={s}
                    value={s}
                    className="text-white/70 hover:text-white hover:bg-gold/10
                               focus:bg-gold/10 focus:text-white
                               cursor-pointer transition-colors duration-150 rounded-none"
                  >
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Row 4 — Message */}
          <div>
            <label className={labelClass}>Additional Notes</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your concern or preferred appointment time…"
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
                       font-secondary text-xs font-bold tracking-[0.18em] uppercase
                       shadow-gold-glow hover:shadow-none
                       transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {/* Shimmer sweep on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                         bg-gradient-to-r from-transparent via-white/20 to-transparent
                         transition-transform duration-700 ease-in-out pointer-events-none"
            />

            <span className="relative">
              {status === "loading" ? "Sending Request…" : "Book Appointment"}
            </span>

            <span className="relative flex h-9 w-9 items-center justify-center bg-primary/15
                             transition-all duration-300 group-hover:bg-primary/25">
              {status === "loading" ? (
                <RiLoader4Line className="text-base animate-spin" />
              ) : (
                <RiArrowRightLine className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
              )}
            </span>
          </motion.button>

          {/* Reassurance note */}
          <p className="font-secondary text-[10px] text-white/25 tracking-wide text-center">
            Free first consultation · No commitment required · Available in-clinic or via video call
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default Form;