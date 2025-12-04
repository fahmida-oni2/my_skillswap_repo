import React from 'react';
import { Link } from 'react-router';

const ErrorSkill = () => {
    return (
        <div className='flex flex-col min-h-screen  space-y-3 items-center justify-center'>
    
            <h1 className='text-center font-extrabold text-4xl text-[#001931]'>OPPS!! Skills NOT FOUND</h1>
            <p className='text-center  text-[#001931]'>The Skill you are requesting is not found on our system.  please try another skills</p>
            <div className='flex items-center justify-center'>
             <Link to='/' className='btn rounded-2xl text-white bg-sky-800'>Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorSkill;