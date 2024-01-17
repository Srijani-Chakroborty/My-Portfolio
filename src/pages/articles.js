import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import article1 from "../../public/images/articles/article.webp"
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import article2 from "../../public/images/articles/google.jpeg"
import article3 from "../../public/images/articles/learning.jpeg"
import article4 from "../../public/images/articles/training.jpeg"
import article5 from "../../public/images/articles/security.jpeg"
import article6 from "../../public/images/articles/women.jpeg"
import article7 from "../../public/images/articles/15yrs.jpeg"


const FramerImage=motion(Image);

const MovingImg=({title,img,link})=>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef=useRef(null);

    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0)
        y.set(0)
    }
    

    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
        <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
        <FramerImage src={img} alt={title} className='z-10 w-96 h-auto absolute rounded-lg'
        
        style={{x:x, y:y}}
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:0.2}}}
        ref={imgRef}
        />
        </Link>
    )
}

const Article=({img,title,date,link})=>{
    return(
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light'>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark'>{date}</span>

        </motion.li>
    )
}

const FeaturedArticle=({img,title,time,summary,link})=>{
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
        <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
            />
        </Link>
        <Link href={link} target="_blank">
            <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>
            {title}
            </h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
        
    )
}

const articles = () => {
  return (
   <>
    <Head>
    <title>SrijaniChakraborty | Articles Page</title>
    <meta name="description" content="any description"></meta>
   </Head>
   <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
    <Layout className='pt-16'>
        <AnimatedText text="Words Can Change The World!" className='mb-16'/>
        <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
            title="Blockchain in Sustainable Development: A Paradigm Shift Towards a Greener Future"
            summary="In the rich tapestry of blockchain and sustainable development, we find not just technological innovation but a vibrant narrative of change — a narrative echoing with transparency, responsibility, and environmental consciousness. "
            time="5 min read" link="https://medium.com/@2022sp93013/blockchain-in-sustainable-development-a-paradigm-shift-towards-a-greener-future-9b94ed0e73ad" img={article1}
            />
            <FeaturedArticle
            title="Google Cloud GenAI Developer Days"
            summary="In the ever-evolving landscape of software development, speed, efficiency, and innovation are the new names of the game. Businesses are constantly seeking ways to streamline the development process, reduce manual labour, and stay ahead of the competition. Enter Pega GenAI, the revolutionary force poised to transform software development as we know it. "
            time="5 min read" link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_genaideveloperdays-genai-aicommunity-activity-7147292924819517440-B58C?utm_source=share&utm_medium=member_desktop" img={article2}
            />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
        <ul>
            <Article
                title="50 Hours of Learning Completion - Achievement unlocked"
                date="December 31, 2023"
                link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_50hourslearning-scholarlife-lifeatsap-activity-7145665474322706432-LmKS?utm_source=share&utm_medium=member_desktop"
                img={article3}
            
            />
            <Article
                title="Recognition of certified trainer from scholar curriculum team"
                date="September 20, 2023"
                link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_sapui5-certifiedtrainer-appreciationcertificate-activity-7108678846043852800-Y1Vx?utm_source=share&utm_medium=member_desktop"
                img={article4}
            
            />
            <Article
                title="Security Learning Summit 2023 - Presentaion on chatGPT - A Destroyer or Saviour "
                date="March 25, 2023"
                link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_sap-saplabsindia-lifeatsap-activity-7050815140782374912-CrCS?utm_source=share&utm_medium=member_desktop"
                img={article5}
            
            />
            <Article
                title="Women in Tech session with Supervisory Board Member Christine Regitz"
                date="April 15, 2023"
                link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_womenintech-diversityandinclusion-leadershiplessons-activity-7057010321139318785-uE3m?utm_source=share&utm_medium=member_desktop"
                img={article6}
            
            />
            <Article
                title="15 years celebration event for VT/ STAR India program at SAP Labs India"
                date="May 27, 2023"
                link="https://www.linkedin.com/posts/srijani-chakraborty-a0b42b1a0_lifeatsap-scholarlife-journeytosuccess-activity-7064478519854051328-vvyC?utm_source=share&utm_medium=member_desktop"
                img={article7}
            />
        </ul>
    </Layout>
   </main>
   </>
  )
}

export default articles