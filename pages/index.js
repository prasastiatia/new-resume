import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";


import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
// const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Prasastia&apos;s Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Prasastia's Portfolio" name="title" />
        <meta content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness." name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://prasastia-aryani-saliha-resume.vercel.app/" property="og:url" />
        <meta content="Prasastia's Portfolio" property="og:title" />
        
        

        {/* <!-- Favicon --> */}
        <link href="https://res.cloudinary.com/dmjlldpwl/image/upload/v1702814297/jwerjh8j2imwlbqdd00b.png" rel="icon" type="image/x-icon" />

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Footer */}
          <Footer />
          
          
        </div>
      </div>
    </Fragment>
  );
}

export default Home
