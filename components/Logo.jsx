"use client";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  return (
    <ScrollLink
      to="home"
      smooth
      spy
      className="cursor-pointer group flex items-center gap-2.5 select-none"
    >
      {/* Gold tooth icon square */}
      <div className="relative flex items-center justify-center w-9 h-9 bg-gold/10 border border-gold/40 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold"
        >
          <path
            d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 3C0.5 4 1 7 2 9C3 11 3 13 3 15C3 18 4 22 6 22C8 22 8 19 9 17C9.5 15.5 10.5 15 12 15C13.5 15 14.5 15.5 15 17C16 19 16 22 18 22C20 22 21 18 21 15C21 13 21 11 22 9C23 7 23.5 4 22 3C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"
            fill="currentColor"
          />
        </svg>
        {/* Corner accent — top right */}
        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-gold opacity-70"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-primary font-semibold text-white tracking-widest uppercase"
          style={{ fontSize: "15px", letterSpacing: "0.2em" }}
        >
          Sheger
        </span>
        <span
          className="font-secondary font-medium text-gold/80 uppercase tracking-[0.22em]"
          style={{ fontSize: "8.5px", marginTop: "2px" }}
        >
          Dental Clinic
        </span>
      </div>
    </ScrollLink>
  );
};

export default Logo;