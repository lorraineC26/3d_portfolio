import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
      <h2 className="font-black text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[40px] mb-2 text-center">
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