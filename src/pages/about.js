
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile2.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers=({value})=>{
    const ref=useRef(null)
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000})
    const isInView=useInView(ref,{once:true})
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue])
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0)
            }
        })
    },[springValue,value])
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>SrijaniChakraborty | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I’m Srijani — a full-stack developer with 3.5 years of
                experience working across both front-end and back-end to build
                complete, scalable web applications. I enjoy turning complex
                requirements into clean, reliable, and user-friendly solutions.
              </p>

              <p className="my-4 font-medium">
                I believe great products are built by combining thoughtful
                design, solid engineering, and a deep understanding of user
                needs. My focus is always on creating intuitive experiences
                backed by maintainable and efficient systems.
              </p>

              <p className="font-medium">
                Whether I’m building a feature end-to-end, improving existing
                systems, or collaborating with cross-functional teams, I bring a
                strong sense of ownership and a passion for delivering
                high-quality digital experiences.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
              <Image
                src={profilePic}
                alt="srijani"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-start xl:col-span-8 xl:flex-row xl:items-center xl:justify-center md:order-3">
              {/* <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={50}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
            </div> */}
              <div className="flex flex-col items-end py-8 justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
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
}

export default about
