import React from "react";

const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="text-center text-3xl font-bold">
        <span className="md:pb-4 pb-2 text-gray-900 border-b-4 border-gray-800">
          Gallery
        </span>
      </h1>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-4 mx-auto lg:pt-12 lg:px-12">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full md:h-72 h-20 rounded-lg"
                  src="https://rukminim1.flixcart.com/image/850/850/l48s9zk0/balloon/j/7/3/3-5-haldi-ceremony-helium-balloon-decoration-de4-gorgeous-moment-original-imagf6ejz5f7yzds.jpeg?q=90"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal10.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal3.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4 ">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full md:h-72 h-20 rounded-lg  "
                  src="/car.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal5.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/gal6.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/main1.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
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
