import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  const socials = [
    { icon: < FaLinkedinIn className="text-3xl" />, link: "https://www.linkedin.com/in/john-mokaya-3b926a261" },
    { icon: <FaGithub className="text-3xl" />, link: "https://github.com/mokayaj857" },
    { icon: <FaInstagram className="text-3xl" />, link: "https://www.instagram.com.greybabey" }
  ]
  return (
    <div className="min-h-[100vh] w-[100%] flex justify-center items-center">
      <div className="text-center grid gap-5">
        <h3 className="text-3xl" data-aos="fade-up">I'm John Mokaya</h3>
        <h1 className="text-5xl md:text-6xl text-primary" data-aos="fade-up" data-aos-delay="300">A Software Developer</h1>
        <p className="text-muted-foreground text-md md:text-lg md:w-[50%] mx-auto" data-aos="fade-up" data-aos-delay="500">
        I am a software developer focused on advancing Technology for the benefit of humanity using tools such  python, React, Tailwind as well as RESTful APIs using Node.js.
        I am currently looking for opportunities as a junior software engineer and
      I'm always free to talk about that and any other interesting projects you
      may have.
        </p>
        
        <ul className="flex mx-auto gap-5 text-primary" data-aos="fade-up" data-aos-delay="700">
        {socials.map((item, index) => (
          <Link key={index} to={item.link} target='_blank'>
            <li className="text-4xl">{item.icon}</li>
          </Link>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero
