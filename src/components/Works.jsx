import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, globe, presentation, play } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const LINK_ICONS = [
  { key: "source_code_link", icon: github, alt: "github" },
  { key: "demo_link",        icon: globe,  alt: "live demo" },
  { key: "slides_link",      icon: presentation, alt: "slide deck" },
  { key: "video_link",       icon: play,   alt: "recording" },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  slides_link,
  video_link,
}) => {
  const linkValues = { source_code_link, demo_link, slides_link, video_link };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.075)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* ICON redirections */}
          <div className="absolute inset-0 flex justify-end items-start gap-2 m-3 card-img_hover">
            {LINK_ICONS.map(({ key, icon, alt }) =>
              linkValues[key] ? (
                <div
                  key={key}
                  onClick={() => window.open(linkValues[key], "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={icon} alt={alt} className="w-1/2 h-1/2 object-contain" />
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* For name & description for each project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[23px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* For tech stacks used in each project */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects reflect my ability to solve complex problems, work
          with different technologies, and manage projects effectively. Each
          project is briefly described with links to code repositories.
        </motion.p>
      </div>

      <div className="mt-15 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
