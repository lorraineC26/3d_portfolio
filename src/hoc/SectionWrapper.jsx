/**
 * Higher Order Component (HOC) are functions that take a component and return a new component with enhanced functionality. 
 * Inside the SectionWrapper function, another function HOC is defined, which is the actual HOC. It wraps the provided Component within a motion.section element.
 * Styling purpose. All sections are wrapped with this SectionWrapper --> dynamic customization of the component being wrapped. 
 * When apply variants to <motion.section>, it applies to all the components wrapped by this wrapper
 * */ 

import {motion} from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* assign each section with `#` + its `idName` at the end of url -> unique endpoint */}
        {/* allow scroll icon scrolling down to About section  */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />

      </motion.section>
    )
  }


export default SectionWrapper