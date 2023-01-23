import React from "react";
import Image from "next/image";
import { BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"
import Link from "next/link";
const Header = () => {
  return (
    <div className="container mx-auto sticky top-0 z-[100] bg-white">
      <div className="md:ml-auto md:flex md:justify-end  md:px-6 bg-gray-600 shadow-md md:py-4 py-2">
        <div className="flex">
        <div className="flex items-center px-6  text-white">
          <BiMobile />  
          <Link href={'tel:9910112161'}>+91:9910112161</Link>
        </div>
        <div className="flex items-center px-6  text-white">
            <BsWhatsapp/> &nbsp;
            <Link target='_blank' className="" rel="noreferrer" href="https://wa.me/+919910112161"> Send Message </Link>
        </div>
        </div>
        <div className="flex items-center px-6 text-white">
           <AiOutlineMail/> : a2zballoondecoration@gmail.com
        </div>
      </div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 md:shadow-lg shadow-sm rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center md:justify-start justify-between mx-auto md:ml-2">
          <Link href="/" className="flex items-center">
          <Image src={'/logo.png'} width={70} height={70} alt={"logo"} className="rounded-full ml-2"/>
          <span className="md:hidden self-center text-xl font-semibold whitespace-nowrap dark:text-white">A2Z Balloon decoration</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-1 pl-4 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:pl-10">
              <li>
              <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  href="/#about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#occasion"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Occasions
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
