"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "+251954944389";
  const message = encodeURIComponent(
    "Hello! I'd like to book an appointment at Sheger Dental Clinic."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(2.0); opacity: 0;   }
          100% { transform: scale(2.0); opacity: 0;   }
        }
        @keyframes wa-ping2 {
          0%   { transform: scale(1);   opacity: 0.3; }
          70%  { transform: scale(2.6); opacity: 0;   }
          100% { transform: scale(2.6); opacity: 0;   }
        }
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-6px); }
        }
        @keyframes wa-badge-pulse {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.2); }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%)  rotate(45deg); }
        }
        .wa-float        { animation: wa-float 3.4s ease-in-out infinite; }
        .wa-ping-1       { animation: wa-ping  2.6s ease-out infinite; }
        .wa-ping-2       { animation: wa-ping2 2.6s ease-out infinite 0.5s; }
        .wa-badge-pulse  { animation: wa-badge-pulse 2s ease-in-out infinite; }
        .wa-tooltip      { animation: wa-tooltip-in 0.22s ease forwards; }
        .wa-enter        { transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .wa-shimmer:hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(201,168,76,0.35) 50%,
            transparent 60%
          );
          animation: shimmer-sweep 0.6s ease forwards;
        }
      `}</style>

      <div
        className={`fixed bottom-7 right-6 z-50 flex items-center gap-3 wa-enter ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tooltip */}
        {hovered && (
          <div className="wa-tooltip pointer-events-none">
            <div
              className="relative flex items-center px-4 py-3 mr-1"
              style={{
                background: "#F8F6F1",
                border: "1px solid rgba(201,168,76,0.35)",
                boxShadow: "0 8px 32px rgba(13,27,42,0.18), 0 0 0 1px rgba(201,168,76,0.1)",
              }}
            >
              {/* Gold left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: "linear-gradient(to bottom, #C9A84C, #a8863a)" }}
              />
              <div className="pl-3">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5"
                  style={{ color: "#C9A84C", fontFamily: "var(--font-secondary, Jost)" }}
                >
                  Chat with us
                </p>
                <p
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: "#0D1B2A", fontFamily: "var(--font-secondary, Jost)" }}
                >
                  We reply within 30 min
                </p>
              </div>
              {/* Arrow */}
              <div
                className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
                style={{
                  background: "#F8F6F1",
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                  borderRight: "1px solid rgba(201,168,76,0.35)",
                }}
              />
            </div>
          </div>
        )}

        {/* Button */}
        <div className="relative wa-float">
          {/* Ripple rings — gold tinted */}
          <span
            className="wa-ping-1 absolute inset-0 pointer-events-none"
            style={{ background: "rgba(201,168,76,0.3)" }}
          />
          <span
            className="wa-ping-2 absolute inset-0 pointer-events-none"
            style={{ background: "rgba(201,168,76,0.15)" }}
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Chat on WhatsApp"
            className="wa-shimmer relative flex items-center justify-center w-[58px] h-[58px] outline-none overflow-hidden"
            style={{
              background: hovered
                ? "linear-gradient(135deg, #1a1a2e 0%, #0D1B2A 100%)"
                : "linear-gradient(135deg, #0D1B2A 0%, #162236 100%)",
              border: hovered
                ? "1.5px solid #C9A84C"
                : "1.5px solid rgba(201,168,76,0.5)",
              boxShadow: hovered
                ? "0 8px 32px rgba(13,27,42,0.55), 0 0 20px rgba(201,168,76,0.25)"
                : "0 6px 24px rgba(13,27,42,0.4), 0 0 12px rgba(201,168,76,0.15)",
              transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            {/* Inner gold gloss ring */}
            <span
              className="absolute inset-[3px] pointer-events-none"
              style={{ border: "1px solid rgba(201,168,76,0.12)" }}
            />

            {/* WhatsApp SVG — gold on dark */}
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 relative z-10"
              style={{
                fill: hovered ? "#C9A84C" : "#d4b46a",
                transition: "fill 0.3s ease",
                filter: hovered ? "drop-shadow(0 0 6px rgba(201,168,76,0.6))" : "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Notification badge — gold instead of pink */}
          <span
            className="wa-badge-pulse absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center text-[9px] font-bold z-20"
            style={{
              background: "#C9A84C",
              color: "#0D1B2A",
              fontFamily: "var(--font-secondary, Jost)",
              border: "2px solid #F8F6F1",
            }}
          >
            1
          </span>
        </div>
      </div>
    </>
  );
}