import React from "react";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-base-200">
      <footer className="footer text-base-content p-10 max-w-screen-xl mx-auto">
        <aside>
          <img
            className="rounded-full border-4 border-base-content"
            height={100}
            width={100}
            src="/images/syed-faysel.png"
            alt=""
          />
          <div className="">
            <h1 className="flex items-center">
              <BsArrowUpRightCircleFill className="inline items-start justify-start" /> CS Guy Writes
            </h1>
            <p>A blog by Syed Faysel Ahammad Rajo</p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">Platform</a>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Github</a>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Contribution</a>
          <a className="link link-hover">Credits</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
