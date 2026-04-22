import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link as ScrollLink } from "react-scroll";
const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-12 xl:gap-0 
        xl:flex-row xl:items-center "
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)} // Direction usually lowercase "up"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <div className="max-w-[540px]">
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">
                Care You Can Trust, Support You Deserve
              </h2>
              <p className="mb-11">
                At the heart of our service is a deep commitment to people. We
                create personalized care experiences that enhance quality of
                life, ensuring every individual feels valued, respected, and
                supported at home.
              </p>
              {/* img */}
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="signature"
                />
                <p>Company CEO </p>
              </div>
              {/* button */}




 <ScrollLink
                      to={"contact"}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                     <Button text="Contact Us" />
                    </ScrollLink>

             
            
            
            
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.2)} // Direction usually lowercase "up"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div
                className="hidden xl:flex w-[444px] 
             h-[493px] bg-accent absolute -top-4 -left-4
             -z-10
             "
              ></div>
              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={493}
                alt="about"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
