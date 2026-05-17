"use client";

import { motion } from "framer-motion";
import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

const contactItems = [
  {
    icon: <RiChat1Line />,
    title: "Chat to us",
    subtitle: "Our friendly team is here to help.",
    value: "Texashomecare@gmail.com",
    href: "mailto:Texashomecare@gmail.com",
  },
  {
    icon: <RiMapPin2Line />,
    title: "Come & find us",
    subtitle: "Come say hello at our office.",
    value: "Ayer Tena, Addis Ababa, ET",
    href: null,
  },
  {
    icon: <RiSmartphoneLine />,
    title: "Phone",
    subtitle: "Available 24/7 for urgent needs.",
    value: "+251 (912) 345-678",
    href: "tel:+251912345678",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  return (
    <section className="py-24 xl:py-36 overflow-hidden" id="contact">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 mb-14 xl:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="font-primary text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Contact
              </span>
            </div>
            <h2 className="font-secondary text-4xl xl:text-5xl font-bold text-primary leading-tight tracking-tight max-w-lg">
              Let's Start Your{" "}
              <span className="relative inline-block">
                Care Journey
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full origin-left block"
                />
              </span>
            </h2>
          </div>
          <p className="font-primary text-base leading-relaxed text-secondary max-w-sm xl:text-right">
            Whether you need guidance on care plans or want to book a
            consultation — our team is ready to help, any time.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-[360px_1fr] gap-5 xl:gap-8 items-start">

          {/* Left: Info Panel */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((c, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-border shadow-sm hover:shadow-custom hover:border-primary/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/5 text-primary text-xl shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                  {c.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-primary text-xs font-semibold text-secondary mb-0.5">
                    {c.subtitle}
                  </p>
                  <p className="font-primary text-sm font-bold text-primary mb-1">
                    {c.title}
                  </p>
                  
                   {c.href ? (
                    <a
                      href={c.href ?? "#"}
                      className="font-primary text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200 truncate block"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-primary text-sm font-semibold text-accent">
                      {c.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials card */}
            <motion.div
              variants={item}
              className="p-5 rounded-2xl bg-primary border border-primary"
            >
              <p className="font-primary text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
                Follow Us
              </p>
              <Socials
                containerStyles="flex items-center gap-5"
                iconStyles="text-white/40 hover:text-accent text-xl transition-colors duration-200"
              />
            </motion.div>
          </motion.div>

          {/* Right: Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border border-border shadow-custom overflow-hidden"
          >
            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-secondary text-2xl xl:text-3xl font-bold text-primary tracking-tight mb-1">
                    Send Us a Message
                  </h3>
                  <p className="font-primary text-sm text-secondary">
                    We typically respond within a few hours.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-primary text-xs font-semibold text-primary/60">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              <Form />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;