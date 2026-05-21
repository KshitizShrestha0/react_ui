import React from "react";
import { NavLink } from "react-router";
import kshitiz from "../assets/ks.jpeg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            <img  className="rounded-full" src={kshitiz} alt="Kshitiz Shrestha" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Kshitiz</h3>
            <p className="text-sm text-gray-400">
              Minimal portfolio & projects
            </p>
          </div>
        </div>

        <nav className="mt-4 sm:mt-0">
          <NavLink
            to="/skills"
            className="ml-6 text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className="ml-6 text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="ml-6 text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © {year} kshitiz — Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
