import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const BookSessionForm = () => {

    const handleSubmit=(e)=>{
      e.preventDefault();
      toast.success("Booking submitted successfully!");
      e.target.reset();
    }

    return (
        <div className='mb-25'>
             <h1 className='font-bold text-2xl text-center mt-10 mb-15'>Book Session Now</h1>
             <form onSubmit={handleSubmit} className='flex flex-col justify-center w-1/4 mx-auto space-y-3'>
                <label className='font-medium text-xl'>Name</label>
                <input className='border border-black p-1 rounded-lg' type="text" placeholder='Your name' required />
                <label className='font-medium text-xl'>Email</label>
                <input className='border border-black p-1 rounded-lg' type="email" placeholder='Your email' required />
                <button type='submit' className='btn btn-secondary rounded-lg w-1/2 mx-auto'>Submit</button>
             </form>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookSessionForm;