import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa6';
import { Link } from 'react-router';

const Card = ({data}) => {
    const {image,skillName,rating,price,skillId,shortDescription}=data
    return (
  <div className="card bg-base-100 border-gray-300 shadow-xl  hover:scale-105 transition ease-in-out m-5 ">
  <figure className='h-48 overflow-hidden'>
    <img
      src={image}
      alt="Skills" 
      className='lg:w-full md:w-[200px] w-[450px] lg:object-cover p-2'/>
  </figure>
  <div className="card-body space-y-3">
    <h2 className="text-2xl font-bold text-center">{skillName}</h2>
    <p className='italic text-center'>{shortDescription}</p>
   <div className='flex justify-between'>
    <button className='flex h-10 w-20 btn btn-outline gap-2 border-gray-200 text-green-500 bg-base-300'>
       <FaStar></FaStar>
       {rating}
    </button>
    <button  className='flex h-10 w-20 btn btn-outline gap-2 border-gray-200 text-orange-500 bg-base-300'>
        {price}
        <FaDollarSign></FaDollarSign>
    </button>
   </div>
   <Link to={`/skills/${skillId}`}  className='flex h-10 w-full btn rounded-2xl  gap-2 bg-sky-800 text-white'>
        See More
    </Link>
  </div>
</div>
    );
};

export default Card;