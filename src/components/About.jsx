import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      style={{ perspective: 1000 }}
    >
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Highly motivated BTech student in Computer Science and Business Systems seeking a role to leverage strong 
        programming skills and understanding of frontend, backend, and machine learning. Experience includes building AI 
        applications and machine learning models. Eager to contribute to a team environment and apply technical knowledge 
        to solve real-world business problems, seeking an opportunity to apply my learnings to real-world product engineer.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
