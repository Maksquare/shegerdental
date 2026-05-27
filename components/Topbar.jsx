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
            height: "36px",
            overflow: "hidden",
            background: "#07111c",
          }}
        >
          {/* Subtle gold shimmer overlay */}
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

          {/* Inner layout — use max-w + px directly, avoid container class padding issues */}
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: contact links */}
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {contactItems.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                  {idx !== 0 && (
                    <div
                      style={{
                        width: "1px",
                        height: "12px",
                        margin: "0 16px",
                        background: "rgba(201,168,76,0.2)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <a
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      textDecoration: "none",
                    }}
                    className="topbar-link"
                  >
                    <span
                      className="topbar-icon"
                      style={{
                        color: "rgba(201,168,76,0.65)",
                        fontSize: "11px",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      className="topbar-label"
                      style={{
                        fontFamily: "var(--font-secondary, Jost), sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.5)",
                        transition: "color 0.2s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Right: hours badge + socials */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

              {/* Hours badge — NO background fill, only border */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "2px 10px",
                  border: "1px solid rgba(201,168,76,0.25)",
                  background: "transparent",
                  flexShrink: 0,
                }}
              >
                {/* Ping dot */}
                <span style={{ position: "relative", display: "flex", width: "6px", height: "6px", flexShrink: 0 }}>
                  <span
                    className="animate-ping"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "inline-flex",
                      width: "100%",
                      height: "100%",
                      background: "#C9A84C",
                      opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      width: "6px",
                      height: "6px",
                      background: "#C9A84C",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-secondary, Jost), sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.7)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Open Mon – Sat · 8am – 6pm
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  height: "12px",
                  background: "rgba(201,168,76,0.2)",
                  flexShrink: 0,
                }}
              />

              {/* Socials */}
              <Socials
                containerStyles="flex items-center gap-4"
                iconStyles="text-white/40 hover:text-white text-sm transition-colors duration-200"
              />
            </div>
          </div>

          {/* Hover styles via injected CSS */}
          <style>{`
            .topbar-link:hover .topbar-icon { color: #C9A84C !important; }
            .topbar-link:hover .topbar-label { color: rgba(255,255,255,0.85) !important; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Topbar;