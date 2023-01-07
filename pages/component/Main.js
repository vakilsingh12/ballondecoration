import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper';
const Main = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="md:mx-10">
      <Swiper
      slidesPerView={1}
      autoplay={{delay:4000}}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
    </Swiper>
    </div>
  );
};
const Slide = () => {
  return (
    <div className="flex shadow-lg">
      <img src="https://cdn.togetherv.com/birthday-special-balloon-decoration-3_1663137509.webp" class="max-w-full h-auto" alt="" />
      <img src="https://deowgxgt4vwfe.cloudfront.net/uploads/1566995311_large.jpg" class="max-w-full h-auto" alt="" />
      <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="max-w-full h-auto" alt="" />
      <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="max-w-full h-auto" alt="" />
      <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="max-w-full h-auto" alt="" />
    </div>
  )
}

export default Main;
