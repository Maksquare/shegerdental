"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const contactItems = [
  { icon: <RiPhoneFill />, label: "+2519 1234 5678",          href: "tel:+251912345678"             },
  { icon: <RiMailFill />,  label: "Texashomecare@gmail.com", href: "mailto:Texashomecare@gmail.com" },
];

const Topbar = () => {
  const [visible, setVisible] = useState(true);

  /* Hide topbar once user scrolls past 60px */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="topbar"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          /* 
           * fixed at the very top — z-[60] so it sits above the header (z-50).
           * Height is exactly h-12 (48px); the Header reads this via top-12.
           */
          className="fixed top-0 left-0 right-0 z-[60] h-12 overflow-hidden bg-primary"
          id="home"
        >
          {/* Accent shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5 pointer-events-none" />
          {/* Bottom hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="container h-full">
            <div className="flex h-full items-center justify-between">

              {/* Contact links */}
              <div className="hidden xl:flex items-center gap-6">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-0">
                    {idx !== 0 && <div className="w-px h-4 bg-white/15 mr-6" />}
                    <a
                      href={item.href}
                      className="group flex items-center gap-2.5 transition-colors duration-200"
                    >
                      <span className="text-accent text-sm transition-transform duration-200 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span className="font-primary text-xs font-medium text-white/70 group-hover:text-white transition-colors duration-200 tracking-wide">
                        {item.label}
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Right: 24/7 pill + socials */}
              <div className="flex items-center gap-6 mx-auto xl:mx-0 xl:ml-auto">
                <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                  <span className="font-primary text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">
                    Open 24 / 7
                  </span>
                </div>
                <div className="hidden xl:block w-px h-4 bg-white/15" />
                <Socials
                  containerStyles="flex items-center gap-5"
                  iconStyles="text-white/50 hover:text-accent text-sm transition-colors duration-200"
                />
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Topbar;