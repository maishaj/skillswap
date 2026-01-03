import React from 'react';
import sliderfirst from '../assets/slider1.jpg';
import slidersecond from '../assets/slider2.jpg';
import sliderthird from '../assets/slider3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[400px] object-cover' src={sliderfirst} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[400px] object-cover' src={slidersecond} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[400px] object-cover' src={sliderthird} alt="" /></SwiperSlide>
            </Swiper>
        </div>
  );
};

export default Slider;
