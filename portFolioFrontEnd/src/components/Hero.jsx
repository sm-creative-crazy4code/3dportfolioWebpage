import React from 'react'
import {motion} from 'framer-motion'
import {ComputersCanvas} from './canvas'
import { styles } from "../styles";



const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'> 
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'>
             <div className='w-5 h-5 rounded-full bg-[#eb4152]'/>
             <div className='w-1 sm:h-80 h-40 pink-gradient'/>
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi! I'm <span className='text-[#eb4152]'>Sneha</span></h1>
        <p className={`${styles.heroSubText} text-white-100`}> I develope Blockchain application ,<br className='sm:block hidden'/>MERN apps and exploring ML/AI</p>
      </div>
             
     </div>


    
  <ComputersCanvas/>

  <div className='absolute   w-full flex justify-center items-center mt-5 bottom-20 md:bottom-1'>
    <a href='#about'>
    <div className='w-[25px] h-[50px] md:w-[35px] md:h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-center md:p-2'>
     <motion.div
        animate={{
          y:[0,24,0]
        }}

        transition={{
          duration:1.5,
          repeat:Infinity,
          repeatType:'loop'
        }}

        className='w-2 h-2 md:w-3 md:h-3  rounded-full bg-secondary mb-1'
      >

     </motion.div>

    </div>

    </a>
     
  </div>
  
   </section>
  )
}

export default Hero
