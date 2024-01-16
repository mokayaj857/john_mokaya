import React from 'react'
import solarProject from '../assets/solar-project.PNG'

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl text-orange-300 mb-10 md:mb-16 text-center">PROJECTS</h1>

      <div>
        <div>
          <img src={ solarProject } alt="Solar Project" className="w-[280px] md:w-[400px]" />
          <div className="my-5">
            <button className="px-2 py-1 bg-orange-300 text-slate-900 rounded-md hover:bg-orange-200">
              <a href="https://solar-co.netlify.app/" target="_blank">View Site</a>
            </button>

            <button className="ml-5 border-2 border-orange-300 px-2 py-1 rounded-md text-orange-300 hover:text-orange-200 hover:border-orange-200">
              <a href="https://github.com/Allan-njoroge/solar-company-website" target="_blank">View Code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects