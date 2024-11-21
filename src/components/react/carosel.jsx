import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperCard() {
  return (
    <div className="p-6 bg-gray-100">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white h-40">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-green-500 text-white h-40">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-500 text-white h-40">
          Slide 3
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
