import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, FreeMode, Thumbs, Mousewheel, Autoplay, Pagination } from "swiper/modules";

export default function SwiperCard() {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center w-4/5 h-48 bg-white text-lg">Slide 1</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-3/5 h-48 bg-white text-lg">Slide 2</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-4/5 h-48 bg-white text-lg">Slide 3</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-2/5 h-48 bg-white text-lg">Slide 4</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-4/5 h-48 bg-white text-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-3/5 h-48 bg-white text-lg">Slide 6</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-4/5 h-48 bg-white text-lg">Slide 7</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-2/5 h-48 bg-white text-lg">Slide 8</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-4/5 h-48 bg-white text-lg">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
