"use client";

import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)} // Direction usually lowercase "up"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6">Built on Trust, Proven Through Care</h2>
            <p className="mb-10 max-w-[420px]">
              From families to individuals, our clients share their experiences
              of receiving compassionate, professional homecare. Discover how
              we’ve supported their health, comfort, and peace of mind with
              dedicated, expert care.
            </p>


 <ScrollLink
                      to={"contact"}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                     <Button text="Contact Us" />
                    </ScrollLink>

            
          
          
          
          </motion.div>
          {/* img & slider */}
          <motion.div
            variants={fadeIn("left", 0.2)} // Direction usually lowercase "up"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt=""
              />
            </div>

            {/* slider   */}
            <motion.div
              variants={fadeIn("left", 0.1)} // Direction usually lowercase "up"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px]
            relative max-w-max
            
            "
            >
              {/* quote icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                className="absolute z-20 -top-4 left-[60px]"
                alt="Quote icon"
              />

              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
