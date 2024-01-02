import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleOnClickHamburger = () => setNav(!nav);

  const handleOnClose = () => setNav(false);
  return (
    <div className="w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 justify-between items-center flex w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">LOGO</h1>
          <ul className="sm:hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-80} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex mr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button>Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleOnClickHamburger}>
          {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleOnClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleOnClose}
            to="about"
            smooth={true}
            offset={-120}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleOnClose}
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleOnClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleOnClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 mb-3">Login</button>
          <button>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
