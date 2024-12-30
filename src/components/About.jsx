import React from 'react'
import { styles } from '../styles'
import {motion} from "framer-motion";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import { Tilt } from 'react-tilt';


const ServiceCard=({index,title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",index*0.5,0.75)}
        className='w-full bg-white  p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{max:45, scale:1, speed:450}} 
          className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt='web-devlopment' className='w-16 h-16 object-contain'  /> 
          <h3 className='text-black text-[20px] font-bold text-center' >{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Innovative Computer Science student with a passion for building dynamic platforms and AI-powered solutions. Experienced in creating interactive projects, optimizing code, and solving complex problems, with a focus on driving impactful results through innovative technology solutions.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service} />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About,"about");