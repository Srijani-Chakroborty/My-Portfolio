import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

import project1 from "../../public/images/projects/social media.png";
import project5 from "../../public/images/projects/sort.png";
import project2 from "../../public/images/projects/bank.png";
import project4 from "../../public/images/projects/face.png";
import project6 from "../../public/images/projects/laundry.png";
import project3 from "../../public/images/projects/media.png";
import project7 from "../../public/images/projects/ai-chat-app.png";
import project8 from "../../public/images/projects/ai-expense-tracker.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="
        group relative w-full
        flex items-center justify-between
        rounded-3xl
        border border-dark/20
        bg-light
        p-12
        dark:bg-dark
        dark:border-light/20
        lg:flex-col
        lg:p-8
        xs:rounded-2xl
        xs:p-2
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-primary
        dark:hover:border-primaryDark
      "
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-1/2
            cursor-pointer
            overflow-hidden
            rounded-lg
            lg:w-full
            aspect-video
            flex
            items-center
            justify-center
          "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
          />
        </Link>
      ) : (
        <div
          className="
            w-1/2
            cursor-pointer
            overflow-hidden
            rounded-lg
            lg:w-full
            aspect-video
            flex
            items-center
            justify-center
          "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
          />
        </div>
      )}

      <div
        className="
          w-1/2
          flex
          flex-col
          items-start
          justify-between
          pl-6
          lg:w-full
          lg:pl-0
          lg:pt-6
        "
      >
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>

        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm xs:text-xs">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm xs:text-xs">
            {title}
          </h2>
        )}

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm xs:text-xs">
          {summary}
        </p>

        <div className="mt-2 w-full flex items-center">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                bg-dark
                text-light
                p-2
                px-6
                text-lg
                font-semibold
                dark:bg-light
                dark:text-dark
                sm:px-4
                sm:text-base
                xs:px-3
                xs:text-sm
                xs:p-1.5
                transition-transform
                duration-300
                hover:-translate-y-0.5
              "
            >
              Visit Project
            </Link>
          )}

          <Link
            className="
              w-10
              ml-auto
              xs:w-8
              transition-transform
              duration-300
              hover:scale-110
            "
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="
        group
        relative
        w-full
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dark/20
        bg-light
        p-6
        dark:bg-dark
        dark:border-light/20
        xs:p-2
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-primary
        dark:hover:border-primaryDark
      "
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full
            cursor-pointer
            overflow-hidden
            rounded-lg
            aspect-video
            flex
            items-center
            justify-center
            bg-gray-50
            dark:bg-gray-900
          "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ) : (
        <div
          className="
            w-full
            cursor-pointer
            overflow-hidden
            rounded-lg
            aspect-video
            flex
            items-center
            justify-center
            bg-gray-50
            dark:bg-gray-900
          "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        {type && (
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
        )}

        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-lg">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-lg">
            {title}
          </h2>
        )}

        {summary && (
          <p className="font-medium text-dark dark:text-light md:text-sm">
            {summary}
          </p>
        )}

        <div className="w-full mt-3 flex items-center">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mr-4
                text-lg
                font-semibold
                underline
                md:text-base
                xs:text-sm
                transition-transform
                duration-300
                hover:-translate-y-0.5
              "
            >
              Visit
            </Link>
          )}

          <Link
            className="
              w-8
              md:w-6
              xs:w-5
              ml-auto
              transition-transform
              duration-300
              hover:scale-110
            "
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>SrijaniChakraborty | Projects Page</title>

        <meta
          name="description"
          content="Selected full-stack, AI-powered, and cloud application projects by Srijani Chakraborty."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:text-7xl! sm:text-6xl! xs:text-4xl!"
            text="Ideas, Engineered for Impact."
          />

          <div
            className="
              grid
              grid-cols-12
              gap-24
              gap-y-32
              xl:gap-x-16
              lg:gap-x-8
              md:gap-y-24
              sm:gap-x-0
              xs:gap-y-16
            "
          >
            {/* AI Chat Application */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="AI Chat Application"
                img={project7}
                github="https://github.com/Srijani-Chakroborty/Dissertation-AiChat-App"
                type="AI Application"
                summary="Enterprise messaging application with an integrated OpenAI chatbot and AI-powered features, built with React and Node.js."
              />
            </div>

            {/* AI Expense Tracker */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="AI Expense Tracker"
                img={project8}
                link="https://ai-expense-tracker-zuyx.vercel.app/"
                github="https://github.com/Srijani-Chakroborty/ai-expense-tracker"
                type="AI Application"
                summary="Responsive full-stack expense and income tracker with analytics and Gemini-powered financial insights, built with React, Express, MongoDB, Node.js, and Cloudinary."
              />
            </div>

            {/* AmiSocial */}
            <div className="col-span-12 sm:px-4 xs:px-4">
              <FeaturedProjects
                title="AmiSocial - Social Media Application"
                summary="A responsive social media platform built on the MERN stack for the Amity University Kolkata community. It brings together a React interface with Node.js and MongoDB services for a connected campus experience."
                img={project1}
                github="https://github.com/Srijani-Chakroborty/AmiSocial"
              />
            </div>

            {/* Online Banking */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="Online Banking Website"
                img={project2}
                github="https://github.com/Srijani-Chakroborty/Online-Banking-website"
                type="Web Application"
                summary="A banking web application focused on essential account and transaction workflows with a clean user interface."
              />
            </div>

            {/* Media Streamer */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="Media Streamer"
                img={project3}
                link="https://srijani-chakroborty.github.io/MediaStreamer/"
                github="https://github.com/Srijani-Chakroborty/MediaStreamer"
                type="Web Application"
                summary="A browser-based media streaming application designed for a simple and intuitive playback experience."
              />
            </div>

            {/* Face Recognition */}
            <div className="col-span-12 sm:px-4 xs:px-4">
              <FeaturedProjects
                title="Face Recognition System"
                summary="A machine-learning application for face detection and recognition built with Python libraries. Clear visual feedback communicates recognized, unrecognized, and undetected faces."
                img={project4}
                github="https://github.com/Srijani-Chakroborty/Face-Recognition-System"
              />
            </div>

            {/* Sort Visualizer */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="Sort Visualizer"
                img={project5}
                link="https://sort-visualizer-ivory.vercel.app"
                github="https://github.com/Srijani-Chakroborty/Sort_visualizer"
                type="Web Application"
                summary="Interactive web application for visualizing sorting algorithms and understanding how they work step by step."
              />
            </div>

            {/* Laundry Mobile App */}
            <div className="col-span-6 sm:col-span-12 sm:px-4 xs:px-4 flex">
              <Project
                title="Laundry Mobile App"
                img={project6}
                github="https://github.com/Srijani-Chakroborty/Laundry-Mobile-App"
                type="Mobile Application"
                summary="Cross-platform laundry service application designed to simplify facility selection, booking, processing, and delivery workflows."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;