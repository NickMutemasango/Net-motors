"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import Chevron icons
import Image from "next/image";
import Logo from "../public/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Add a state to track the active link
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update the active link state when a link is clicked
    if (link !== "more") {
      setDropdownOpen(false); // Close the dropdown if any link other than "more" is clicked
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown
    setActiveLink("more"); // Set active link to "more"
  };

  return (
    <nav className="bg-gradient-to-r relative from-red/20 via-grey/60 md:w-[80%] shadow-lg to-red/20 w-full h-[4.5vh] lg:h-[6.5vh] z-50 flex justify-between md:justify-center items-center px-4 md:px-8">
      <div className="w-[10%] md:absolute left-[-4%] top-[50%]">
        <Image src={Logo} alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-black text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul
        className={`md:flex md:space-x-8 text-black font-bold items-center absolute md:relative top-[4.5vh] md:top-0 left-0 w-full bg-red md:bg-transparent md:w-auto transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <li className="p-4 md:p-0">
          <Link
            href="/"
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "text-yellow" : ""}
          >
            Home
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link
            href="/cars"
            onClick={() => handleLinkClick("cars")}
            className={activeLink === "cars" ? "text-yellow" : ""}
          >
            Cars
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link
            href="/about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "text-yellow" : ""}
          >
            About Us
          </Link>
        </li>

        {/* More with Dropdown */}
        <li className="p-4 md:p-0 relative">
          <button
            onClick={toggleDropdown}
            className={`hover:text-yellow flex items-center ${activeLink === "more" ? "text-yellow" : ""}`}
          >
            More
            {dropdownOpen ? (
              <FaChevronUp className="ml-2" /> // Chevron pointing up if dropdown is open
            ) : (
              <FaChevronDown className="ml-2" /> // Chevron pointing down if dropdown is closed
            )}
          </button>
          {/* Dropdown Links */}
          {dropdownOpen && (
            <ul className="absolute top-full mt-2 w-[150px] bg-white shadow-lg rounded-md text-black">
              <li className="hover:bg-gray-200">
                <Link
                  href="/team"
                  onClick={() => handleLinkClick("team")}
                  className="block px-4 py-2"
                >
                  Team
                </Link>
              </li>
              <li className="hover:bg-gray-200">
                <Link
                  href="/gallery"
                  onClick={() => handleLinkClick("gallery")}
                  className="block px-4 py-2"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="p-4 md:p-0">
          <Link
            href="/terms"
            onClick={() => handleLinkClick("terms")}
            className={activeLink === "terms" ? "text-yellow" : ""}
          >
            Terms
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link
            href="/contact"
            onClick={() => handleLinkClick("contact")}
            className={activeLink === "contact" ? "text-yellow" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
