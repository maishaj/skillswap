import React from 'react';
import starImg from '../assets/star.png';

const ToyCarAndVehiclesSingle = ({ toy }) => {
  return (
    <div className='bg-[#f8f8f8] p-4 rounded-lg flex flex-col justify-between'>
      <img
        className='w-full h-[150px] object-cover rounded-lg mb-3'
        src={toy.image}
        alt=""
      />

      <div className='space-y-2 mb-3'>
        <p className='font-bold text-[20px]'>{toy.name}</p>

        <p className='font-medium text-[14px] break-all'>
          {toy.email}
        </p>

        <p className='font-medium text-[14px]'>{toy.skill}</p>

        <div className='flex items-center gap-1 font-semibold'>
          {toy.rating}
          <img className='w-5 h-5' src={starImg} alt="" />
          <img className='w-5 h-5' src={starImg} alt="" />
          <img className='w-5 h-5' src={starImg} alt="" />
          <img className='w-5 h-5' src={starImg} alt="" />
        </div>
      </div>
    </div>
  );
};


export default ToyCarAndVehiclesSingle;