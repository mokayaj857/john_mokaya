import React from 'react'

const About = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-orange-300 text-center md:mb-16 mb-10">ABOUT ME</h1>

      {/*   About Me Content    */}
      <div className="">
        <div className="md:my-20 md:mt-0 mt-8 my-14 w-[90%] md:w-[70%] mx-auto">
          <p className="md:mb-10 mb-6">
            As a Kenyan based Web-Developer, my passion lies in creating accessible websites that users genuinely enjoy. With a commitment to excellence, I constantly update my skill set to incorporate cutting edge-technologies, ensuring that the websites I build are both innovative and user-friendly.
          </p>
          <p>
            In the dynamic field of web development, my focus on accessibilty, user experiences and cultural sensitivity fuels my excitement for creating impactful and meaningful online experiences for users worldwide.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About