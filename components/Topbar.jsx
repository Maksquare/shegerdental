"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";
import Socials from "./Socials";

const contactItems = [
  {
    icon: <RiPhoneFill />,
    label: "+251 95 494 4389",
    href: "tel:+251954944389",
  },
  {
    icon: <RiMailFill />,
    label: "info@shegerdentalclinic.com",
    href: "mailto:info@shegerdentalclinic.com",
  },
  {
    icon: <RiMapPin2Fill />,
    label: "Addis Ababa, Ethiopia",
    href: "#contact",
  },
];

export const TOPBAR_HEIGHT = 36;

const Topbar = () => {
  const [visible, setVisible] = useState(true);

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
          id="home"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 60,
            height: `${TOPBAR_HEIGHT}px`,
            overflow: "hidden",
            background: "#07111c",
          }}
        >
          {/* Gold shimmer overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(90deg, rgba(201,168,76,0.05) 0%, transparent 50%, rgba(201,168,76,0.03) 100%)",
            }}
          />

          {/* Bottom gold hairline */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              pointerEvents: "none",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.45) 25%, rgba(201,168,76,0.45) 75%, transparent 100%)",
            }}
          />

          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 16px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* ── Left: contact links (responsive visibility) ── */}
            <div className="topbar-left">
              {contactItems.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                  {idx !== 0 && (
                    <div
                      style={{
                        width: "1px",
                        height: "12px",
                        margin: "0 14px",
                        background: "rgba(201,168,76,0.2)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <a href={item.href} className="topbar-link">
                    <span className="topbar-icon">{item.icon}</span>
                    <span className="topbar-label">{item.label}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* ── Center: clinic name (mobile only) ── */}
            <div className="topbar-center-mobile">
              <span className="topbar-clinic-name">— Sheger Dental Clinic —</span>
            </div>

            {/* ── Right: hours badge + socials ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>

              {/* Hours badge */}
              <div className="topbar-hours">
                <span style={{ position: "relative", display: "flex", width: "6px", height: "6px", flexShrink: 0 }}>
                  <span
                    className="animate-ping"
                    style={{
                      position: "absolute", inset: 0,
                      display: "inline-flex", width: "100%", height: "100%",
                      background: "#C9A84C", opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      position: "relative", display: "inline-flex",
                      width: "6px", height: "6px", background: "#C9A84C",
                    }}
                  />
                </span>
                {/* Full text on desktop, short on mobile */}
                <span className="topbar-hours-full">Open Mon – Sat · 8am – 6pm</span>
                <span className="topbar-hours-short">Mon–Sat 8–6</span>
              </div>

              {/* Divider — desktop only */}
              <div className="topbar-divider" />

              {/* Socials — desktop only */}
              <div className="topbar-socials">
                <Socials
                  containerStyles="flex items-center gap-3"
                  iconStyles="text-white/40 hover:text-white text-sm transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          <style>{`
            /* ── Base styles ── */
            .topbar-link {
              display: flex; align-items: center; gap: 6px; text-decoration: none;
            }
            .topbar-icon {
              color: rgba(201,168,76,0.65); font-size: 11px; line-height: 1;
              display: flex; align-items: center;
              transition: color 0.2s ease; flex-shrink: 0;
            }
            .topbar-label {
              font-family: var(--font-secondary, Jost), sans-serif;
              font-size: 11px; font-weight: 500; letter-spacing: 0.04em;
              color: rgba(255,255,255,0.5); transition: color 0.2s ease; white-space: nowrap;
            }
            .topbar-link:hover .topbar-icon { color: #C9A84C !important; }
            .topbar-link:hover .topbar-label { color: rgba(255,255,255,0.85) !important; }

            .topbar-hours {
              display: flex; align-items: center; gap: 6px;
              padding: 2px 8px;
              border: 1px solid rgba(201,168,76,0.25); background: transparent; flex-shrink: 0;
            }
            .topbar-hours-full,
            .topbar-hours-short {
              font-family: var(--font-secondary, Jost), sans-serif;
              font-size: 10px; font-weight: 600; letter-spacing: 0.13em;
              text-transform: uppercase; color: rgba(201,168,76,0.7); white-space: nowrap;
            }
            .topbar-divider {
              width: 1px; height: 12px; background: rgba(201,168,76,0.2); flex-shrink: 0;
            }
            .topbar-clinic-name {
              font-family: var(--font-secondary, Jost), sans-serif;
              font-size: 10px; font-weight: 500; letter-spacing: 0.18em;
              text-transform: uppercase; color: rgba(255,255,255,0.35); white-space: nowrap;
            }

            /* ── Default: hidden elements ── */
            .topbar-left          { display: none; align-items: center; gap: 0; }
            .topbar-center-mobile { display: none; align-items: center; }
            .topbar-socials       { display: none; }
            .topbar-hours-short   { display: none; }

            /* ── MOBILE (< 640px) ── */
            @media (max-width: 639px) {
              .topbar-center-mobile { display: flex !important; }
              .topbar-hours-full    { display: none; }
              .topbar-hours-short   { display: inline; }
              .topbar-divider       { display: none; }
            }

            /* ── TABLET (640px – 1023px): phone only on left ── */
            @media (min-width: 640px) and (max-width: 1023px) {
              .topbar-left { display: flex !important; }
              /* hide email (2nd) and location (3rd) items */
              .topbar-left > div:nth-child(2),
              .topbar-left > div:nth-child(3) { display: none !important; }
              .topbar-hours-full  { display: inline; }
              .topbar-hours-short { display: none; }
            }

            /* ── DESKTOP (≥ 1024px): everything visible ── */
            @media (min-width: 1024px) {
              .topbar-left          { display: flex !important; }
              .topbar-center-mobile { display: none !important; }
              .topbar-socials       { display: flex !important; }
              .topbar-divider       { display: block !important; }
              .topbar-hours-full    { display: inline; }
              .topbar-hours-short   { display: none; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Topbar;