"use client";

import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-0 bg-accent pl-6 pr-1.5 py-1.5 rounded-xl overflow-hidden shadow-custom transition-colors duration-200 hover:bg-accent/90"
    >
      {/* Shimmer sweep on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Label */}
      <span className="relative font-primary text-xs font-bold tracking-[0.18em] uppercase text-primary mr-4 transition-all duration-200 group-hover:mr-5">
        {text}
      </span>

      {/* Icon box */}
      <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/15 transition-all duration-200 group-hover:bg-primary/25 shrink-0">
        <RiArrowRightUpLine className="text-primary text-base transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </motion.button>
  );
};

export default Button;