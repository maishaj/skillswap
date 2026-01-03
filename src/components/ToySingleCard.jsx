import React from 'react';
import { Link } from 'react-router';
import starImg from '../assets/star.png';

const ToySingleCard = ({toy}) => {


    return (
        <div className='p-4 bg-[#f8f8f8] rounded-xl shadow-lg'>
           <img className='w-full h-[150px] object-cover rounded-lg' src={toy.image} alt="" />
           <div className='h-[100px] space-y-1'>
                <p className='text-[16px] font-bold h-[50px]'>{toy.skillName}</p>
                <div className='flex justify-between'>
                    <p className='flex gap-1 font-medium'>
                        {toy.rating}
                        <img className='w-5 h-5' src={starImg} alt="" />
                        <img className='w-5 h-5' src={starImg} alt="" />
                        <img className='w-5 h-5' src={starImg} alt="" />
                        <img className='w-5 h-5' src={starImg} alt="" />
                    </p>
                </div>
                <p className='font-medium'>Tk {toy.price}</p>
           </div>
           <div className='flex justify-center'>
           <Link to={`/skill-details/${toy.skillId}`} className='btn btn-secondary text-white mt-3'>View More</Link>
           </div>
        </div>
    );
};

export default ToySingleCard;