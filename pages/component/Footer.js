import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font bg-gray-100" id="contact">
      <div className="container py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="md:w-1/4 flex-shrink-0  md:mx-10  mx-auto  md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium   text-gray-900 mb-4"
          >
            <Image src={'/logo.png'} width={70} height={70} alt={"logo"} className="rounded-full ml-2 mr-4"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">A2Z Balloon decoration</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500 px-2">
          We provide a wide range of decoration services to make any event full of joy, happiness and memorable.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:mx-10">
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
              Quick links
            </h2>
            <nav className="list-none mb-8">
              <li>
                <Link href={'/#about'} className="text-gray-600 hover:text-gray-800">About</Link>
              </li>
              <li>
                <Link href={'/#occasion'} className="text-gray-600 hover:text-gray-800">Occasions</Link>
              </li>
              <li>
                <Link href={'/#services'} className="text-gray-600 hover:text-gray-800">Service</Link>
              </li>
              <li>
                <Link href={'/#gallery'} className="text-gray-600 hover:text-gray-800">Gallery</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
              React Us
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              # H-303, block-H, Suncity Avenue-102,
              <br />  Sector -102, Gurgaon,
              <br /> Haryana-(122001)
            </p>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 h-full">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 text-center">
              Contact Us
            </h2>
        <form>
          <div className="form-group mb-4">
            <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div className="form-group mb-4">
            <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div className="form-group mb-4">
            <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
        </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {year} A2Z Balloon Decoration —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @All right reserved
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
