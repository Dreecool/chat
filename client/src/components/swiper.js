import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const SwiperComponent = () => {
  






  
  return (

    <div>

      <Swiper spaceBetween={20} slidesPerView={4} className='pt-3 pb-3 pe-2 ps-2'>


           
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>1</SwiperSlide>

     

       


      </Swiper>
       
    </div>
  );
};

export default SwiperComponent;