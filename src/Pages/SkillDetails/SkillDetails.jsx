import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSkillData from '../../Hooks/useSkillData';
import ErrorSkill from '../../Components/ErrorSkill/ErrorSkill';
import { toast, ToastContainer } from 'react-toastify';

const SkillDetails = () => {
    const {skillId} = useParams()
    const {skillData,loading,error} = useSkillData()
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isEnrolled, setEnrolled] = useState(false);
     useEffect(() => {
        const checkEnrolledStatus = () => {
            if (!skillId || !skillData) return;
            const currentData = skillData.find(d => d.id === skillId);
            if (!currentData) return;
            const enrolledSkills = JSON.parse(localStorage.getItem('enroll') || '[]');
            const skillFound = enrolledSkills.some(skill =>skill.id === currentData.id);
            setEnrolled(skillFound);
        };
        checkEnrolledStatus();
    }, [skillId, skillData]);
     if (loading) {
        return <p>Loading......</p>
    }
    if (error) {
        return <p>Error loading skill data.</p>
    }
    const data = skillData.find (d => d.id === skillId)
    console.log(data)
    if (!data) {
        return <ErrorSkill></ErrorSkill>;
    }
    const {skillName,image,providerName,slotsAvailable,rating,description,providerEmail,price,category}=data
    //  const handleEnrolled = () => {
    //     const existingApp =JSON.parse(localStorage.getItem('enroll')||'[]')
    //     let updatedApp = []
    //     if (existingApp){
    //         updatedApp = [...existingApp, data]
    //     }
    //     else{
    //         updatedApp.push(data)
    //     }
    //     localStorage.setItem('enroll',JSON.stringify(updatedApp))
    //     setEnrolled(true);
    //       toast.success(`Enrolled successfully`);
           
    // }

    const handleBookSession = (e) => {
        e.preventDefault();
        toast.success(`Session has been booked for you.`);
        setUserName('');
        setUserEmail('');
    }
    return ( 
        <div className='flex flex-col min-h-screen bg-base-200'>
            <section>
                <div className='lg:flex grid grid-cols-1 gap-5 m-10  items-center  '>
                <div className=' mr-10'>
                    <img className='lg:w-full md:w-[200px] w-[250px] mx-auto lg:object-cover shadow-xl  border-gray-500   ' src={image} alt="" />
                </div>
                <div className='space-y-3 p-5'> 
                    <h1 className='font-extrabold text-3xl text-center'>{skillName}</h1>
                    <p className='font-bold text-2xl text-center'>{category} Developed by <span className='text-[#632EE3]'>{providerName}</span></p>
                    <p className='font-bold text-2xl text-center'>Contact Email:<span className='text-[#632EE3]'>{providerEmail}</span></p>
                    <div className='border-b border-solid border-b-gray-300 mt-5'>

                    </div>
                    <div className='flex gap-2 m-5 justify-center items-center'>
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
                            <h1  className='font-extrabold text-2xl text-center'>{description}</h1>
                        </div>
                    
                </div>
            </div>
            <div className='border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7'>
            </div>
           
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Book Your Session</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleBookSession}>
            <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" required value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <button style={{backgroundColor: isEnrolled ? 'gray' : '#28a745'}} className='btn bg-[#00D390] text-white w-full'  disabled={isEnrolled} > {isEnrolled ? 'Enrolled' : `Enroll Now `}</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
            </section>

               <ToastContainer />
        </div>
    );
};

export default SkillDetails;