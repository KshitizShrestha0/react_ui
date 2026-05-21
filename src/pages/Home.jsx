import React from "react";
import bg from "../assets/bg1.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <div
        className="justify-between  bg-cover bg-center rounded-lg shadow-lg min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="pt-20 pl-10">
          <h1 className=" text-purple-500   text-3xl font-bold text-center pt-10  pr-100 pl-10 text-left ">
            HI, I'M
          </h1>
          <h1 className="text-white text-5xl font-bold text-center pt-5 pr-100 pl-10 text-left">
            KSHITIZ SHRESTHA
          </h1>
          <h1 className="text-white text-2xl font-bold text-center pt-5 pr-100 pl-10 text-left">
            FRONTEND DEVELOPER
          </h1>
          <p className="text-left text-white text-center mt-4 text-sm pr-100 pl-10">
            I am a passionate developer with experience in React, Node.js, and
            more. <br /> Explore my projects and skills below!
          </p>
        </div>
        <div className="pl-15 pt-10">
          <button className="ml-4 bg-blue-500 rounded hover:bg-purple-600 px-4 py-2 text-white font-bold">
            <NavLink to="/contact">HIRE ME</NavLink>
          </button>
          <button className="ml-4 bg-blue-500 rounded hover:bg-purple-600 px-4 py-2 text-white font-bold">
            <NavLink to="/projects">VIEW PROJECTS</NavLink>
          </button>
          <br />
        </div>
        <div className="flex gap-10 text-3xl pl-20 pt-10">
          <NavLink to="https://github.com/KshitizShrestha0" target="blank">
            <FaGithub size={40} color="white" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/kshitiz-shrestha-0"
            target="blank"
          >
            <FaLinkedin size={40} color="white" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/kshitiz40568?igsh=MWJldDlkem9nanAzcg=="
            target="blank"
          >
            <FaInstagram size={40} color="white" />
          </NavLink>
          <NavLink
            to="https://www.facebook.com/share/18c6ogupVK/"
            target="blank"
          >
            <FaFacebook size={40} color="white" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
