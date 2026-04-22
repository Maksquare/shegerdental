"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
const Services = () => {
  const servicesData = [
    {
      name: "Homecare Services",
      icon: <PiWallFill />,
      title: "Homecare Services",
      description: `Covers core medical and nursing care at home`,
      servicesLList: ["24 ሰዓት ነርሲንግ", "የቤት ውስጥ ICU", "የሀኪሞች ጉብኝት"],
      thumbs: [
        { url: "/assets/img/services/thumb-1.jpg", alt: "Thumbs1" },
        { url: "/assets/img/services/thumb-2.jpg", alt: "Thumbs2" },
      ],
    },
    {
      name: "Therapy & Rehabilitation",
      icon: <PiPaintRollerFill />,
      title: "Therapy & Rehabilitation Services",
      description: `Focuses on recovery, wellness, and long-term improvement`,
      servicesLList: ["Physiotherapy","Neurological Rehabilitation","Orthopedic Rehabilitation","Cardio-Pulmonary Rehabilitation","Pediatric Rehabilitation","Speech & Swallow Therapy","Occupational Therapy (OT)","Geriatric Rehabilitation"],
      thumbs: [
        { url: "/assets/img/services/thumb-3.jpg", alt: "Thumbs3" },
        { url: "/assets/img/services/thumb-4.jpg", alt: "Thumbs4" },
      ],
    },
    {
      name: "Medical Equipment & Support",
      icon: <PiWrenchFill />,
      title: "Medical Equipment & Support Services",
      description: `Covers all equipment and technical support`,
      servicesLList: ["Oxygen concentrator (5–10L)", "Oxygen cylinders", "Flow meter", "Nebulizer","Nebulizer ","Suction machine","CPAP / BiPAP machine","Portable ventilator","Monitoring Devices","Hospital bed (manual/electric)"],
      thumbs: [
        { url: "/assets/img/services/thumb-5.jpg", alt: "Thumbs4" },
        { url: "/assets/img/services/thumb-6.jpg", alt: "Thumbs5" },
      ],
    },
    {
      name: "Emergency & Special Services",
      icon: <PiUserGearFill />,
      title: "Emergency & Special Services",
      description: ``,
      servicesLList: [
        "ነፃ የአምቡላንስ አገልግሎት",
        "ነፃ የአልትራሳውንድ ምርመራ",
        "ለስትሮክ ህሙማን ታላቅ ቅናሽ",
      ],
      thumbs: [
        { url: "/assets/img/services/thumb-7.jpg", alt: "Thumbs1" },
        { url: "/assets/img/services/thumb-8.jpg", alt: "Thumbs3" },
      ],
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
  };

  const [activeTab, setActiveTab] = useState("Construction");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)} // Direction usually lowercase "up"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Integrated Homecare & Medical Solutions</h2>
          <p className="mb-11 max-w-[488px] mx-auto">
            We combine compassionate caregiving with advanced medical support,
            offering everything from daily assistance to hospital-grade
            equipment and therapeutic services—delivered with precision,
            reliability, and care.
          </p>
        </motion.div>
        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)} // Direction usually lowercase "up"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="Homecare Services"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList
              className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-1 
              gap-[30px]
          w-full h-full rounded-none p-0 bg-transparent xl:w-[345px]"
            >
              {servicesData.map((services) => {
                return (
                  <TabsTrigger
                    key={services.name}
                    value={services.name}
                    className="w-full  rounded-none h-[100px] flex items-center
                relative shadow-custom p-0 outline-none"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center
                     absolute left-0 ${activeTab === services.name ? "bg-primary text-white" : "bg-accent text-primary"}
                    
                    `}
                    >
                      <div className="text-4xl">{services.icon}</div>
                    </div>
                    <div
                      className="uppercase font-primary text-[12px] font-semibold
                  tracking-[.6px] w-[90px] ml-1
                  "
                    >
                      {services.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* Tabs Contents */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px] ">
              {servicesData.map((services) => {
                return (
                  <TabsContent
                    key={services.name}
                    value={services.name}
                    className="m-0"
                  >
                    <motion.div
                      variants={fadeInVariant} // Direction usually lowercase "up"
                      initial="hidden"
                      whileInView="show"
                      exit="hidden"
                      className="flex flex-col md:flex-row gap-[30px]
                  
                  
                  
                  
                  "
                    >
                      {/* image */}
                      <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                        {services.thumbs.map((thumb, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                            >
                              <Image src={thumb.url} alt={thumb.alt} fill />
                            </div>
                          );
                        })}
                      </div>
                      {/* text & button */}
                      <div>
                        <div>
                          <h3 className="h3 mb-6">{services.title}</h3>
                          <p className="mb-10">{services.description}</p>

                          {/* Services List */}

                          <ul className="grid grid-cols-2 gap-4 mb-12">
                            {services.servicesLList.map((service, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-[6px] h-[6px] bg-accent"></div>
                                  <div className="capitalize font-medium text-primary">
                                    {service}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>

                          {/* btn */}
                          <Button text="Read more" />
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
