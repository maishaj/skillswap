import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ToySingleCard from './ToySingleCard';

const ToyCard = () => {

    const {skillId}=useParams();
    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch("/toys.json")
        .then((res)=>res.json())
        .then((data)=>{
            setToys(data);
        });
    },[])

    return (
        <div className='w-11/12 mx-auto mb-30 mt-30'>
           <h1 className='font-bold text-2xl text-center mt-5 mb-5'>Popular Skills</h1>
           <div className='grid grid-cols-2 md:grid-cols-6 gap-8'>
               {
                toys.slice(0,6).map((toy)=><ToySingleCard key={skillId} toy={toy}></ToySingleCard>)
               }
           </div>
        </div>
    );
};

export default ToyCard;