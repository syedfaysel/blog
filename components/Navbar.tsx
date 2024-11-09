"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import ThemeControl from "./ThemeControl";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      title: "Home",
    },
    // {
    //   id: 2,
    //   link: "/dashboard",
    //   title: "Dashboard",
    // },
    {
      id: 3,
      link: "/about-author",
      title: "About",
    },
    {
      id: 4,
      link: "/blogs",
      title: "Blogs",
    },
    // {
    //   id: 5,
    //   link: "login",
    //   title: "Login",
    // },
  ];

  // Function to hide nav on resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-base-300  sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-10  mb-3">
      <div className="flex justify-between items-center  w-full h-20 px-4 nav relative max-w-screen-xl mx-auto">
        <div className="flex-1">
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-4xl font-signature text-primary ml-2 font-bold flex-inline items-center justify-center">
            <Link className="flex flex-col" href="/" rel="noreferrer">
              <span className="text-accent text-2xl md:text-4xl">
                <BsArrowUpRightCircleFill className="inline items-center justify-center" /> CS Guy Writes
              </span>
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="nav-links text-xl px-4 cursor-pointer capitalize font-medium text-accent hover:scale-105 hover:font-semibold duration-200 link-underline"
            >
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
        <ThemeControl />
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-start items-center absolute top-0 pt-10 left-0 z-100 w-full h-screen backdrop-filter backdrop-blur-lg bg-white bg-opacity-100 transform">
            {links.map(({ id, link, title }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-2xl text-blue-400 hover:text-yellow-400"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
