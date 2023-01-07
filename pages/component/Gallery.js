import React from "react";

const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="text-center text-3xl font-bold">
        <span className="md:pb-4 pb-2 text-gray-900 border-b-4 border-gray-800">
        Gallery
        </span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i1.fnp.com/images/pr/l/v20210623021337/birthday-special-balloon-decoration_1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://cdn.shopify.com/s/files/1/0018/9340/0623/products/decoration_20_x700.jpg?v=1615444072"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://deowgxgt4vwfe.cloudfront.net/uploads/1566995311_large.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://cdn.togetherv.com/birthday-special-balloon-decoration-3_1663137509.webp"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://cdn.togetherv.com/happy-birthday-balloon-decoration-3_1662882378.webp"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEb2VAS0DtpV0ZY-KSOFX-EwiIjyIKEEOLw&usqp=CAU"
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
