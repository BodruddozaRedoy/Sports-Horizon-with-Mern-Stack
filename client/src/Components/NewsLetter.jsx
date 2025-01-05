import React from 'react';
import MainBtn from './MainBtn';

const NewsLetter = () => {
    return (
        <div className='flex items-center border-red-800 border-2 gap-5 flex-col justify-center bg-slate-100 md:p-20 rounded-md my-10 mx-auto md:w-[70%] lg:w-[50%]'>
            <h1 className='text-4xl font-bold'>Subscribe to our newsletter</h1>
            <p className='text-gray-400'>Want to get special offers before they run out? Subscribe to our email to get exclusive discounts and offers.</p>
            <div className='flex gap-4'>
            <input type="text" name="" id="" className='py-3 px-5 bg-white rounded-md' placeholder='Enter your email' />
            <button className='btn bg-red-700 text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;