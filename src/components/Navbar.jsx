import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        if(menuOpen === true) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }
    }

    const linkClicked = () => {
        setMenuOpen(false)
    }

  const navLinks = [
    { name: "HOME", link: "" },
    { name: "ABOUT", link: "" },
    { name: "SKILLS", link: "" },
    { name: "PROJECTS", link: "" },
    { name: "CONTACT", link: "" },
  ];
  return (
    <nav className="shadow h-[10vh] bg-background fixed w-full border-2 border-primary/20 z-[9999]">
      <div className="section flex justify-between my-auto place-items-center h-full">
        {/*===Logo===*/}
        <Link>
            <FaCode className="text-4xl my-auto transition-transform duration-500 hover:rotate-360 text-primary" />
        </Link>
        {/*===Nav Links===*/}
        <ul className={`grid md:flex gap-5 md:gap-10 bg-primary md:bg-transparent absolute md:static top-[10vh] left-0 w-[100%] md:w-auto p-10 md:p-0 transition-all ease-in-out duration-500 ${ menuOpen ? 'mt-0' : '-mt-[500px] md:mt-0' }`}>
            {navLinks.map((item, index) => (
                <Link key={index} to={item.link}>
                    <li onClick={linkClicked} className="text-background md:text-primary">{item.name}</li>
                </Link>
            ))} 
            <ModeToggle onClick={() => setMenuOpen(false)} className="hidden md:flex" />
        </ul>
        <div onClick={toggleMenu} className="rounded-md text-2xl p-2 border border-primary md:hidden text-primary ">
            { menuOpen ? <RiCloseLine /> : <RiMenu3Fill /> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;