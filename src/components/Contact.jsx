import React from 'react'

const Contact = () => {
  return (
    <div className="md:w-[70%] w-full">
      <h1 className="flex justify-center text-3xl text-orange-300 mb-10 md:mb-16">CONTACT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
        {/*   Text Area   */}
        <div className="p-5 align-center md:my-10">
          <h1 className="text-xl mb-4 text-orange-100">Get In Touch</h1>
          <p>
            I would love to hear from you and how I could help. Please fill in the form and I'll get back to you as soon as possible
          </p>
        </div>

        {/*   Input Field   */}
        <form action="mailto:https://allandavis254@gmail.com" className="block mt-5 md:mt-0 p-5">
          <div>
           {/* <label htmlFor="fullName" className="overflow-hidden relative top-3 left-5 text-orange-100 text-[12px] bg-slate-900 px-4">FULL NAME</label>*/}
            <input placeholder="FULL NAME..." type="text" id="fullName" className="w-full pt-3 pb-2 px-3 bg-transparent border borded-orange-300 focus:outline-none rounded-md"/>
          </div>

          <div className="mt-4">
            <input placeholder="EMAIL ADDRESS..." type="text" id="emailAddress" className="w-full pt-3 pb-2 px-3 bg-transparent border borded-orange-300 focus:outline-none rounded-md"/>
          </div>
          
          <div className="mt-4">
            <textarea placeholder='MESSAGE..' name="" id="message" cols="0" rows="10" className="w-full py-5 px-3 bg-transparent border borded-orange-300 focus:border-orange-500 rounded-md"></textarea>
          </div>

          <button type="submit" className="text-sm mt-4 md:ml-4 px-4 py-2 bg-orange-300 rounded-md text-slate-900">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact