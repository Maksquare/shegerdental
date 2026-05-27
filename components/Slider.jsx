"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

const testimonials = [
  {
    avatar: "/assets/img/testimonials/avatar.png",
    quote:
      "The team at Sheger Dental made me feel completely at ease. My smile has never looked better — truly world-class care right here in Addis.",
    name: "Selam A.",
    role: "Veneer Patient",
    tag: "Cosmetic Dentistry",
  },
  {
    avatar: "/assets/img/testimonials/avatar01.png",
    quote:
      "After years of anxiety about dental visits, Sheger changed everything. The implant procedure was painless and the results are outstanding.",
    name: "Dawit M.",
    role: "Implant Patient",
    tag: "Dental Implants",
  },
  {
    avatar: "/assets/img/testimonials/avatar02.png",
    quote:
      "My clear aligner treatment was completed ahead of schedule. The staff are professional, warm, and genuinely invested in your outcome.",
    name: "Hana T.",
    role: "Aligner Patient",
    tag: "Orthodontics",
  },
  {
    avatar: "/assets/img/testimonials/avatar.png",
    quote:
      "We bring the whole family here. The children love it and I trust the doctors completely. Sheger Dental is simply the best in Addis Ababa.",
    name: "Yonas B.",
    role: "Family Patient",
    tag: "Family Care",
  },
];

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".sheger-pagination",
          bulletClass: "sheger-bullet",
          bulletActiveClass: "sheger-bullet-active",
        }}
        loop
        className="w-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="px-6 pt-4 pb-6">

              {/* Treatment tag + stars row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "var(--font-secondary, Jost), sans-serif",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.06)",
                  }}
                >
                  <PiStarFill style={{ fontSize: "9px", color: "#C9A84C" }} />
                  {t.tag}
                </span>

                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <PiStarFill key={i} style={{ color: "#C9A84C", fontSize: "11px" }} />
                  ))}
                </div>
              </div>

              {/* Gold thin rule */}
              <div
                className="mb-4 h-px"
                style={{ background: "rgba(201,168,76,0.18)" }}
              />

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{
                  fontFamily: "var(--font-primary, 'Cormorant Garamond'), serif",
                  color: "rgba(13,27,42,0.72)",
                  fontSize: "15px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Square avatar — no rounded corners */}
                <div
                  className="relative w-10 h-10 overflow-hidden shrink-0"
                  style={{ border: "1.5px solid rgba(201,168,76,0.3)" }}
                >
                  <Image
                    src={t.avatar}
                    fill
                    className="object-cover"
                    alt={t.name}
                    quality={100}
                  />
                </div>

                {/* Name + role */}
                <div>
                  <p
                    className="text-sm font-semibold leading-none mb-0.5"
                    style={{
                      fontFamily: "var(--font-secondary, Jost), sans-serif",
                      color: "#0D1B2A",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{
                      fontFamily: "var(--font-secondary, Jost), sans-serif",
                      color: "rgba(13,27,42,0.45)",
                    }}
                  >
                    {t.role}
                  </p>
                </div>

                {/* Gold accent line — right aligned */}
                <div
                  className="ml-auto h-px w-10"
                  style={{ background: "rgba(201,168,76,0.35)" }}
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination — gold pill dots */}
      <div className="sheger-pagination flex items-center justify-start gap-1.5 px-6 pb-5" />

      <style>{`
        .sheger-bullet {
          display: inline-block;
          width: 18px;
          height: 2px;
          background: rgba(13,27,42,0.15);
          cursor: pointer;
          transition: all 0.35s ease;
          border-radius: 0;
        }
        .sheger-bullet-active {
          width: 32px;
          background: #C9A84C;
        }
      `}</style>
    </div>
  );
};

export default Slider;