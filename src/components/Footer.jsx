import React from 'react';
import { FaRegCopyright, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 mb-10">
      <ul className="flex justify-center mb-20 gap-12 text-4xl">
        {/*   Instagram   */}
        <li>
          <a href="https://www.instagram.com/justallan._" target="_blank" className="hover:text-orange-300 transition-all ease-in duration-400"><FaInstagram /></a>
        </li>

        {/*   Github   */}
        <li>
          <a href="https://github.com/Allan-njoroge" target="_blank" className="hover:text-orange-300 transition-all ease-in duration-400"><FaGithub /></a>
        </li>

        {/*   LinkedIn   */}
        <li>
          <a href="https://www.linkedin.com/in/allan-njoroge-0177b2270/" target="_blank" className="hover:text-orange-300 transition-all ease-in duration-400"><FaLinkedin /></a>
        </li>
      </ul>
      <p className="flex text-xl">
        <span className="my-auto mx-2"><FaRegCopyright /></span>
        2024 Allan Njoroge. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer