import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>SrijaniChakraborty | About Page</title>
        <meta name="description" content="Learn about Srijani Chakraborty’s experience in full-stack, cloud, and AI-powered product development."></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Engineering Ideas Into Impact!"
            className="mb-16 lg:text-7xl! sm:text-6xl! xs:text-4xl! sm:mb-8"
          />
          <div className="grid w-full grid-cols-10 gap-16 sm:gap-8 lg:grid-cols-1 items-center sm:px-5 px-20">
            <div className="col-span-3 flex flex-col items-start justify-center lg:col-span-1 lg:order-2">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary dark:text-primaryDark">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I’m Srijani, a full-stack developer with 4+ years of experience building scalable
                web and cloud applications. I work across Angular, React, Java, and Spring Boot, and
                enjoy turning complex requirements into reliable, user-friendly solutions.
              </p>

              <p className="my-4 font-medium">
                I care deeply about feature ownership, performance, and maintainability. From
                cloud-native microservices to multimodal GenAI workflows, I build secure systems
                that make complex information useful and accessible.
              </p>

              <p className="font-medium">
                Whether I’m delivering an end-to-end feature, optimizing a high-volume service, or
                collaborating across teams, I bring strong ownership and a practical focus on
                high-quality outcomes.
              </p>
            </div>
            <div
  className="
    col-span-4
    lg:col-span-1
    lg:order-1
    relative
    flex
    items-center
    justify-center
    min-h-[540px]
    sm:min-h-[420px]
  "
>
  {/* Soft accent glow */}
  <div
    className="
      absolute
      w-[360px]
      h-[360px]
      rounded-full
      bg-primary/10
      blur-3xl
      dark:bg-primaryDark/10
    "
  />

  {/* Accent frame */}
  <div
    className="
      absolute
      w-[390px]
      h-[440px]
      rounded-[2rem]
      border
      border-primary/20
      rotate-[-3deg]
      transition-transform
      duration-500
      hover:rotate-0
      lg:w-[330px]
      lg:h-[390px]
      sm:w-[270px]
      sm:h-[330px]
    "
  />

  {/* Main image */}
  <div
    className="
      relative
      z-10
      w-[78%]
      max-w-[360px]
      overflow-hidden
      rounded-[1.5rem]
      border
      border-dark/10
      bg-light
      p-2.5
      shadow-xl
      dark:border-light/10
      dark:bg-dark
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      sm:w-[82%]
    "
  >
    <Image
      src={profilePic}
      alt="Srijani Chakraborty"
      className="
        w-full
        h-auto
        rounded-[1rem]
        object-cover
        transition-transform
        duration-700
        hover:scale-[1.03]
      "
      priority
      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,40vw"
    />
  </div>

  {/* Small label */}
  <div
    className="
      absolute
      top-10
      left-0
      z-20
      rounded-full
      border
      border-primary/20
      bg-light/90
      px-4
      py-2
      text-[10px]
      font-bold
      uppercase
      tracking-[0.2em]
      text-primary
      backdrop-blur-sm
      dark:bg-dark/90
      dark:text-primaryDark
      sm:top-5
    "
  >
    Engineer · Builder
  </div>

  {/* Accent dot */}
  <span
    className="
      absolute
      top-20
      right-2
      z-20
      h-3
      w-3
      rounded-full
      bg-primary
      dark:bg-primaryDark
      sm:right-0
    "
  />
</div>
            <div className="col-span-3 flex flex-col gap-5 items-end justify-center lg:col-span-1 lg:flex-row lg:items-center lg:justify-center lg:order-3">
              <div className="w-full flex flex-col items-end justify-center lg:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
              <div className="w-full flex flex-col items-end justify-center lg:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center md:text-lg sm:text-base xs:text-sm">
                  Production features delivered
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
