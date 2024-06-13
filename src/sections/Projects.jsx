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

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-28 w-full flex justify-center">
      <div className="md:text-center grid gap-5 w-full">
        <h1 className="text-2xl md:text-3xl text-primary mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="300">
          PROJECTS
        </h1>
        <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
          className="w-[80%] mx-auto"
          data-aos="fade-up" data-aos-delay="500"
        >
          <CarouselContent className="mx-auto">
            {projects.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 ml-5 overflow-hidden relative"
              >
                <img src={item.image} alt="" className="w-[100%]" />
                {/*===Links section===*/}
                <div className="flex text-2xl gap-5 absolute top-5 right-5 bg-primary/50 px-3 py-2 rounded-full text-background">
                  <Link to={item.demoLink} target="_blank">
                    <FaLink />
                  </Link>
                  <Link to={item.codeLink} target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                {/*===project description section===*/}
                <div className="p-5">
                  {/*===title section===*/}
                  <div className="mb-3">
                    <Link to={item.demoLink} target="_blank">
                    <h3 className="text-2xl font-semibold text-left">{item.title}</h3>
                    </Link>
                    
                  </div>
                  {/*===tech stack section===*/}
                  <div className="flex gap-3 flex-wrap">
                    {item.techStack.map((stack, stackIndex) => (
                      <span
                        key={stackIndex}
                        className="bg-primary/30 rounded-md px-2 py-1 text-sm"
                      >
                        {stack.name}
                      </span>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-background" />
          <CarouselNext className="bg-primary text-background" />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
