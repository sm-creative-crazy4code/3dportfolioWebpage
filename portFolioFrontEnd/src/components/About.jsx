import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Sectionwrapper } from "../hoc";


const ServiceCard=({index,title,icon})=>(

  <Tilt className="xs:w-[250px] w-full">
  

  <motion.div
  variants={fadeIn("right","spring",0.5*index,0.75)}
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex flex-col justify-evenly items-center">
     <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
     <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>

  </motion.div>
  </Tilt>)





const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-10">
        <p className={`${styles.sectionSubText}`}>MY CODE MY STORY</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-[90%] leading-[30px] px-10">
        Greetings! I'm a blockchain developer, ML/AI enthusiast, and perpetual
        student. With my passion for innovation and my experience with
        blockchain development using Solidity and Mernstack, I create solutions
        that make a difference. I also love exploring new technologies, and I've
        worked with frameworks like React, Hardhat, Truffle, Ganache, Web3, and
        Ethers.js. My skillset is rounded out by my knowledge of HTML, CSS, and
        JavaScript, allowing me to create beautiful and engaging user
        interfaces. In my work, I'm always searching for new ways to incorporate
        the latest technologies, and I'm constantly learning and growing. As you
        browse through my portfolio, you'll see that I have a knack for creating
        solutions that are both creative and practical. Let's work together to
        bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 " >

        {
          services.map((service,index)=>(<ServiceCard key={service.title}  index={index} {...service}/>))
        }


      </div>
    </>
  );
};

export default Sectionwrapper(About , "about");
