import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Full Stack Developer",
    description:
      "I am a full-stack developer with expertise in both front-end and back-end technologies, able to design, develop, test and maintain software systems using various programming languages, frameworks and tools to create dynamic and responsive web applications.",
    link: "Learn more",
  },
  {
    name: "SEO specialist",
    description:
      "Experienced in optimizing websites for improved ranking and visibility in search engines using techniques such as keyword research, on-page optimization, link building, and technical SEO. Stays current with the latest trends and algorithms in SEO to drive organic traffic and increase website visibility.",
    link: "Learn more",
  },
  {
    name: "UI/UX Designer",
    description:
      "I am a full-stack developer with expertise in both front-end and back-end technologies, able to design, develop, test and maintain software systems using various programming languages, frameworks and tools to create dynamic and responsive web applications.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "I am a full-stack developer with expertise in both front-end and back-end technologies, able to design, develop, test and maintain software systems using various programming languages, frameworks and tools to create dynamic and responsive web applications.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full Stack Developer with over 2 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[186px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
