import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaLink, FaGithub } from "react-icons/fa";

import Interiors from "../assets/interiors.PNG";
import Solar from "../assets/solar-project.PNG";
import Events from "../assets/Events.PNG";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      image: Solar,
      title: "Solar Company Website",
      demoLink: "https://solar-co.netlify.app/",
      codeLink: "https://github.com/Allan-njoroge/solar-company-website",
      techStack: [{ name: "ReactJS" }, { name: "TailwindCSS" }],
    },
    {
      image: Interiors,
      title: "Interior Design Website",
      demoLink: "https://just-interiors.netlify.app/",
      codeLink: "https://github.com/Allan-njoroge/interior-design",
      techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      image: Events,
      title: "Events Reserving Platform",
      demoLink: "https://eventxp.vercel.app/",
      codeLink: "https://github.com/Allan-njoroge/MyEvents",
      techStack: [
        { name: "ReactJS" },
        { name: "CSS" },
        { name: "NodeJs" },
        { name: "MySQL" },
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
