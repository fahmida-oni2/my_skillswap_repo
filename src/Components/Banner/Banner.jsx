import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/Banner3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'animate.css';
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
    
        <SwiperSlide >
          <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.postimg.cc/xTTZyzst/banner.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">Welcome to SkillSwap</h1>
      <p className="mb-5">
        Trade skills locally, from coding and languages to music and yoga.
Discover experts, rate experiences, and grow together in a smart, community-driven space.
      </p>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://i.postimg.cc/xTTZyzst/banner.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content flex flex-col lg:flex-row justify-center items-center p-4">
      <div className="space-y-6 text-center lg:text-left lg:mr-10">
        <h2 className="text-5xl lg:text-6xl font-bold">What We Offer?</h2>
        <p className="text-2xl lg:text-3xl">
          Guitar lessons,<br />
          Language exchange,<br />
          Coding help,<br />
          Yoga training
        </p>
      </div>
      <div className="mt-6 lg:mt-0">
        <img src={img} alt="" className="rounded-full h-100 w-100 shadow-lg opacity-70" />
      </div>
    </div>
  </div>
</SwiperSlide>

    <SwiperSlide>
  <div
    className="hero min-h-screen "
    style={{
      backgroundImage: "url(https://i.postimg.cc/xTTZyzst/banner.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-"></div>
    <div className="hero-content text-neutral-content flex flex-col lg:flex-row justify-center items-center p-4">
      <div className="space-y-6 text-center lg:text-left lg:mr-10">
        <h2 className="text-5xl lg:text-6xl font-bold">Community Status</h2>
        <p className="text-2xl lg:text-3xl">
          Hundreds of local learners and experts are <br /> connecting every day. <br />
From coding and languages to music and yoga — <br /> learn, teach, and grow together.<br />
Join SkillSwap and be part of <br /> a thriving local skill-sharing community.
        </p>
      </div>
      <div className="mt-6 lg:mt-0">
        <img src={img} alt="" className="rounded-full h-100 w-100 shadow-lg opacity-70" />
      </div>
    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </div>
  );
};


export default Banner;
