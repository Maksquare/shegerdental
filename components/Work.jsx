"use client";
import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const Work = () => {
  const workData = [
    {
      img: "/assets/img/work/01.png",
      name: "Homecare",
      description: "Covers core medical and nursing",
      href: "",
    },
    {
      img: "/assets/img/work/02.png",
      name: "Rehabilitation",
      description: "Focuses on recovery",
      href: "",
    },
    {
      img: "/assets/img/work/03.png",
      name: "Medical Equipmet",
      description: "Covers all equipment",
      href: "",
    },
    {
      img: "/assets/img/work/04.png",
      name: "Ambulance Service",
      description: "Special Services",
      href: "",
    },
  ];
  return (
    <div className="pt-16 xl:pt-32" id="our work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)} // Direction usually lowercase "up"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Our work" center />
          <h2 className="h2 mb-3">Discover Our Care Services</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing compassionate, expert homecare designed to support health,
            comfort, and dignity in every home we serve. We are committed to
            delivering personalized care with professionalism, trust, and
            attention to every detail.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)} // Direction usually lowercase "up"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 "
      >
        {workData.map((work, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative 
            overflow-hidden group flex justify-center"
            >
              <Image
                src={work.img}
                alt={work.name}
                fill
                quality={100}
                className="object-cover"
              />

              <div
                className="w-[90%] h-[84px] bg-primary absolute bottom-4
              
              flex justify-between items-center 
              text-white md:translate-y-[108px] md:group-hover:translate-y-0
              transition-all duration-500
              "
              >
                <div className="pl-8">
                  <h4
                    className="text-white font-primary 
                  font-semibold tracking-[1px] uppercase"
                  >
                    {work.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{work.description}</p>
                  </div>
                </div>
                {/* <Link
                  href={work.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent
                    text-primary text-2xl flex justify-center
                     items-center absolute right-3
                    "
                >
                  <RiArrowRightUpLine />
                </Link> */}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
