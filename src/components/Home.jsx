import React from 'react'
import HomePhoto from '../assets/home-photo.png'

const Home = () => {
  return (
    <div className="flex justify-between flex-col-reverse md:flex-row max-w-[1440px] mx-auto">

      {/*   Name, Profession and Contact Me button    */}
      <div className="text-center md:text-left md:ml-4 -mt-18">
        <h5 className="text-xl md:text-3xl">I'm Allan Njoroge</h5>
        <h1 className="text-orange-300 text-[35px] lg:text-[70px] mt-4">Web Developer</h1>
        <button className="md:mt-10 mt-6 md:px-4 md:py-2 px-2 py-1 bg-orange-300 text-slate-900 rounded-md hover:bg-orange-200 duration-300 ">Contact Me</button>
      </div>
      
      {/*   Image and Social Icons    */}
      <div className="md:ml-10 border-4 border-orange-300 mb-28">
        <img src={ HomePhoto } alt="" className="bg-gray-700 -ml-4 -mt-6 w-[300px] mb-4"/>
      </div>
    </div>
  )
}

export default Home