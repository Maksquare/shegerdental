import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-center bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/0 via-black/50 to-black/70"></div>

      <div className="container mx-auto flex h-full items-center">
        <div className="z-20 mx-auto flex max-w-[688px] flex-col items-center text-center text-white xl:mx-0 xl:items-start xl:text-left">
          {/* Heading */}
          <motion.h1
            variants={fadeIn("up", 0.2)} // Direction usually lowercase "up"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 mb-4 text-white"
          >
            <span className="text-accent">Hospital level</span> care right at home!
          </motion.h1>

          {/* Paragraph - Fixed the misplaced props */}
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Our caregivers offer the expert support your family deserves,
            protecting the independence and safety of your loved ones in the
            place they love most.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >


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
        </div>
      </div>
    </section>
  );
};

export default Hero;
