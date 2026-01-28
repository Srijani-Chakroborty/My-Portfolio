import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='dark:text-light dark:border-light w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base flex flex-row items-center justify-center py-4 px-10 lg:px-8 md:px-6 sm:px-4'>
      <div className=''>Built By  <span className='text-primary dark:text-primaryDark'>&#9825;</span> <Link className='underline underline-offset-2' href="/">Srijani</Link></div>
    </footer>
  )
}

export default Footer