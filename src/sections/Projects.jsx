import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaLink, FaGithub } from "react-icons/fa";

import Rolax from "../assets/Rolax-Iot.png";
import Linktree from "../assets/linktree.PNG";
import Pharmacy  from "../assets/image.png";
import Event  from "../assets/Event.png";
import Secure  from "../assets/Secure.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      image: Secure,
      title: " SecurePass- Visitor management system",
      demoLink: "https://ocw66-bqaaa-aaaai-aqcrq-cai.icp0.io/",
      codeLink: "https://github.com/Team-Z-ICP/Visitor_Management_Systems.git",
      techStack: [{ name: "React-Native" }, { name: "Motoko" }],
    },
    {
      image: Event,
      title: " EventVerse- Event-Ticketing system",
      demoLink: "https://drive.google.com/file/d/1Z5Q1POLNw9g6Vq8ph7jJq1FduJROfza0/view?usp=sharing",
      codeLink: "https://github.com/Avalanche-Team1-DAO-Kenya/Event-Ticketing.git",
      techStack: [{ name: "React-Native" }, { name: "Solidity" }],
    },
    {
      image: Rolax,
      title: " ROLAX- water management system",
      demoLink: "",
      codeLink: "https://github.com/mokayaj857/rolax.git",
      techStack: [{ name: "Elixir" }, { name: "Phoenix" }],
    },
    {
      image: Linktree,
      title: "My Linktree Website",
      demoLink: "",
      codeLink: "https://github.com/mokayaj857/linktree.git",
      techStack: [{ name: "Nodejs" }, { name: "Tailwindcss" }, { name: "TypescriptScript" }],
    },
    {
      image: Pharmacy,
      title: "Pharmacy management system",
      demoLink: "https://drive.google.com/file/d/1zAP1gCd1YZ7yXz_U26YopK1yXgWzrIzI/view?usp=sharing",
      codeLink: "https://github.com/MohamedAlaga/ALX_phase_one_project.git",
      techStack: [
        { name: "NodeJS" },
        { name: "TailwindCSS" },
        { name: "PostmanApi" },
        { name: "MySQL" },
        { name: "Django" },
      ],
    },
  ];

  return (
    <div className="my-28 w-full flex justify-center">
      <div className="md:text-center grid gap-5 w-full">
        <h1
          className="text-2xl md:text-3xl text-primary mb-5 md:mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          PROJECTS
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div key={index} className="border hover:border-primary rounded-md overflow-hidden" data-aos="fade-up" data-aos-delay="500">
              <img src={item.image} alt="" className="" />
              <div className="px-3 py-2" >
                <div className="flex justify-between">
                  <Link to={item.demoLink} target="_blank">
                    <h3 className="font-bold text-xl hover:text-primary">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="flex text-2xl gap-2">
                    <Link to={item.demoLink} className="hover:text-primary">
                      <FaLink />
                    </Link>
                    <Link to={item.codeLink} className="hover:text-primary">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <ul className="flex gap-2 flex-wrap my-3">
                  {item.techStack.map((stack, stackIndex) => (
                    <li
                      key={stackIndex}
                      className="px-2 bg-primary/30 rounded-full text-sm"
                    >
                      {stack.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
