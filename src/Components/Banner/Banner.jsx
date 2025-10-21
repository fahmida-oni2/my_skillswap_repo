import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/Banner3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
    <div className='m-5' >
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row justify-center items-center p-4">
            <div className='space-y-3 justify-center items-center'> 
            <h2 className='text-6xl font-bold'>Welcome to SkillSwap</h2>
            <p className='text-3xl'>From coding to carpentry, <br />connect with experts in your neighborhood today.</p>
            </div>
            <img src={img} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row justify-center items-center p-4">
           <div  className='space-y-3 justify-center items-center'>
            <h2 className='text-6xl font-bold'>What we offer?</h2>
            <p className='text-3xl'> guitar lessons,<br /> language exchange,<br /> coding help, or <br />yoga training</p>
           </div>
            <img src={img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row justify-center items-center p-4">
           <div  className='space-y-3 justify-center items-center'>
            <h2 className='text-6xl font-bold'>Community status</h2>
            <p className='text-3xl'>  guitar lessons,<br /> language exchange,<br /> coding help, or <br />yoga training</p>
           </div>
            <img src={img} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Banner;
