import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='dark:text-light dark:border-light w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
    <Layout className='px-18 py-4 flex items-center justify-between lg:flex-col'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>Built By  <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> <Link className='underline underline-offset-2' href="/">Srijani</Link></div>
        <Link className='underline underline-offset-2' href="/" target={"_blank"}>Say hello</Link>
    </Layout>
   </footer>
  )
}

export default Footer