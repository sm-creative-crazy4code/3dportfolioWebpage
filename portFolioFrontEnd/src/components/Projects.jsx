import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { Sectionwrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 1.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full relative h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
          <div
            onClick={() => window.open(source_code_link, "blank")}
            className="black-gradient w-10 h-10 rounded-s-none flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="gitHub"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {name}  
            </h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>

        </div>
        <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag)=>(
                <p key={tag.name} className={` text-[14px] ${tag.color}`}> #{tag.name}</p>
            ))}

        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          THINKING OUT OF BOX...CODING BETWEEN LINES...
        </p>
        <h1 className={`${styles.sectionHeadText}`}>Honourable Mentions.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.2, 2)}
        className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Step right into my world of creativity and innovation! This is where I
        showcase my finest works and projects, each one embodying my passion for
        excellence and my ability to craft solutions that make an impact.
        Whether it's web development, developimg decentralized technologies or complex application designing, I've poured
        my heart and soul into every project to bring it to life. As you explore
        this section, you'll see how I've tackled challenges head-on, solved
        complex problems with ease, and delivered outstanding outcomes every
        single time. So, get ready to immerse yourself in my world of
        imagination, and feel free to reach out to me with any questions or
        collaborations you may have.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Sectionwrapper(Projects, "");
