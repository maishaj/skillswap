import React from 'react';

const ToyCarAndVehiclesSingle = ({toy}) => {
    return (
        <div>
          <div className=''>
            <img className='w-[190px] h-[150px] object-cover rounded-lg' src={toy.image} alt="" />
            <div className='h-[100px]'>
                <p className='text-[16px]'>{toy.name}</p>
                <p>{toy.email}</p>
                <p>{toy.skill}</p>
                <p>{toy.rating}</p>
            </div>
          </div>
        </div>
    );
};

export default ToyCarAndVehiclesSingle;