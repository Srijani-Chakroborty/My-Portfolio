import Layout from "@/components/Layout";

import Head from "next/head";

import Image from "next/image";

import profilePic from "../../public/images/profile/profile1.png";

import AnimatedText from "@/components/AnimatedText";

import Link from "next/link";

import TransitionEffect from "@/components/TransitionEffect";

import { GithubIcon } from "@/components/Icons";

import { LinkedInIcon } from "@/components/Icons";

import { ArrowUpRight, Mail } from "lucide-react";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Srijani Chakraborty | Full-Stack Engineer
        </title>

        <meta
          name="description"
          content="Portfolio of Srijani Chakraborty, a full-stack engineer with 4+ years of experience building scalable web, cloud, and AI-powered applications."
        />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-[calc(100vh-135px)] dark:text-light overflow-hidden">
        <Layout className="py-0! h-full flex items-center w-full">
          <div className="flex items-center justify-between w-full gap-10 lg:flex-col lg:gap-3 lg:justify-center">

            {/* Profile Image */}
            <div
  className="
    relative
    w-1/2
    lg:w-full
    flex
    justify-center
    items-center
    lg:shrink-0
  "
>
  {/* Soft accent glow */}
  <div
    className="
      absolute
      w-[380px]
      h-[380px]
      rounded-full
      bg-primary/10
      blur-3xl
      dark:bg-primaryDark/10
      lg:w-[300px]
      lg:h-[300px]
      sm:w-[240px]
      sm:h-[240px]
    "
  />

  {/* Thin accent ring */}
  <div
    className="
      absolute
      w-[420px]
      h-[420px]
      rounded-full
      border
      border-primary/20
      dark:border-primaryDark/30
      lg:w-[320px]
      lg:h-[320px]
      sm:w-[260px]
      sm:h-[260px]
    "
  />

  <Image
    src={profilePic}
    alt="Srijani Chakraborty"
    className="
      relative
      z-10
      w-full
      h-auto
      lg:w-4/5
      sm:w-full
      max-h-[55vh]
      lg:max-h-[40vh]
      md:max-h-[35vh]
      sm:max-h-[35vh]
      object-contain
      transition-transform
      duration-500
      hover:scale-[1.02]
    "
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
  />
</div>

            {/* Hero Content */}
            <div className="w-1/2 flex flex-col items-start lg:w-full lg:text-center lg:items-center lg:shrink-0">

            <TypingText
              text="I build software that scales."
              speed={65}
              className="
                text-left
                lg:text-center
                text-4xl
                font-bold
                tracking-tight
                md:text-xl
                sm:text-lg
              "
            />

              <p
                className="
                  my-6
                  max-w-xl
                  text-lg
                  leading-relaxed
                  font-medium
                  text-dark/75
                  dark:text-light/75
                  md:text-sm
                  sm:text-xs
                  lg:my-3
                  sm:my-1
                  lg:px-4
                  sm:text-center
                "
              >
                I’m a{" "}
                <b className="text-primary font-black tracking-wide dark:text-amber-400">
                  Full-Stack Engineer
                </b>
                {" "}with 4+ years of experience building scalable web and
                cloud applications across enterprise products. I work across
                React, Angular, Java, Spring Boot, microservices, cloud-native
                systems, and GenAI, with a focus on owning features from
                design to production.
              </p>

              {/* Primary Actions */}
              <div className="flex items-center gap-4 mt-2 lg:self-center lg:mt-1">
  <Link
    href="mailto:chakrobortysrijani2001@gmail.com"
    className="
      flex
      items-center
      bg-dark
      text-light
      py-3
      px-8
      rounded-lg
      text-base
      font-semibold
      hover:-translate-y-0.5
      hover:shadow-lg
      dark:bg-light
      dark:text-dark
      md:py-2
      md:px-7
      md:text-base
      sm:py-1.5
      sm:px-5
      sm:text-xs
      transition-all
      duration-300
      ease-in-out
    "
  >
    Let's Connect
    <ArrowUpRight className="ml-1.5 h-4 w-4" />
  </Link>

  <Link
    href="/about"
    className="
      flex
      items-center
      border
      border-dark/20
      dark:border-light/25
      py-3
      px-7
      rounded-lg
      text-base
      font-semibold
      hover:-translate-y-0.5
      hover:border-primary
      hover:text-primary
      dark:hover:text-primaryDark
      md:py-2
      md:px-6
      md:text-base
      sm:py-1.5
      sm:px-4
      sm:text-xs
      transition-all
      duration-300
      ease-in-out
    "
  >
    About Me
    <ArrowUpRight className="ml-1.5 h-4 w-4" />
  </Link>
</div>

              {/* Mobile Social Links */}
              <div
                className="
                  hidden
                  sm:flex
                  flex-row
                  justify-center
                  items-center
                  gap-6
                  mt-8
                  lg:mt-4
                  md:mt-3
                  sm:mt-2
                  lg:gap-4
                  sm:gap-3
                  mb-4
                "
              >
                <a
                  href="mailto:chakrobortysrijani2001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10
                    h-10
                    lg:w-8
                    lg:h-8
                    sm:w-7
                    sm:h-7
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                    duration-200
                  "
                >
                  <Mail
                    strokeWidth={2}
                    className="w-full h-full"
                  />
                </a>

                <a
                  href="https://github.com/Srijani-Chakroborty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10
                    h-10
                    lg:w-8
                    lg:h-8
                    sm:w-7
                    sm:h-7
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                    duration-200
                  "
                >
                  <GithubIcon className="w-full h-full" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srijani-chakraborty-a0b42b1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10
                    h-10
                    lg:w-8
                    lg:h-8
                    sm:w-7
                    sm:h-7
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-transform
                    duration-200
                  "
                >
                  <LinkedInIcon className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}