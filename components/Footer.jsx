"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";
import { motion } from "framer-motion";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightUpLine,
  RiSendPlaneFill,
} from "react-icons/ri";

const contactItems = [
  {
    icon: <RiMapPinFill />,
    value: "Kolfe Keranyo, Ayer Tena, Ethiopia",
    href: null,
  },
  {
    icon: <RiPhoneFill />,
    value: "+251 (912) 345 678",
    href: "tel:+251912345678",
  },
  {
    icon: <RiMailFill />,
    value: "fewzanhomecare@gmail.com",
    href: "mailto:fewzanhomecare@gmail.com",
  },
];

const quickLinks = [
  { name: "Home",         href: "#home"         },
  { name: "About",        href: "#about"        },
  { name: "Services",     href: "#services"     },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact",      href: "#contact"      },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const animItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-primary overflow-hidden mt-0">

      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container relative z-10"
      >

        {/* Main grid */}
        <div className="py-16 xl:py-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">

          {/* Col 1 — Brand */}
          <motion.div variants={animItem} className="xl:col-span-1">
          <ScrollLink
                to={"home"}
                smooth
                spy
                className="cursor-pointer"
                activeClass="text-accent"
              >
              <Image src="/assets/logo.png" quality={100} width={100} className="mb-4" height={42} alt="Texas Homecare" />
            </ScrollLink>
            <p className="font-primary text-sm leading-relaxed text-white/40 max-w-[240px] mb-8">
              Compassionate home care designed to support independence, dignity,
              and comfort in the place you call home.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-primary text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
                24/7 Available
              </span>
            </div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div variants={animItem}>
            <h4 className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-7">
              Quick Links
            </h4>
         
<ul className="flex flex-col gap-3">
  {quickLinks.map((link, idx) => (
    <li key={idx} className="group flex items-center gap-2">
      <RiArrowRightUpLine className="text-accent text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
      <span
        onClick={() => {
          const target = document.getElementById(link.href.replace("#", ""));
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer font-primary text-sm font-medium text-white/40 hover:text-white transition-colors duration-200"
      >
        {link.name}
      </span>
    </li>
  ))}
</ul>


          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div variants={animItem}>
            <h4 className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-7">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              {contactItems.map((c, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent text-base mt-0.5 shrink-0">
                    {c.icon}
                  </span>
                  <span className="font-primary text-sm text-white/40 leading-snug">
                    {c.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Newsletter */}
          <motion.div variants={animItem}>
            <h4 className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-7">
              Newsletter
            </h4>
            <p className="font-primary text-sm leading-relaxed text-white/40 mb-6">
              Care tips and updates from our team, delivered straight to your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/10 border border-accent/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <p className="font-primary text-xs font-semibold text-accent">
                  You're subscribed. Thank you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-12 pl-4 pr-14 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-primary text-sm outline-none focus:border-accent/40 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 flex items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent/90 transition-colors duration-200"
                >
                  <RiSendPlaneFill className="text-sm" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <motion.div
          variants={animItem}
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-primary text-xs text-white/25">
            &copy; 2026 Texashomecare. All rights reserved.
          </p>
          <Socials
            containerStyles="flex items-center gap-5"
            iconStyles="text-white/25 hover:text-accent text-lg transition-colors duration-200"
          />
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;