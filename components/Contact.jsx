import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)} // Direction usually lowercase "up"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div
          className="w-full xl:h-[730px] shadow-custom
        p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent
        
        "
        >
          <div
            className="flex flex-col xl:flex-row
          h-full gap-[40px] xl:gap-[90px]
          
          "
          >
            {/* info */}
            <div
              className="w-full xl:max-w-[380px] xl:pr-[70px]
            xl:border-r xl:border-border/40 h-[640px]
            
            "
            >
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
               We’re here to help you and your loved ones live comfortably and safely at home. Whether you have questions about our services, need assistance choosing the right care plan, or want to schedule a consultation, our team is ready to support you every step of the way.
              </p>
              {/* Contact Items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* Contact Item */}
                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text=[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-primary">
                      fewzanhomecare@gmail.com
                    </p>
                  </div>
                </div>
                {/* Contact Item */}
                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text=[22px] font-semibold font-primary leading-none mb-2">
                      Come & find us
                    </h5>
                    <p className="mb-4">Come and say hello at our office.</p>
                    <p className="font-semibold text-primary">
                      Ayer tena, AA,ET
                    </p>
                  </div>
                </div>
                {/* Contact Item */}
                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text=[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Call 24/7</p>
                    <p className="font-semibold text-primary">
                      +251 (912) 345-678
                    </p>
                  </div>
                </div>
              </div>
              {/* Socials */}
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h3 mb-3">Connect With Us on Social Media</h2>
              <p className="mb-9">
                Stay in touch and be part of our community. Follow us on social media for helpful care tips, updates, and a closer look at how we support families every day.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
