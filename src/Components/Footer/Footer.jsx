import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
const Footer = () => {
  return (
    <footer className=" max-w-8xl text-center  mx-auto ml-5 mr-5 bg-black text-primary-content p-10">
      <aside>
        <div>
          <div className="flex justify-center">
            <img src={logo} alt="" className="h-20 w-20 rounded-full" />
          </div>
          <p className="font-bold mb-5">
            SkillSwap
            <br />
            Providing reliable courses since 1992
          </p>
          <div className="flex justify-center">
            <div>
              <Link to="/about-us" className="mr-5 flex flex-col justify-center items-center">
                <IoIosInformationCircle />
                <span>About Us</span>
              </Link>
            </div>
            <div>
              <Link to="/contact" className="mr-5 flex flex-col justify-center items-center">
                <FaPhoneAlt />
                <span>Contact</span>
              </Link>
            </div>
            <div>
              <Link to="/support" className="mr-5 flex flex-col justify-center items-center">
                <MdOutlineSupportAgent />
                <span>Support</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-10">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
