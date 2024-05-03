import React from "react";
import { Tilt } from "react-tilt"; // tilting cards when hovering
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // tilt paras for cards
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* fadeIn accepts 4 params: direction, type, delay(sec), ration of animation */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My coding journey started in my final summer at McGill, studying
        Nutrition. Serendipitously, I discovered 'Programming in Life Science,'
        where Python became my tool for patient weight control, DNA analysis,
        etc. I was hooked from the start, finding the whole experience
        incredibly fascinating.
        <br />
        From biotech to web development at a startup, I've refined
        communication, teamwork, and problem-solving skills while shaping my
        technical abilities, including TypeScript, React, NextJS, etc. With a
        talent for simplifying complex concepts, I'm ready to create meaningful
        solutions.
        <br />
        <br />
        <a
          href="https://flowcv.com/resume/e7qs6cpgtp"
          target="_blank" // open a new tab
          // no opener: prevent potential security exploits where the newly opened tab could manipulate the contents of the originating tab;
          // no referrer: the destination website won't know the URL of the page that referred the user to it
          rel="noopener noreferrer"
          className="flex items-center bg-button py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          <span className="mr-1.5 text-2xl icon-[ph--download]"></span>
          Download Resume
        </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
