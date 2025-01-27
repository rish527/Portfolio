import React from 'react'
import {motion} from "framer-motion";
import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from "../utils/motion";
import { div } from 'framer-motion/client';
import {styles} from "../styles";
import {platforms} from "../constants/index.js"
import { Tilt } from 'react-tilt';

const PlatformCard=({index,name, icon,link})=>{
    return(
      <Tilt className='xs:w-[250px] w-full'>
        <a href={link}>
            <motion.div
            variants={fadeIn("right","spring",index*0.5,0.75)}
            className='w-full  rounded-[20px] shadow-card'
            >
            <div options={{max:45, scale:1, speed:450}} 
                className='black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img src={icon} alt='platform' className='w-16 h-16 object-contain'  /> 
                <h3 className='text-white text-[20px] font-bold text-center' >{name}</h3>
            </div>
    
            </motion.div>
        </a>
      </Tilt>
    )
}

function External() {
  return (
    <div>
        <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-left`}>Where I'm Active.</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Technical Profiles.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {platforms.map((platform,index)=>(
            <PlatformCard key={platform.id} index={index}{...platform} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(External,'platforms');