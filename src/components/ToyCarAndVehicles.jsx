import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ToyCarAndVehiclesSingle from './ToyCarAndVehiclesSingle';

const ToyCarAndVehicles = () => {
    
    const {providerId}=useParams();
    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch("/skill.json")
        .then((res)=>res.json())
        .then((data)=>{
            setToys(data);
        });
    },[])


    return (
        <div className='w-11/12 mx-auto mb-20'>
           <h1 className='font-bold text-2xl text-center mt-5 mb-5'>Top Rated Providers</h1>
           <div className='grid grid-cols-2 md:grid-cols-6 gap-8'>
               {
                toys.slice(0,6).map((toy)=><ToyCarAndVehiclesSingle key={providerId} toy={toy}></ToyCarAndVehiclesSingle>)
               }
           </div>
        </div>
    );
};

export default ToyCarAndVehicles;