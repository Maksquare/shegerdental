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
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Fill, RiCloseLine, RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import Socials from "./Socials";

const links = [
  { name: "Home",     link: "home"     },
  { name: "About",    link: "about"    },
  { name: "Services", link: "services" },
  { name: "Our Work", link: "our work" },
  { name: "Contact",  link: "contact"  },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>

      {/* ── Hamburger trigger ── */}
      <SheetTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-lg
                     border border-white/15 bg-white/5 text-white
                     transition-colors duration-200 hover:bg-white/10"
          aria-label="Open navigation menu"
        >
          <RiMenu3Fill className="text-xl" />
        </motion.button>
      </SheetTrigger>

      {/* ── Drawer panel ── */}
     <SheetContent
  side="right"
  className="w-[300px] sm:w-[340px] bg-primary border-none p-0 flex flex-col [&>button]:hidden"
>
        {/* Accent top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        {/* Subtle shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Site navigation links</SheetDescription>
        </SheetHeader>

        <div className="relative flex flex-col h-full px-8 pt-10 pb-10">

          {/* ── Header row: Logo + close ── */}
          <div className="flex items-center justify-between mb-12">
            <Logo />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg
                         border border-white/15 bg-white/5 text-white/60
                         transition-colors duration-200 hover:text-white hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <RiCloseLine className="text-xl" />
            </motion.button>
          </div>

          {/* ── Nav links ── */}
          <ul className="flex flex-col gap-1 flex-1">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.35,
                  delay: 0.05 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ScrollLink
                  to={link.link}
                  smooth
                  spy
                  duration={500}
                  offset={-120}
                  activeClass="active-nav-link"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer group flex items-center justify-between
                             px-4 py-3.5 rounded-xl
                             font-primary text-sm font-semibold tracking-[0.12em] uppercase
                             text-white/60 hover:text-white hover:bg-white/5
                             transition-all duration-200"
                >
                  <span>{link.name}</span>
                  <RiArrowRightUpLine
                    className="text-base text-accent opacity-0 -translate-x-1
                               group-hover:opacity-100 group-hover:translate-x-0
                               transition-all duration-200"
                  />
                </ScrollLink>
              </motion.li>
            ))}
          </ul>

          {/* ── Divider ── */}
          <div className="h-px bg-white/10 my-8" />

          {/* ── CTA button ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <ScrollLink to="contact" smooth duration={500} offset={-120} onClick={() => setIsOpen(false)}>
              <button
                className="group w-full flex items-center justify-between
                           bg-accent text-primary
                           pl-5 pr-1.5 py-1.5 rounded-lg
                           font-primary text-xs font-bold tracking-[0.15em] uppercase
                           transition-all duration-200 hover:bg-accent/90 shadow-custom"
              >
                <span>Contact Us</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15
                                 transition-all duration-200 group-hover:bg-primary/25">
                  <RiArrowRightUpLine className="text-base transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </button>
            </ScrollLink>
          </motion.div>

          {/* ── Socials ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <p className="font-primary text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
              Follow Us
            </p>
            <Socials
              containerStyles="flex items-center gap-5"
              iconStyles="text-white/40 hover:text-accent text-lg transition-colors duration-200"
            />
          </motion.div>

        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </SheetContent>

    <style>{`
  .active-nav-link {
    color: #05c4a8 !important;
    background: rgba(5, 196, 168, 0.08);
  }



`}</style>
    </Sheet>
  );
};

export default NavMobile;