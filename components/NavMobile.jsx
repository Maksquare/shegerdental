"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu3Fill, RiCloseLine, RiArrowRightLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const links = [
  { name: "Home",         link: "home",     number: "01" },
  { name: "About",        link: "about",    number: "02" },
  { name: "Services",     link: "services", number: "03" },
  { name: "Our Work",     link: "our-work", number: "04" },
  { name: "Testimonials", link: "testimonials", number: "05" },
  { name: "Contact",      link: "contact",  number: "06" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>

      {/* ── Hamburger trigger ── */}
      <SheetTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10
                     border border-white/20 bg-white/5 text-white
                     hover:border-gold/50 hover:bg-gold/10 hover:text-gold
                     transition-all duration-300"
          aria-label="Open navigation menu"
        >
          <RiMenu3Fill className="text-lg" />
        </motion.button>
      </SheetTrigger>

      {/* ── Drawer panel ── */}
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[340px] bg-primary border-none p-0 flex flex-col [&>button]:hidden"
      >
        {/* Gold top hairline */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

        {/* Decorative background watermark */}
        <div className="absolute bottom-12 right-6 font-primary text-[120px] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
          S
        </div>

        {/* Subtle gold radial glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Site navigation links</SheetDescription>
        </SheetHeader>

        <div className="relative flex flex-col h-full px-8 pt-10 pb-10">

          {/* ── Header row: Logo + close ── */}
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-9 h-9
                         border border-white/15 bg-white/5 text-white/50
                         hover:border-gold/50 hover:text-gold hover:bg-gold/10
                         transition-all duration-300"
              aria-label="Close navigation menu"
            >
              <RiCloseLine className="text-xl" />
            </motion.button>
          </div>

          {/* ── Nav links ── */}
          <ul className="flex flex-col flex-1">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={isOpen ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.05 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ScrollLink
                  to={link.link}
                  smooth
                  spy
                  duration={500}
                  offset={-100}
                  activeClass="active-mobile-link"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer group flex items-center justify-between
                             px-0 py-3.5 border-b border-white/[0.06]
                             transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    {/* Index number */}
                    <span className="font-secondary text-[10px] text-gold/40 tracking-widest w-5
                                     group-hover:text-gold/70 transition-colors duration-200">
                      {link.number}
                    </span>
                    {/* Link name */}
                    <span className="font-primary text-[15px] font-semibold tracking-[0.1em] uppercase
                                     text-white/60 group-hover:text-white
                                     transition-colors duration-200">
                      {link.name}
                    </span>
                  </div>

                  {/* Arrow — slides in on hover */}
                  <RiArrowRightLine
                    className="text-sm text-gold opacity-0 -translate-x-2
                               group-hover:opacity-100 group-hover:translate-x-0
                               transition-all duration-300"
                  />
                </ScrollLink>
              </motion.li>
            ))}
          </ul>

          {/* ── Divider ── */}
          <div className="h-px bg-white/10 my-7" />

          {/* ── CTA button ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              <button
                className="group w-full flex items-center justify-between
                           bg-gold text-primary
                           pl-5 pr-1.5 py-1.5
                           font-secondary text-xs font-bold tracking-[0.18em] uppercase
                           shadow-gold-glow hover:shadow-none
                           transition-all duration-300"
              >
                <span>Book Appointment</span>
                <span className="flex h-8 w-8 items-center justify-center bg-primary/15
                                 transition-all duration-300 group-hover:bg-primary/25">
                  <RiArrowRightLine className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </ScrollLink>
          </motion.div>

          {/* ── Clinic info ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1.5"
          >
            <p className="font-secondary text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
              Addis Ababa, Ethiopia
            </p>
            <p className="font-secondary text-[10px] tracking-wider text-white/20">
              Open Mon – Sat · 8am – 6pm
            </p>
          </motion.div>

        </div>

        {/* Gold bottom hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </SheetContent>

      <style>{`
        .active-mobile-link span.font-primary {
          color: #C9A84C !important;
        }
      `}</style>
    </Sheet>
  );
};

export default NavMobile;