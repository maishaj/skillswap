import React from 'react';

const NewsLetter = () => {
    const handleSubmit=(e)=>{
          e.preventDefault();
          e.target.reset();
        }
    return (
        <div className='mb-40'>
            <h1 className='font-bold text-3xl text-center mb-5'>Subscribe Our Newsletter</h1>
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row justify-center items-center m-5 gap-3'>
                <input className='p-2 border-2 border-black' type="text" placeholder='Your name' />
                <input className='p-2 border-2 border-black' type="email" placeholder='Your email' />
                <button className='btn btn-secondary text-white' type='submit'>Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;