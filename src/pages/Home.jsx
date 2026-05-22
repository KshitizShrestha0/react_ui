import React from "react";
import bg from "../assets/bg1.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        {/* Content */}
        <div className="max-w-3xl">
          <h2 className="text-purple-500 text-xl sm:text-2xl md:text-3xl font-bold">
            HI, I'M
          </h2>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            KSHITIZ SHRESTHA
          </h1>

          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
            FRONTEND DEVELOPER
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
            I am a passionate developer with experience in React, Node.js,
            and modern web technologies.
            <br />
            Explore my projects and skills below!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg text-white font-bold text-center"
            >
              HIRE ME
            </NavLink>

            <NavLink
              to="/projects"
              className="bg-blue-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg text-white font-bold text-center"
            >
              VIEW PROJECTS
            </NavLink>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 flex-wrap">
            <a
              href="https://github.com/KshitizShrestha0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={35}
                className="text-white hover:text-purple-400 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/kshitiz-shrestha-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={35}
                className="text-white hover:text-blue-400 transition"
              />
            </a>

            <a
              href="https://www.instagram.com/kshitiz40568"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={35}
                className="text-white hover:text-pink-400 transition"
              />
            </a>

            <a
              href="https://www.facebook.com/share/18c6ogupVK/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={35}
                className="text-white hover:text-blue-500 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;