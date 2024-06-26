
import React, { useRef } from 'react'
import { useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({position,company,companyLink,time, address, work})=>{
    const ref=useRef(null)
    return <li ref={ref} className='my-8 first:mt-0  w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        viewport={{once:true}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                position="Developer Associate" company="SAP Labs India"
                companyLink="www.sap.com"
                time="2024, April - Present" address="Bangalore"
                work="Working in SAP FSM (Field Service Management) team responsible for first-time fix rates with mobile technology, AI-based recommendations to find the right technician for the job and optimize operations while reducing environmental impact, supporting sustainability efforts through efficient service delivery."
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                position="Full Stack Developer" company="SAP Labs India"
                companyLink="www.sap.com"
                time="2023, June - 2024, March" address="Bangalore"
                work="Worked in SAP C4C (cloud for customers) team responsible for developing new features for sales retail customers, including improving the accuracy and relevance of survey results and 
                developing new tools for data analysis and visualization."
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Full Stack Developer" company="SAP Labs India"
                companyLink="www.sap.com"
                time="2022, September - 2023, May" address="Bangalore"
                work="Worked in SAP Business Network team responsible for building master database application for digital cloning products, a centered application for all operators, manufacturers and customers."
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Software Developer Engineer" company="Agitech Avids"
                companyLink="www.agitechavids.com"
                time="2021, August - 2021, September" address="Kolkata"
                work="Worked as Research and Development Intern where I worked on OTT streaming application and build a media streamer app for their customer."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
