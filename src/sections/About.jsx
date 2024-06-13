import React from "react";

const About = () => {
  return (
    <div className=" w-[100%] flex justify-center">
      <div className="md:text-center grid gap-5">
        <h1 className="text-2xl md:text-3xl text-primary mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="300">ABOUT ME</h1>
        <p className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="500">
          Driven by a passion for clean code and attention to detail, I
          specialize in crafting dynamic and engaging online experiences. As a
          Kenyan-based web developer, I thrive on solving problems in innovative
          ways, creating accessible websites that users genuinely enjoy. My
          commitment to excellence drives me to continually update my skill set
          with cutting-edge technologies, ensuring that the websites I build are
          both innovative and user-friendly.
          </p>
          <p className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="700">
          In the ever-evolving field of web development, my focus on
          accessibility, exceptional user experiences, and cultural sensitivity
          fuels my excitement for creating impactful and meaningful online
          interactions for users worldwide. My mission is to blend creativity
          with technical expertise, delivering websites that not only meet but
          exceed user expectations, making the digital world more inclusive and
          enjoyable for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
