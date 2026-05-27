"use client";

import { useState } from "react";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";

const FaqItem = ({ title, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full transition-colors duration-300"
      style={{
        borderBottom: "1px solid rgba(13,27,42,0.1)",
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        {/* Index + Title */}
        <div className="flex items-center gap-5 flex-1 min-w-0">
          {/* Step number */}
          <span
            className="shrink-0 text-[11px] font-semibold tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-secondary, Jost), sans-serif",
              color: "rgba(201,168,76,0.5)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Gold left bar — appears when open */}
          <span
            className="shrink-0 w-[2px] self-stretch transition-all duration-300"
            style={{
              background: isOpen ? "#C9A84C" : "transparent",
            }}
          />

          <h4
            className="text-[15px] font-medium leading-snug transition-colors duration-200"
            style={{
              fontFamily: "var(--font-secondary, Jost), sans-serif",
              color: isOpen ? "#0D1B2A" : "rgba(13,27,42,0.75)",
            }}
          >
            {title}
          </h4>
        </div>

        {/* Toggle icon — bordered square */}
        <span
          className="shrink-0 flex items-center justify-center w-9 h-9 transition-all duration-300"
          style={{
            border: isOpen
              ? "1px solid #C9A84C"
              : "1px solid rgba(13,27,42,0.15)",
            background: isOpen ? "#C9A84C" : "transparent",
            color: isOpen ? "#0D1B2A" : "rgba(13,27,42,0.4)",
          }}
        >
          {isOpen ? (
            <RiSubtractLine style={{ fontSize: "16px" }} />
          ) : (
            <RiAddLine style={{ fontSize: "16px" }} />
          )}
        </span>
      </button>

      {/* Answer panel */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
      >
        {/* Gold left accent + answer text */}
        <div
          className="flex gap-5 pb-7"
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            paddingTop: "16px",
            marginLeft: "36px", /* aligns under title, past index number */
          }}
        >
          <p
            className="text-[14px] leading-relaxed max-w-[760px]"
            style={{
              fontFamily: "var(--font-secondary, Jost), sans-serif",
              color: "rgba(13,27,42,0.55)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;