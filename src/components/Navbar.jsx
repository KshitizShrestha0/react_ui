import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import img from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <img
              src={img}
              alt="Logo"
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 hover:text-orange-500 ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-purple-600 transition px-5 py-2 rounded-lg font-semibold"
            >
              HIRE ME
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4 text-center">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2 transition hover:text-orange-500 ${
                      isActive ? "text-orange-500" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 hover:bg-purple-600 transition py-3 rounded-lg font-semibold"
              >
                HIRE ME
              </NavLink>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;