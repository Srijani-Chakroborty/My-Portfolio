import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import { GithubIcon } from '@/components/Icons'
import { LinkedInIcon, SunIcon, MoonIcon } from '@/components/Icons'
import { useThemeSwitcher } from '@/components/hooks/useThemeSwitcher'

export default function Home() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <Head>
        <title>Srijani's Portfolio</title>
        <meta name="description" content="Portfolio of Srijani Chakraborty, a Full-Stack Developer." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="srijani" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
                sizes="(max-width:768px) 90vw,(max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a <b className='text-amber-400 font-black tracking-wide'>Full-Stack Developer</b>, I am dedicated to turning ideas into innovative web applications.
                <br />Explore my latest projects and articles, showcasing my expertise in various tech-stack.
              </p>
              <div className='flex items-center gap-4 self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}>Resume <LinkArrow className='w-6 ml-1' /></Link>
                <Link href="mailto:chakrobortysrijani2001@gmail.com" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'>Email</Link>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex justify-center items-center gap-5 mt-6'>
            <a
              href="https://github.com/Srijani-Chakroborty"
              target="_blank"
              className='w-6'
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/srijani-chakraborty-a0b42b1a0/"
              target="_blank"
              className='w-6'
            >
              <LinkedInIcon />
            </a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </Layout>
      </main>
    </>
  )
}
