import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the round symbol */}
          <div className="w-5 h-5 rounded-full bg-[#f25f4c]" />
          {/* the line below the symbol */}
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        {/* self intro paragraph */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#5cc7d5]">Lorraine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Versatile{" "}
            <span className="text-[#5cc7d5]">Full-Stack Web Developer</span>{" "}
            with roots in biotech and medical writing.{" "}
            {/* <br className="sm:block hidden" /> */}
            Passionate about crafting transformative tech solutions{" "}
            <span className="text-[#5cc7d5]">
              from healthcare to limitless horizons.
            </span>
          </p>

          {/* <a href="#contact">Let's Connect✨</a> */}
        </div>
      </div>

      <ComputersCanvas />

      {/* scroll-down icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0], //only move on the y-axis
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

