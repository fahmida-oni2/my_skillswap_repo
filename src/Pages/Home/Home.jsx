import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useSkillData from '../../Hooks/useSkillData';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router';
import skillImg from '../../assets/soft-skills-training.png'
const Home = () => {
    const {skillData,loading,error} = useSkillData()
    const featuredSkill = skillData.slice(0,6)
    const categories = [...new Set(skillData.map(skill => skill.category))];
    return (
        <div>
            <Banner></Banner>
            <main className='w-11/12 mx-auto my-3 *:border lg:grid  lg:grid-cols-12 gap-5'>
               <section className='mt-10 space-y-3 flex-1 col-span-9 max-w-screen mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 '>
                  <div>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Popular Skills</h1>
                    <p className='text-[#627382] text-center'>Explore All Popular Skills developed by us</p>
                </div>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                    featuredSkill.map(data => (
                        <Card key={data.skillId} data={data}></Card>
                    ))
                }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn w-3xs  text-white  bg-blue-800 rounded-xl' to='/skills'>Show All</Link>
                </div>
            </section>
            <aside className='col-span-3 mt-10 p-5 lg:p-0 space-y-10 grid grid-cols-1 sticky top-0 h-fit'>
              <div>
                   <img className='w-full h-[300px] p-5' src={skillImg} alt="" /> 
              </div>
              <div>
                    <h1 className='text-3xl font-semibold text-center mb-3'>Categories</h1>
                    <ul className='space-y-2 items-center ml-5'> {
                   categories.length > 0 ? (
                    categories.map((category, index) => (
                      <li key={index} className='text-2xl  hover:text-blue-600 transition-colors'>
                        <Link to={`/skills?category=${category}`} className='block'> 
                          {category} {category.skillId}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>Loading categories...</p>
                  )
                }
              </ul>
              </div>
              <div className='bg-black text-white p-5 mt-10 space-y-7'>
                  <h1 className='text-3xl text-center font-bold '>Newsletter</h1>
                  <h2 className='text-2xl text-center font-semibold pt-10'>Subscribe to our Newsletter</h2>
                  <p className='text-center'>Subscribe to get our best new offering skills straight into your inbox!</p>
                <div className='grid gap-10'>
                     <input className='bg-base-200 text-black text-center h-15' type='email' placeholder='Your Email Address'>
                 </input>
                 <button className='btn bg-orange-600 text-white h-12'>Subscribe</button>
                </div>

              </div>
            </aside>
            </main>
          
        </div>
    );
};

export default Home;