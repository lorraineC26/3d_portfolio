import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
      <h2 className="font-black text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-2 text-center">
        My Skill Sets
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "")