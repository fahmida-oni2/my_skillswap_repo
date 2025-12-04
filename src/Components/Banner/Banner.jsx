import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/Banner3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'animate.css';
import { IoLogIn } from "react-icons/io5";
import { Link } from 'react-router';
const Banner = () => {
    return (
    <div className='ml-5 mr-5' >
        
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
  className="hero h-100"
  style={{
    backgroundImage:
      "url(https://i.postimg.cc/xTTZyzst/banner.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content flex justify-center items-center p-4">
    <div className="space-y-6 text-center lg:text-left lg:mr-10 ">
      <h1 className="mb-10 text-5xl font-bold animate__animated animate__backInDown">Welcome to SkillSwap</h1>
      <p className="mb-5 lg:text-2xl">
        Trade skills locally, from coding and languages to music and yoga. <br />
Discover experts, rate experiences, and grow together in a smart, community-driven space.
      </p>
       <Link
                to="/auth/register"
                className="btn bg-sky-800 mr-5 rounded-2xl text-white w-40 lg:w-40 hover:bg-indigo-300"
              >
               <IoLogIn />Get Started
              </Link>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
  <div
    className="hero  h-100"
    style={{
      backgroundImage: "url(https://i.postimg.cc/xTTZyzst/banner.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content flex justify-center items-center p-4">
      <div className="space-y-6 text-center lg:text-left lg:mr-10">
        <h2 className="text-5xl lg:text-6xl font-bold">What We Offer?</h2>
        <p className=" lg:text-2xl">
          Guitar lessons,<br />
          Language exchange,<br />
          Coding help,<br />
          Yoga training
        </p>
        <Link to="/skills" className='btn rounded-2xl bg-sky-800 text-white hover:bg-indigo-300'>
          See more
        </Link>
      </div>
      <div className="mt-6 lg:mt-0">
        <img src={img} alt="" className="rounded-full lg:h-70 lg:w-70 h-40 w-40  shadow-lg opacity-70" />
      </div>
    </div>
  </div>
</SwiperSlide>

    <SwiperSlide>
  <div
    className="hero  h-100 "
    style={{
      backgroundImage: "url(https://i.ibb.co.com/JR0yk1Hq/image.png)",
    }}
  >
    <div className="hero-overlay bg-opacity-"></div>
    <div className="hero-content text-neutral-content flex flex-col lg:flex-row justify-center items-center p-4">
      <div className="space-y-6 text-center lg:text-left lg:mr-10">
        <h2 className="mb-10 text-5xl lg:text-6xl font-bold">Community Status</h2>
        <p className=" lg:text-2xl">
          Hundreds of local learners and experts are <br /> connecting every day. <br />
From coding and languages to music and yoga — <br /> learn, teach, and grow together.<br />
Join SkillSwap and be part of <br /> a thriving local skill-sharing community.
        </p>
      </div>
      
    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </div>
  );
};


export default Banner;
