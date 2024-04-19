import React from "react";
import { Tilt } from "react-tilt"; // tilting cards when hovering
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        {/* fadeIn accepts 4 params: direction, type, delay(s), ration of animation */}
        I'm a dynamic Full-Stack Web Developer with a background in nutrition
        and biotech. From biotech internship to medical writing role, I've
        developed strong communication, teamwork, and problem-solving skills. As
        a Junior Frontend Developer at a start-up, I tackled projects using
        TypeScript, JavaScript, React, and NextJS. With a knack for synthesizing
        complex information, I'm poised to craft impactful solutions. Let's
        collaborate to bring innovative ideas to fruition and make a meaningful
        impact!
      </motion.p>
    </>
  );
};

export default About;
