import React from "react";

const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="text-center text-3xl font-bold">
        <span className="md:pb-4 pb-2 text-gray-900 border-b-4 border-gray-800">
          Gallery
        </span>
      </h1>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-4 mx-auto lg:pt-12 lg:px-12">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal12.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal10.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal3.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal7.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal11.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal6.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal7.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/4">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal1.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
