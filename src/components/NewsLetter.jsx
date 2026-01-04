import React from 'react';

const NewsLetter = () => {
    const handleSubmit=(e)=>{
          e.preventDefault();
          e.target.reset();
        }
    return (
        <div className='mb-30 bg-[#fafafa] p-40 w-11/12 mx-auto shadow-xl rounded-lg flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-3xl text-center mb-5'>Subscribe Our Newsletter</h1>
            <form onSubmit={handleSubmit} className='m-5 space-y-3 flex flex-col'>
                <input className='p-2 border-2 border-black rounded-lg' type="text" placeholder='Your name' />
                <input className='p-2 border-2 border-black rounded-lg' type="email" placeholder='Your email' />
                <button className='btn btn-secondary text-white' type='submit'>Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;