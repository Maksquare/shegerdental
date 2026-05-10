"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  { name: "Home",     link: "home"     },
  { name: "About",    link: "about"    },
  { name: "Services", link: "services" },
  { name: "Our Work", link: "our work" },
  { name: "Contact",  link: "contact"  },
];

/*
 * Layout math:
 *   Topbar  = h-12 = 48px   (z-[60], fixed top-0)
 *   Header  = py-4 ≈ 64px   (z-50,  fixed)
 *
 * When NOT scrolled → header sits at top-12 (below topbar).
 * When scrolled     → topbar has exited, header moves to top-0
 *                     and compresses to py-3.
 *
 * ScrollLink offset must account for the full bar stack:
 *   not scrolled → -(48 + 64) = -112
 *   scrolled     → -56 (header only, compressed)
 * We use -120 as a safe static offset that works in both states.
 */
const SCROLL_OFFSET = -120;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      /* 
       * top-12 = 48px = topbar height when topbar is showing.
       * top-0 once scrolled (topbar has animated out).
       * Transition is smooth via transition-all duration-300.
       */
      className={[
        "fixed left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "top-0 bg-primary/95 backdrop-blur-md shadow-custom py-3"
          : "top-12 bg-primary py-4",
      ].join(" ")}
    >
      {/* Top accent line — only visible when header is at top-0 */}
      <div
        className={[
          "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent",
          "transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div className="container">
        <div className="flex items-center justify-between gap-8">

          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-10">
            <ul className="flex items-center gap-1">
              {links.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.link}
                    smooth
                    spy
                    offset={SCROLL_OFFSET}
                    className="cursor-pointer"
                    onSetActive={() => setActiveLink(link.link)}
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15 }}
                      className={[
                        "relative inline-flex flex-col items-center px-3 py-1.5",
                        "font-primary text-xs font-semibold tracking-[0.15em] uppercase",
                        "transition-colors duration-200",
                        activeLink === link.link
                          ? "text-accent"
                          : "text-white/70 hover:text-white",
                      ].join(" ")}
                    >
                      {link.name}
                      {/* Active dot */}
                      <span
                        className={[
                          "absolute -bottom-0.5 left-1/2 -translate-x-1/2",
                          "w-1 h-1 rounded-full bg-accent transition-all duration-300",
                          activeLink === link.link
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0",
                        ].join(" ")}
                      />
                    </motion.span>
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-px h-6 bg-white/15" />

            {/* CTA */}
            <ScrollLink to="contact" smooth spy offset={SCROLL_OFFSET} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center rounded-lg bg-accent
                           pl-5 pr-1.5 py-1.5
                           font-primary text-xs font-bold tracking-[0.15em] uppercase text-primary
                           transition-all duration-200 shadow-custom"
              >
                <span className="mr-4 transition-all duration-200 group-hover:mr-5">
                  Contact Us
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 transition-all duration-200 group-hover:bg-primary/25">
                  <RiArrowRightUpLine className="text-base transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </motion.button>
            </ScrollLink>
          </nav>

          {/* Mobile Nav */}
          <div className="xl:hidden">
            <NavMobile />
          </div>

        </div>
      </div>
    </motion.header>
  );
};

export default Header;