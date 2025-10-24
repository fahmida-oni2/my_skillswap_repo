import React, { useEffect, useState } from 'react';
import useSkillData from '../../Hooks/useSkillData';
import ErrorSkill from '../../Components/ErrorSkill/ErrorSkill';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import { useLocation } from 'react-router';

const Skills = () => {
    const {skillData} = useSkillData()
    const [search, setSearch] = useState('')
     const [loading, setLoading] = useState(false); 
  const [filteredSkills, setFilteredSkills] = useState([]);
   const location = useLocation();
  let category = null;

  // Extract category using includes + split
  if (location.search.includes('category=')) {
    category = location.search.split('category=')[1];
  }
  useEffect(() => {
    if (!skillData.length) return;
    setLoading(true);

    const timer = setTimeout(() => {
      const baseData = category
        ? skillData.filter(skill => skill.category === category)
        : skillData;

      const results = search.trim()
        ? baseData.filter(skill =>
            skill.skillName.toLowerCase().includes(search.toLowerCase())
          )
        : baseData;

      setFilteredSkills(results);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [skillData, search, category]);

const showNoResult = filteredSkills.length === 0 && search.trim().length > 0;

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='pt-10'>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Our All Offered Skills</h1>
                    <p className='text-[#627382] text-center'>Explore All Skills </p>
         </div>
           <div className='lg:flex justify-between items-center mt-5 pl-5 pr-5 mb-5 '>
             <div className='font-bold text-2xl pb-5 lg:pb-0'> 
                ({filteredSkills.length}) Skills Found
            </div>
                <label className="input gap-0">
  <span className="label"></span>
  <input value={search} onChange={e=> setSearch(e.target.value)} type="search" placeholder="Search Skills" />
</label>
           </div>
           {loading ? (
        <div className='flex justify-center items-center p-20'>
          <Loading></Loading>
        </div>
      ) : showNoResult ? (
                <div className='flex items-center justify-center p-20'>
                    <ErrorSkill searchTerm={search}></ErrorSkill>
                </div>
            ) : (
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                    filteredSkills.map(data => (
                        <Card key={data.skillId} data={data}></Card>
                    ))}
                </div>
            )}
        </div>
    );

};

export default Skills;