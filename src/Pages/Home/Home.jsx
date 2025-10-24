import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useSkillData from '../../Hooks/useSkillData';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router';
import skillImg from '../../assets/soft-skills-training.png'
import TopRated from '../../Components/TopRated/TopRated';
import 'animate.css';
import Loading from '../../Components/Loading/Loading';
const Home = () => {
    const {skillData,loading,error} = useSkillData()
    const featuredSkill = skillData.slice(0,6)
    const categories = [...new Set(skillData.map(skill => skill.category))];
     const getTopRatedSkills = () => {
    return featuredSkill.filter(skill => skill.rating > 4.5);
  };
     if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return <p>Error loading skill data.</p>
    }
    return (
        <div className='mt-20 lg:mt-0'>
          <header>
 <          Banner></Banner>
          </header>
           
            <main className='w-11/12 mx-auto my-3   lg:grid  lg:grid-cols-12 gap-5'>
               <section className='mt-10 space-y-3 flex-1 col-span-8 max-w-screen mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 border border-gray-300 '>
                  <div  className='' >
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2 animate__animated animate__tada'>Popular Skills</h1>
                    <p className='text-[#627382] text-center animate__animated animate__tada '>Explore All Popular Skills developed by us</p>
                </div>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {
                    featuredSkill.map(data => (
                        <Card key={data.skillId} data={data}></Card>
                    ))
                }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn w-3xs  text-white  bg-blue-800 rounded-xl hover:bg-indigo-300' to='/skills'>Show All</Link>
                </div>
                
            </section>
            
            <aside className='col-span-4 mt-10 p-5 lg:p-0 space-y-10 grid grid-cols-1 sticky top-0 h-fit border border-gray-300 '>
            <div>
                <div className='m-5 '>
                   <img className='h-60' src={skillImg} alt="" /> 
              </div>
              <div> 
                    <h1 className='text-3xl font-semibold text-center mb-3'>Categories</h1>
                  <div className=''>
                      <ul className='space-y-2 ml-10'> {
                   categories.length > 0 ? (
                    categories.map((category, index) => (
                      <li key={index} className='text-2xl  hover:text-blue-600 transition-colors'>
                        <Link to={`/skills?category=${category}`} className='block'>
                        {category}</Link>
                      </li>
                    ))
                  ) : (
                    <p>Loading categories...</p>
                  )
                }
              </ul>
                  </div>
              </div>
            </div>
              <div className='mt-10 p-10 space-y-3 flex-1 col-span-9 max-w-screen mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 border border-gray-300 ' >
               <h1 className="text-[#001931] text-3xl font-bold text-center py-2">
                      Top Rated Providers
                   </h1>
                   <p className="text-[#627382] text-center mb-8">
                     Meet our highest-rated skill providers trusted by learners worldwide.
                   </p>
               <TopRated top={getTopRatedSkills()}></TopRated>
            </div>
             
            </aside>
            
            </main>

            <footer className=' w-11/12 mx-auto my-3 bg-black'>
            <div>
              <section className="how-it-works py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
      How It Works
    </h2>
    <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp">
      Learn, teach, and trade skills easily with SkillSwap.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInLeft">
        <img src="https://i.postimg.cc/Y9YDB8WH/glass.jpg" alt="" className="h-20 w-20 rounded-full mb-4"/>
        <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
        <p className="text-gray-500 text-center">
          Explore local skills from coding and languages to music and yoga.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInUp">
        <img src="https://i.postimg.cc/wvjMS4PQ/provider.png" alt="" className="h-20 w-20 rounded-full mb-4"/>
        <h3 className="text-xl font-semibold mb-2">Connect with Providers</h3>
        <p className="text-gray-500 text-center">
          Message or book your chosen skill provider directly in the app.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
        <img src="https://i.postimg.cc/Hn5r2cRK/learn.jpg" alt="Learn" className="h-20 w-20 rounded-full mb-4"/>
        <h3 className="text-xl font-semibold mb-2">Learn & Trade</h3>
        <p className="text-gray-500 text-center">
          Attend sessions, rate experiences, and share your knowledge with the community.
        </p>
      </div>
    </div>
  </div>
</section>

            </div>
               <div className=' text-white space-y-7 lg:flex justify-around'>
                  <div className='pt-5'>
                  <h2 className='text-2xl text-center font-semibold '>Subscribe to our Newsletter</h2>
                  <p className='text-center'>Subscribe to get our best new offering skills straight into your inbox!</p>
                  </div>
                <div className=' gap-1 pt-5 lg:flex justify-center items-center'>
                     <input className='bg-base-300 text-black text-center h-11 m-2 w-80 ' type='email' placeholder='Your Email Address'>
                 </input>
                 <button className='btn bg-yellow-600 text-white h-12 border-0 w-50 ml-2  hover:bg-amber-400'>Subscribe</button>
                </div>

              </div>
            </footer>

          
        </div>
    );
};

export default Home;