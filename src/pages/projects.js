import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/social media.png"
import project5 from "../../public/images/projects/sort.png"
import project2 from "../../public/images/projects/bank.png"
import project4 from "../../public/images/projects/face.png"
import project6 from "../../public/images/projects/url.png"
import project3 from "../../public/images/projects/media.png"
import { motion } from 'framer-motion'

const FramerImage=motion(Image);

const FeaturedProjects=({type,title,summary,img,link,github})=>{
return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"/>
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                {type}
            </span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link className='w-10' href={github} target='_blank'><GithubIcon/></Link>
        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
        </div>
        </div>
    </article>
)
}

const Project=({title,type,img,link,github})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}/>
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark'>
                {type}
            </span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target='_blank' className='mr-4 text-lg font-semibold underline'>Visit</Link>
        <Link className='w-8' href={github} target='_blank'>{" "}<GithubIcon/>{" "}</Link>
        </div>
        </div>
        </article>
    )

}

const projects = () => {
  return (
   <>
    <Head>
    <title>SrijaniChakraborty | Projects Page</title>
    <meta name="description" content="any description"></meta>
   </Head>
   <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
    <Layout className='pt-16'>
        <AnimatedText className='mb-16' text="Imagination Trumps Knowledge!"/>
        <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
                <FeaturedProjects
                title="AmiSocial - Social Media Application"
                summary="AmiSocial (Ami = 'Me' / abv. of Amity) is a social media app which I made for my University (Amity University Kolkata). This project is based on MERN tech stack where I have used React for UI and Node js, MongoDb for Backend. This is a responsive web application where anyone of my university who has access to this app link can login and explore all the features of it."
                img={project1}
                link="https://github.com/Srijani-Chakroborty/AmiSocial"
                github="https://github.com/Srijani-Chakroborty/AmiSocial"
                type="Featured Project"
                />
            </div>
            <div className='col-span-6'>
               <Project
               title="Online Banking Website"
               img={project2}
               link="https://github.com/Srijani-Chakroborty/Online-Banking-website"
               github="https://github.com/Srijani-Chakroborty/Online-Banking-website"
               type="Featured Project"/>
            </div>
            <div className='col-span-6'>
            <Project
               title="Media Streamer"
               img={project3}
               link="https://github.com/Srijani-Chakroborty/MediaStreamer"
               github="https://github.com/Srijani-Chakroborty/MediaStreamer"
               type="Featured Project"/>
            </div>
            <div className='col-span-12'>
            <FeaturedProjects
                title="Face Recognition System"
                summary="A simple system application for face extraction and recognition using machine learning concepts and python libraries. This system application is very easy to use and also easy to understand whether a face is recognized or not. We have used green and red frames to let users understand that green box is for 'face is succesfully recognized' and red box is for 'face is not recognized', and also if the face is covered or not visible then it will show that 'face is not detected'."
                img={project4}
                link="https://github.com/Srijani-Chakroborty/Face-Recognition-System"
                github="https://github.com/Srijani-Chakroborty/Face-Recognition-System"
                type="Featured Project"
                />
            </div>
            <div className='col-span-6'>
            <Project
               title="Sort Visualizer"
               img={project5}
               link="https://github.com/Srijani-Chakroborty/Sort_visualizer"
               github="https://github.com/Srijani-Chakroborty/Sort_visualizer"
               type="Featured Project"/>
            </div>
            <div className='col-span-6'>
            <Project
               title="URL Shortener"
               img={project6}
               link="https://github.com/Srijani-Chakroborty/URL-Shortener"
               github="https://github.com/Srijani-Chakroborty/URL-Shortener"
               type="Featured Project"/>
            </div>
        </div>
    </Layout>
   </main>
   </>
  )
}

export default projects