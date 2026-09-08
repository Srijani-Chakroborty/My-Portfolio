import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="
        my-8
        first:mt-0
        w-[65%]
        mx-auto
        flex
        flex-col
        items-center
        justify-between
        md:w-[85%]
      "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-primary
              dark:text-primaryDark
              hover:underline
            "
          >
            @{company}
          </a>
        </h3>

        <span className="font-medium text-dark/65 dark:text-light/65 xs:text-sm">
          {time} · {address}
        </span>

        <ul className="mt-4 space-y-3">
          {work.map((item, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
                font-medium
                leading-relaxed
                md:text-sm
                sm:text-xs
              "
            >
              <span
                className="
                  mt-2.5
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-primary
                  dark:bg-primaryDark
                "
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2
        className="
          font-bold
          text-8xl
          mb-32
          w-full
          text-center
          md:text-6xl
          xs:text-4xl
          md:mb-16
        "
      >
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="
            absolute
            left-9
            top-0
            w-1
            h-full
            bg-linear-to-b
            from-primary
            to-primaryDark
            origin-top
            md:w-0.5
            md:left-7.5
            xs:left-5
          "
        />

        {/* Oracle */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Member of Technical Staff"
            company="Oracle"
            companyLink="https://www.oracle.com"
            time="January 2026 - Present"
            address="Bangalore"
            work={[
              "Building scalable software capabilities for healthcare applications with a focus on reliability, performance, and user experience.",

              "Working on AI-powered solutions that transform complex and unstructured information into useful structured data.",

              "Taking features from concept to production, including implementation, testing, deployment, and operational readiness.",

              "Collaborating with engineers and senior stakeholders to turn complex requirements into reliable production solutions.",

              "Contributing to modern cloud-native and AI-driven engineering initiatives.",
            ]}
          />
        </ul>

        {/* SAP */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Associate Software Developer"
            company="SAP Labs India"
            companyLink="https://www.sap.com"
            time="August 2022 - January 2026"
            address="Bangalore"
            work={[
              "Delivered end-to-end features across enterprise applications using Angular, React, Java, and Spring Boot within microservices-based systems.",

              "Improved application stability and development velocity through proactive issue resolution, automated testing, and engineering best practices.",

              "Worked with Docker, Kubernetes, CI/CD, observability, caching, and event-driven technologies to build reliable cloud-native applications.",

              "Contributed to analytics and business application capabilities across multiple SAP products and domains.",

              "Mentored junior engineers through code reviews and knowledge-sharing sessions, helping promote strong engineering practices.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;