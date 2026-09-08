import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0  w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-linear-to-b from-primary to-primaryDark origin-top md:w-0.5 md:left-7.5 xs:left-5"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Master of Technology in Software Engineering"
            time="August 2022 - July 2024"
            place="Birla Institute of Technology and Science, Pilani, Rajasthan"
            info="CGPA: 9.00"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Technology in Computer Science and Engineering"
            time="August 2018 - July 2022"
            place="Amity University"
            info="CGPA: 9.32"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
