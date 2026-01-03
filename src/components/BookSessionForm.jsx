import React from 'react';
import { toast } from 'react-toastify';

const BookSessionForm = () => {

    const handleSubmit=(e)=>{
      e.preventDefault();
      toast.success("Booking submitted successfully!");
      e.target.reset();
    }

    return (
        <div className='w-full md:w-1/4 mx-auto mb-25 shadow-lg p-10'>
             <h1 className='font-bold text-2xl text-center mt-10 mb-15'>Book Session Now</h1>
             <form onSubmit={handleSubmit} className='flex flex-col justify-center mx-auto space-y-3'>
                <label className='font-medium text-xl'>Name</label>
                <input className='border border-black p-1 rounded-lg' type="text" placeholder='Your name' required />
                <label className='font-medium text-xl'>Email</label>
                <input className='border border-black p-1 rounded-lg' type="email" placeholder='Your email' required />
                <button type='submit' className='btn btn-secondary rounded-lg w-1/2 mx-auto'>Book Now!</button>
             </form>            
        </div>
    );
};

export default BookSessionForm;