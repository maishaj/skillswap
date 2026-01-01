import React from 'react';
import { Link } from 'react-router';

const ToySingleCard = ({toy}) => {


    return (
        <div className=''>
           <img className='w-[190px] h-[150px] object-cover rounded-lg' src={toy.image} alt="" />
           <div className='h-[100px]'>
                <p className='text-[16px]'>{toy.skillName}</p>
                <div className='flex justify-between'>
                    <p>{toy.rating}</p>
                    <p>Tk {toy.price}</p>
                </div>
           </div>
           <Link to={`/skill-details/${toy.skillId}`} className='btn btn-secondary text-white'>View More</Link>
        </div>
    );
};

export default ToySingleCard;