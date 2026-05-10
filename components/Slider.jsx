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
      "Excellent homecare service with genuine warmth. They make a real difference in our daily lives.",
    name: "Abeba T.",
    role: "Family Member",
  },
  {
    avatar: "/assets/img/testimonials/avatar01.png",
    quote:
      "The caregivers were attentive and compassionate — my father feels truly cared for every day.",
    name: "Marta K.",
    role: "Daughter",
  },
  {
    avatar: "/assets/img/testimonials/avatar02.png",
    quote:
      "Professional, reliable, and kind. I can finally focus on my work knowing my mother is in good hands.",
    name: "Yonas B.",
    role: "Son",
  },
];

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        loop
        className="w-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="px-6 pt-4 pb-8">

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <PiStarFill key={i} className="text-accent text-xs" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-primary text-sm leading-relaxed text-secondary mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/20 shrink-0">
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
                  <p className="font-primary text-sm font-bold text-primary leading-none mb-0.5">
                    {t.name}
                  </p>
                  <p className="font-primary text-xs text-secondary">
                    {t.role}
                  </p>
                </div>

                {/* Accent line */}
                <div className="ml-auto h-px w-12 bg-accent/30" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots */}
      <div className="custom-pagination flex items-center justify-start gap-1.5 px-6 pb-5" />

      <style>{`
        .custom-bullet {
          display: inline-block;
          width: 20px;
          height: 3px;
          border-radius: 9999px;
          background: #d7d7d7;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          width: 32px;
          background: #05c4a8;
        }
      `}</style>
    </div>
  );
};

export default Slider;