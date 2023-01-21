import React, { useEffect } from "react";
import Image from "next/image";
const Main = () => {
  return (
    <div
      id="controls-carousel"
      className="relative md:mx-10 mx-2"
      data-carousel="slide"
    >
      <div className="relative  overflow-hidden rounded-lg carusal-data">
        <div
          id="carousel-item-1"
          className="duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://5.imimg.com/data5/DE/JN/QE/SELLER-8900435/birthday-balloon-decoration-in-lucknow-1000x1000.jpg"
            className="block object-cover object-center w-full h-full rounded-lg"
            alt="main"
            width={100}
            height={100}
          />
        </div>

        <div
          id="carousel-item-2"
          className="duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="https://birthdaypartyplanner.in/images/t/homebd/Balloon-Decoration%20(13).JPG"
            className="block object-cover object-center w-full h-full rounded-lg"
            alt="main5"
          />
        </div>
        <div
          id="carousel-item-3"
          className=" duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="/main3.jpg"
            className="block object-cover object-center w-full h-full rounded-lg"
            alt="main3"
          />
        </div>
        <div
          id="carousel-item-4"
          className=" duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="https://img1.exportersindia.com/product_images/bc-full/2021/5/8846273/anniversary-party-themes-1621382191-5826943.jpg"
            className="block object-cover object-center w-full h-full rounded-lg"
            alt="main4"
          />
        </div>
      </div>
      <button
        type="button"
        className="hidden absolute top-0 left-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 md:flex hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <style jsx>
        {`
          .carusal-data {
            height: 600px;
          }
          @media screen and (max-width: 995px), screen and (max-height: 500px) {
            .carusal-data {
            height: 300px;
          }
          }
        `}
      </style>
    </div>
  );
};

export default Main;
