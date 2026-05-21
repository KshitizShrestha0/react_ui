import React from "react";
import { NavLink } from "react-router";
import img from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-black text-white justify-between items-center px-4 py-2">
        <div>
          <img className="h-20  w-23" src={img} alt="Logo" />
        </div>

        <div>
          <nav className="flex gap-7 text-lg  px-4 py-2  rounded">
            <NavLink className=" hover:text-orange-500" to="/">
              HOME
            </NavLink>
            <NavLink className=" hover:text-orange-500" to="/about">
              ABOUT{" "}
            </NavLink>
            <NavLink className=" hover:text-orange-500" to="/skills">
              SKILLS
            </NavLink>
            <NavLink className=" hover:text-orange-500" to="/projects">
              PROJECTS
            </NavLink>

            <NavLink className=" hover:text-orange-500" to="/contact">
              CONTACT
            </NavLink>
          </nav>
        </div>

        <div>
            <button className="ml-4 bg-blue-500 rounded hover:bg-purple-600 px-4 py-2 text-white font-bold">
                <NavLink  to="/contact">
              HIRE ME
            </NavLink>
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
