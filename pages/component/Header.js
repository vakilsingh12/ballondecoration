import React from "react";
import Image from "next/image";
import { BiMobile } from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import Link from "next/link";
const Header = () => {
  return (
    <div className="container mx-auto sticky top-0 z-10 bg-white">
     <div className="md:ml-auto md:flex md:justify-end  md:px-6 bg-gray-600 shadow-md md:py-4 py-2">
     <div className="flex items-center px-6  text-white">Contact Us : <BiMobile/>+91:9877751658</div>
     <div className="flex items-center px-6 text-white">Email : <AiOutlineMail/> booleandecoraton@gmail.com </div>
     </div>
      <header className="text-gray-600 body-font md:px-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap md:p-5 p-2 flex-col md:flex-row items-center">
          <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">A2Z Ballon Decoration</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base ">
            <Link href="/" className="md:mr-12 mr-2 hover:text-gray-900 md:text-lg ">Home</Link>
            <Link href="/#occasion" className="md:mr-12 mr-2 hover:text-gray-900 md:text-lg ">Occasions</Link>
            <Link href="/#services" className="md:mr-12 mr-2 hover:text-gray-900 md:text-lg ">Services</Link>
            <Link href="/#gallery" className="md:mr-12 mr-2 hover:text-gray-900 md:text-lg ">Gallery</Link>
            <Link href="/#contact" className="md:mr-12 mr-2 hover:text-gray-900 md:text-lg ">Contact Us</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
