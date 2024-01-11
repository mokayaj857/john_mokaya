import React from 'react'

const Skills = () => {

  const frontEndSkills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "TailwindCSS"},
    {skill: "React"},
  ]

  const otherSkills = [
    {skill: "Git"},
    {skill: "Github"}
  ]

  return (
    <div>
      
      {/* Page Title  */}
      <h1 className="text-3xl text-orange-300 mb-10 md:mb-16 flex justify-center">SKILLS</h1>

      <div>
        <h3 className="mx-10 pb-4 text-xl border-b-2 border-orange-300">Frontend</h3>
        {/*   Frontend Skills list   */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            frontEndSkills.map((frontEndSkills) => (
              <li className="md:m-10 m-6 px-20 py-10 bg-slate-800 text-center rounded-xl text-2xl">{frontEndSkills.skill}</li>
            ))
          }
        </ul>
      </div>

      <div>
        <h3 className="mx-10 pb-4 text-xl border-b-2 border-orange-300 mt-6">Other Skills</h3>
        {/*   Other Skills list   */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            otherSkills.map((otherSkills) => (
              <li className="md:m-10 m-6 px-20 py-10 bg-slate-800 text-center rounded-xl text-2xl">{otherSkills.skill}</li>
            ))
          }
        </ul>
      </div>
    </div>    
  )
}

export default Skills