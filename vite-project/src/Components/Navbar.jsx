import React from "react";  
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { FaRegUser} from "react-icons/fa";


const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Categories",
        link: "#"
    },
    {
        id: 3,
        title: "Products",
        link: "#"
    },
    {
        id: 4,
        title: "Blog",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    },

]

const Navbar  = () => { 
    return (
        <div className=" text-white py-8">
            <div className="container flex justify-between items-center">
                {/* logo section*/}
                <div>
                    <img src={logo} alt="" className="max-w-[100px] invert"/>
                </div>
                {/* menu section*/}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 relative z-40">
                        {NavbarMenu.map((item) => (
                            <li>
                                <a 
                                href={item.link}
                                className="inline-block text-base font-semibold py-5 px-3 uppercase"
                                >{item.title}</a>
                            </li>
                        ))}
                        <button className="text-xl ps-14">
                            <FaRegUser />
                        </button>
                    </ul>
                </div>
                {/* Hamburger menu*/}
                <div className="md:hidden">
                <IoMenu className="text-4xl" />

                </div>
            </div>
        </div>
    );
}
export default Navbar;