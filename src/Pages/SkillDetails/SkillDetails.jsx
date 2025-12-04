import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useSkillData from '../../Hooks/useSkillData';
import ErrorSkill from '../../Components/ErrorSkill/ErrorSkill';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Provider/AuthProvider';

const SkillDetails = () => {
    const {skillId} = useParams()
    const {user} = use(AuthContext)
    const {skillData,loading,error} = useSkillData()
     const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isEnrolled, setEnrolled] = useState(false);
     useEffect(() => {
        const checkEnrolledStatus = () => {
            if (!skillId || !skillData) return;
            const currentData = skillData.find(d => String(d.skillId) === skillId);
            if (!currentData) return;
            const enrolledSkills = JSON.parse(localStorage.getItem('enroll') || '[]');
            const skillFound = enrolledSkills.some(skill => String(skill.skillId) === String(currentData.skillId));
            setEnrolled(skillFound);
        };
        checkEnrolledStatus();
    }, [skillId, skillData]);

    
     if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return <p>Error loading skill data.</p>
    }
const data = skillData.find(d => String(d.skillId) === String(skillId));
  //  console.log(data)
    
    if (!data) {
        return <ErrorSkill></ErrorSkill>;
    }
    const {skillName,image,providerName,slotsAvailable,rating,longDescription,providerEmail,price,category}=data

    const handleBookSession = (e) => {
        e.preventDefault();
        const existingApp =JSON.parse(localStorage.getItem('enroll')||'[]')
        const isAlreadyEnrolled = existingApp.some(skill => String(skill.skillId) === skillId);
        if (!isAlreadyEnrolled) {
            const updatedApp = [...existingApp, data];
            localStorage.setItem('enroll', JSON.stringify(updatedApp));
            setEnrolled(true);
        }
        toast.success(`Session has been booked for you.`);
        setUserName('');
        setUserEmail('');
    }

    return ( 
        <div className='flex flex-col min-h-screen bg-base-200'>
            <section>
                <div className='lg:flex grid grid-cols-1 gap-5 m-10  items-center  '>
                <div className=' mr-10'>
                    <img className='lg:w-400 md:w-[200px] w-[250px] mx-auto lg:object-cover shadow-xl  border-gray-500   ' src={image} alt="" />
                </div>
                <div className='space-y-3 p-5'> 
                    <h1 className='font-extrabold text-3xl text-center'>{skillName}</h1>
                    <p className='font-bold text-2xl text-center'>{category} </p>
                        <p className='font-bold text-2xl text-center'>Developed by <span className='text-[#632EE3]'>{providerName}</span>
                            </p> 
                    <p className='font-bold text-2xl text-center'>Contact Email:<span className='text-[#632EE3]'>{providerEmail}</span></p>
                    <div className='border-b border-solid border-b-gray-300 mt-5'>

                    </div>
                    <div className='lg:flex gap-2 m-5 justify-center items-center'>
                        <div className='mr-10 flex gap-2 justify-center items-center'>
                            <p className='font-bold text-2xl text-center'>Available Slot:</p>
                            <h1 className='font-extrabold text-2xl text-center'>{slotsAvailable}</h1>
                        </div>
                        <div className='mr-10 flex gap-2 justify-center items-center'>
                            <p className='font-bold text-2xl text-center'> Ratings:</p>
                            <h1  className='font-extrabold text-2xl text-center'>{rating}</h1>
                        </div>
                        <div className='mr-10 flex gap-2 justify-center items-center'>
                            <p className='font-bold text-2xl text-center'> Price:</p>
                            <h1  className='font-extrabold text-2xl text-center'>{price}</h1>
                        </div>
                       
                    </div>
                     <div className='mr-10'>
                            <p className='font-bold text-center text-3xl mb-3 border-b-2 border-solid border-b-gray-400'>Description</p>
                            <h1  className='font-semibold text-2xl text-center italic'>{longDescription}</h1>
                        </div>
                    
                </div>
              
            </div>
            <div className='flex justify-center items-center mb-5'>
                  <Link to='/skills' className='btn rounded-2xl text-white bg-sky-800 w-50'>Go Back</Link>
              </div>
            <div className='border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7'>
            </div>


 <div className="hero bg-base-200 "></div>   

    {
        user && <>
               
 <div className='flex justify-center'>
     <div className="hero-content flex-col lg:flex">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-sky-800">Book Your Session</h1>
    </div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleBookSession}>
            <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" required value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <button  type="submit" style={{backgroundColor: isEnrolled ? 'gray' : 'primary'}} className='btn bg-sky-800 rounded-2xl text-white w-full'  disabled={isEnrolled} > {isEnrolled ? 'Enrolled' : `Enroll Now `}</button>
        </fieldset>
        </form>
      </div>
    </div>
      </div>
 </div>
        </>
    }
   



   
            </section>
               <Toaster></Toaster>
        </div>
    );
};

export default SkillDetails;