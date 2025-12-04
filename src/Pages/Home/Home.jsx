import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import useSkillData from "../../Hooks/useSkillData";
import Card from "../../Components/Card/Card";
import { Link } from "react-router";
import skillImg from "../../assets/soft-skills-training.png";
import TopRated from "../../Components/TopRated/TopRated";
import "animate.css";
import Loading from "../../Components/Loading/Loading";
const Home = () => {
  const { skillData, loading, error } = useSkillData();
  const [email, setEmail] = useState("");
  const featuredSkill = skillData.slice(0, 6);
  const categories = [...new Set(skillData.map((skill) => skill.category))];
  const getTopRatedSkills = () => {
    return featuredSkill.filter((skill) => skill.rating > 4.5);
  };
  const handleSubscription = () => {
    setEmail("");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <p>Error loading skill data.</p>;
  }
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <main className="my-3 lg:grid lg:grid-cols-12 gap-5 max-w-8xl mx-auto px-5">
        <section className="mt-10 space-y-3 flex-1 col-span-9  px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 border border-gray-300 ">
          <div className="">
            <h1 className="text-sky-800 text-3xl font-bold text-center py-2 animate__animated animate__tada">
              Popular Skills
            </h1>
            <p className="text-[#627382] text-center animate__animated animate__tada ">
              Explore All Popular Skills developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSkill.map((data) => (
              <Card key={data.skillId} data={data}></Card>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link
              className="btn w-3xs  text-white  bg-sky-800 rounded-2xl hover:bg-indigo-300"
              to="/skills"
            >
              Show All
            </Link>
          </div>
          <section className=" py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center px-4">
              <h2 className="text-4xl text-sky-800 font-bold mb-4 animate__animated animate__fadeInDown">
                How It Works
              </h2>
              <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp">
                Learn, teach, and trade skills easily with SkillSwap.
              </p>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInLeft">
                  <img
                    src="https://i.postimg.cc/Y9YDB8WH/glass.jpg"
                    alt=""
                    className="h-20 w-20 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-sky-800">
                    Browse Skills
                  </h3>
                  <p className="text-gray-500 text-center">
                    Explore local skills from coding and languages to music and
                    yoga.
                  </p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInUp">
                  <img
                    src="https://i.postimg.cc/wvjMS4PQ/provider.png"
                    alt=""
                    className="h-20 w-20 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-sky-800">
                    Connect with Providers
                  </h3>
                  <p className="text-gray-500 text-center">
                    Message or book your chosen skill provider directly in the
                    app.
                  </p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
                  <img
                    src="https://i.postimg.cc/Hn5r2cRK/learn.jpg"
                    alt="Learn"
                    className="h-20 w-20 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-sky-800">
                    Learn & Trade
                  </h3>
                  <p className="text-gray-500 text-center">
                    Attend sessions, rate experiences, and share your knowledge
                    with the community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <aside className="col-span-3 mt-10 p-5 lg:p-0 space-y-10 grid grid-cols-1 sticky top-0 h-fit border border-gray-300 ">
          <div>
            <div className="m-5 ">
              <img className="h-60" src={skillImg} alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-sky-800 text-center mb-3">
                Categories
              </h1>
              <div className="card-body shadow m-3">
                <ul className="space-y-2 ml-10">
                  {categories.length > 0 ? (
                    categories.map((category, index) => (
                      <li
                        key={index}
                        className="text-2xl  hover:text-blue-600 transition-colors"
                      >
                        <Link
                          to={`/skills?category=${category}`}
                          className="block"
                        >
                          {category}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>Loading categories...</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className=" card-body shadow mb-3 ml-3 mr-3 space-y-3 flex-1 col-span-9 max-w-screen mx-auto  px-4 md:px-8  py-4 md:py-8  border border-gray-300 ">
            <h1 className="text-sky-800 text-3xl font-bold text-center py-2">
              Top Rated Providers
            </h1>
            <p className="text-[#627382] text-center mb-3">
              Meet our highest-rated skill providers trusted by learners
              worldwide.
            </p>
            <TopRated top={getTopRatedSkills()}></TopRated>
          </div>
        </aside>
      </main>

      <footer className=" max-w-8xl mx-auto ml-5 mr-5 my-3 bg-sky-800">
        <div className=" text-white space-y-7 lg:flex  justify-around items-end">
          <div className="pt-5">
            <h2 className="text-2xl text-center font-semibold ">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center">
              Subscribe to get our best new offering skills straight into your
              inbox!
            </p>
          </div>

          <div className="join flex justify-center pb-5 ">
            <div >
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  className="text-black"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <button
              className="btn btn-neutral join-item hover:bg-indigo-300"
              onClick={handleSubscription}
             
            >
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
