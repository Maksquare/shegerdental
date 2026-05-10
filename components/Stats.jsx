"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 80,
    endCountText: "%",
    text: "Client Satisfaction Rate",
    description: "Consistently rated by our patients and families",
  },
  {
    endCountNum: 2000,
    endCountText: "+",
    text: "Care Plans Delivered",
    description: "Tailored to every individual's unique needs",
  },
  {
    endCountNum: 1800,
    endCountText: "+",
    text: "Families Served",
    description: "Across communities with trust and compassion",
  },
  {
    endCountNum: 5,
    endCountText: "+",
    text: "Years of Care",
    description: "Of dedicated, compassionate home medical service",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.25, once: true });

  return (
    <section ref={ref} className="relative mt-16 xl:mt-32 overflow-hidden">

      {/* Background: primary with a subtle accent shimmer */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
      {/* Top edge accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative container py-16 xl:py-24">

        {/* Optional section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-12 xl:mb-16"
        >
          <div className="h-px w-8 bg-accent/50" />
          <span className="font-primary text-xs font-semibold tracking-[0.25em] uppercase text-accent/80">
            Our Impact in Numbers
          </span>
          <div className="h-px w-8 bg-accent/50" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "relative flex flex-col items-center xl:items-start text-center xl:text-left",
                "px-8 py-8 xl:py-0",
                // Vertical dividers between columns on xl, horizontal on mobile
                index !== statsData.length - 1
                  ? "border-b xl:border-b-0 xl:border-r border-white/10"
                  : "",
              ].join(" ")}
            >
              {/* Number */}
              <div className="flex items-end gap-1 mb-2">
                <span className="font-secondary text-6xl xl:text-7xl font-bold text-white leading-none tabular-nums">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.endCountNum}
                      delay={0.3 + index * 0.12}
                      duration={2.5}
                      useEasing
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="font-secondary text-4xl xl:text-5xl font-bold text-accent leading-none pb-1">
                  {stat.endCountText}
                </span>
              </div>

              {/* Accent underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.12, ease: "easeOut" }}
                className="h-[2px] w-10 bg-accent rounded-full mb-3 origin-left"
                style={{ transformOrigin: "center" }}
              />

              {/* Label */}
              <p className="font-secondary text-sm font-semibold uppercase tracking-widest text-white mb-1.5">
                {stat.text}
              </p>

              {/* Description */}
              <p className="font-primary text-xs leading-relaxed text-white/40 max-w-[180px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom edge accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
};

export default Stats;