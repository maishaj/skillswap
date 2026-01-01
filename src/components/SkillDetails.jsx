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
    <div className='flex flex-col items-center justify-center space-y-5 mt-20 mb-20 '>
       <img className='w-1/2 rounded-xl' src={skill.image} alt="" />
       <h1 className='font-bold text-2xl'>{skill.skillName}</h1>
       <p className='text-[16px] text-justify'>{skill.details}</p>
       <Link to="/" className='btn btn-secondary'>Back to Home</Link>
    </div>
  );
};

export default SkillDetails;
