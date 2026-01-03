import React from 'react';
import starImg from '../assets/star.png';

const ToyCarAndVehiclesSingle = ({toy}) => {
    return (
        <div>
          <div className=''>
            <img className='w-[190px] h-[150px] object-cover rounded-lg mb-3' src={toy.image} alt="" />
            <div className='h-[100px] space-y-1'>
                <p className='font-bold text-[20px]'>{toy.name}</p>
                <p className='font-medium text-[16px]'>{toy.email}</p>
                <p className='font-medium text-[16px]'>{toy.skill}</p>
                <p className='flex gap-1 font-semibold'>{toy.rating}
                  <img className='w-5 h-5' src={starImg} alt="" />
                  <img className='w-5 h-5' src={starImg} alt="" />
                  <img className='w-5 h-5' src={starImg} alt="" />
                  <img className='w-5 h-5' src={starImg} alt="" />
                </p>
            </div>
          </div>
        </div>
    );
};

export default ToyCarAndVehiclesSingle;