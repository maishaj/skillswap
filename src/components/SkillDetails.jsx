import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const SkillDetails = () => {

  const { skillId } = useParams();
  const [skill,setSkill]=useState([]);

  useEffect(()=>{
    fetch("/toys.json")
    .then((res)=>res.json())
    .then((data)=>{
      const regSkill = data.find((sk) =>sk.skillId==(skillId));
      setSkill(regSkill);
  });
  },[skillId]);

  return (
    <div className='w-11/12 flex flex-col md:flex-row justify-center items-center gap-20 space-y-5 mt-20 mb-20'>
       <img className='w-full md:w-1/2 rounded-xl flex gap-3' src={skill.image} alt="" />
       <div className=''>
          <h1 className='font-bold text-2xl mb-3'>{skill.skillName}</h1>
          <div>
              <p className='font-semibold'>Category</p>
              <p className='mb-2'>{skill.category}</p>
              <p className='font-semibold'>Provider</p>
              <p className='mb-2'>{skill.providerName}</p>
              <p className='font-semibold'>Price</p>
              <p className='mb-2'>TK {skill.price}</p>
              <p className='font-semibold'>Available Slots</p>
              <p className='mb-2'>{skill.slotsAvailable}</p>
              <p className='text-[16px] text-justify'>{skill.details}</p>
          </div>
       </div>
    </div>
  );
};

export default SkillDetails;
