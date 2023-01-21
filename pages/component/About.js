import React from "react";
const About = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100" id="about">
      <div className="container px-5 py-12 mx-auto">
        <h2 className="text-center font-semibold text-3xl">
          <span className="pb-4 text-gray-900 border-b-4 border-gray-800">
            About A2Z Balloon
          </span>
        </h2>
        <div className="flex sm:flex-row  items-start mx-auto md:py-4">
          <p className="flex-grow text-gray-900 mt-10 text-justify md:mx-12 md:leading-loose md:tracking-normal tracking-tighter">
            One does not remember days, but remembers moments. We understand the value of an occasion and the emotions attached to it. We provide a wide range of decoration services to make any event full of joy, happiness and memorable. Our luxury balloon decoration services cover all types of events and needs of clients such as baby showers, welcome baby decoration, corporate event decoration, party decoration, wedding decoration, birthday decoration, bachelorette party decoration, anniversary decoration, office party decoration and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
