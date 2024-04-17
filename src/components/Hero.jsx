import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="realtive w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the round symbol */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* the line below the symbol */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Lorraine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            Versatile Full-Stack Web Developer merging biotech and medical
            writing skills. <br className="sm:block hidden"/> 
            Proficient in end-to-end development, passionate about tech solutions 
            across diverse fields, including healthcare and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
