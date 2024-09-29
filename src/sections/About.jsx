import React from "react";

const About = () => {
  return (
    <div className=" w-[100%] flex justify-center">
      <div className="md:text-center grid gap-5">
        <h1 className="text-2xl md:text-3xl text-primary mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="300">ABOUT ME</h1>
        <p className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="500">
        John is a dedicated  developer and tech enthusiast who believes 
in communities and what they can do. Driven by the desire to 
make a positive impact in society, he seeks to harness the power 
of technology to address real-world problems. He envisions a 
future where technology empowers communities, enhances 
communication and improves the quality of life for all. He is 
motivated by the notion that technology has the potential to 
radicalize mankind. My quest is more than just learning; I am
actively finding methods to utilize my knowledge to make a 
good difference to not only in my field of technology but to the
community.
          </p>
          <p className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="700">
          Volunteering is a core belief that inspires me to serve others and believe in the power of humanity to create positive change, and I love volunteering during my free time. My dedication to learning and growth is boundless, and I'm always pushing myself to expand my skill set and deliver exceptional results. Beyond the technical expertise, I'm a fun and approachable person who values positive interactions as a tool for personal and professional growth, and believes in the power of teamwork and social connection.

        </p>
      </div>
    </div>
  );
};

export default About;
