"use client";

import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
  const swiper = useSwiper();

  return (
    <div className="w-max absolute bottom-2 right-2 flex gap-px z-10">
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="Previous testimonial"
        className="group relative flex items-center justify-center w-[40px] h-[40px] overflow-hidden transition-all duration-200"
        style={{
          background: "#0D1B2A",
          border: "1px solid rgba(201,168,76,0.25)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#C9A84C";
          e.currentTarget.style.borderColor = "#C9A84C";
          e.currentTarget.querySelector("svg").style.color = "#0D1B2A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#0D1B2A";
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
          e.currentTarget.querySelector("svg").style.color = "#C9A84C";
        }}
      >
        <RiArrowLeftLine
          style={{
            color: "#C9A84C",
            fontSize: "16px",
            transition: "color 0.2s ease, transform 0.2s ease",
          }}
        />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next testimonial"
        className="group relative flex items-center justify-center w-[40px] h-[40px] overflow-hidden transition-all duration-200"
        style={{
          background: "#C9A84C",
          border: "1px solid #C9A84C",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#a8863a";
          e.currentTarget.style.borderColor = "#a8863a";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#C9A84C";
          e.currentTarget.style.borderColor = "#C9A84C";
        }}
      >
        <RiArrowRightLine
          style={{
            color: "#0D1B2A",
            fontSize: "16px",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
    </div>
  );
};

export default SliderBtns;