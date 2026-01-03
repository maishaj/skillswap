import React from 'react';
import worksImg from '../assets/HowItWorks.jpg';
import { PiNumberSquareOneLight } from "react-icons/pi";

const HowItWorks = () => {
    return (
        <div className='mb-30'>
            <h1 className='font-bold text-3xl text-center mb-8'>How it works</h1>
            <div className='flex flex-col md:flex-row gap-5 w-11/12 mx-auto'>
                <img className='w-full md:5/12 rounded-lg' src={worksImg} alt="" />
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-2xl mb-3'>Sign Up & Create a Profile</h1>
                    <p className='text-[20px] mb-3'>Create a free account and set up your profile. Add the skills you can offer or the skills you want to learn.</p>
                    <h1 className='font-semibold text-2xl mb-3'>Browse or Search Skills</h1>
                    <p className='text-[20px] mb-3'>Explore available skills by category or search for what you need. View provider ratings, prices, and available slots.</p>
                    <h1 className='font-semibold text-2xl mb-3'>Book or Exchange a Skill</h1>
                    <p className='text-[20px]'>Book a session or exchange your skill with a provider. Choose a suitable time and confirm your request easily.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;