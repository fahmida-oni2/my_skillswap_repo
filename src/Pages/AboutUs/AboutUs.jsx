import React from "react";
import "animate.css";
const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen ml-5 mr-5">
      <h2 className="text-4xl mt-10 text-center text-sky-800  font-bold mb-4 animate__animated animate__fadeInDown">
        About Us
      </h2>
      <p className=" mb-12 italic text-center animate__animated animate__fadeInUp max-w-3xl mx-auto">
        SkillSwap is a smart, community-driven platform dedicated to
        facilitating the local exchange and trading of skills. We provide a
        vibrant space where individuals can connect, learn, teach, and grow
        together, making personal and professional development accessible right
        in their own neighborhood.
      </p>
      <div className="flex mb-5 justify-center items-center">
     <img src="https://i.ibb.co.com/1JZZcNZH/image.png" alt="" className="h-100 w-150" />
      </div>
 
      {/* what we offer */}
      <div className=" flex-col lg:flex-row items-center bg-gray-50  rounded-xl   animate__animated animate__fadeInRight">
        <div className="space-y-3">
          <h1 className="text-4xl text-sky-800 mt-5 text-center font-bold mb-4 animate__animated animate__fadeInDown">
            What We Offer
          </h1>
          <h3 className="text-gray-600 mb-12 text-center animate__animated animate__fadeInUp max-w-3xl mx-auto">
            SkillSwap makes it easy to find and share a wide variety of
            practical, local expertise
          </h3>
        </div>
        <div className="space-y-3 mt-3 lg:flex  lg:justify-evenly">
          <div className="max-w-6xl mx-auto text-center ">
            <div className="grid md:grid-cols-3 lg:flex gap-10">
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInLeft">
                <h3 className="text-xl font-semibold mb-2 text-sky-800">
                  Diverse Skill Trading
                </h3>
                <p className="text-gray-500 text-center">
                  Trade skills locally from coding and languages to music (like
                  guitar lessons) and yoga training.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInUp">
                <h3 className="text-xl font-semibold mb-2 text-sky-800">
                  Local Connections
                </h3>
                <p className="text-gray-500 text-center">
                  We focus on connecting hundreds of local learners <br /> and experts
                  every day, fostering strong community bonds.
                </p>
              </div>
        
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
                <h3 className="text-xl font-semibold mb-2 text-sky-800">
                  Trust and Growth
                </h3>
                <p className="text-gray-500 text-center">
                  Our space allows users to rate experiences, ensuring quality <br />
                  and trust within the community, so everyone can learn, teach,
                  and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col-reverse lg:flex-row bg-gray-50  items-center m-3 rounded-2xl">
        <img
          src="https://i.ibb.co.com/mCkJrzj3/image.png"
          alt=""
          className="w-200 h-100 mt-5"
        />
        <div>
          <h1 className="text-4xl mt-5  text-center text-sky-800  font-bold mb-4 animate__animated animate__fadeInDown">
            Our Mission
          </h1>
          <p className=" italic ml-5">
            Our mission is to build a thriving local skill-sharing community
            where knowledge flows freely. We aim to empower everyone to both
            discover local experts and trade their own skills, whether they are
            in coding, music, languages, fitness, or any other discipline
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
