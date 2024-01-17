
import React, { useRef } from 'react'
import { useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({type,time,place,info})=>{
    const ref=useRef(null)
    return <li ref={ref} className='my-8 first:mt-0  w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        viewport={{once:true}}>
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Master Of Technology In Software Engineering"
                time="2022-2024" place="Birla Institute of Sciend and Technology, Pilani (BITS, Pilani)"
                info="CGPA: 8.77"
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Bachelor Of Technology In Computer Science and Engineering"
                time="2018-2022" place="Amity University Kolkata"
                info="CGPA: 9.32"
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-[-4%]'>
                <Details
                type="Higher Secondary Education (PCMB)"
                time="2018" place="Surendranath Girls' High School"
                info="Percentage: 84"
                />
            </ul>
            <ul className='w-full flex flex-col items-start justify-between ml-[-12%]'>
                <Details
                type="Secondary Education"
                time="2016" place="Surendranath Girls' High School"
                info="Percentage: 89"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education