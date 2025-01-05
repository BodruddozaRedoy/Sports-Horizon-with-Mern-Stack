import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaTruckFast } from 'react-icons/fa6';
import { GiCash } from 'react-icons/gi';
import { MdContactSupport, MdOutlinePayments } from 'react-icons/md';

const Support = () => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 justify-center items-center m-5 gap-5 md:m-0 md:py-10 md:gap-10 '>
            <Slide>
            <div className='flex flex-col md:flex-row items-center gap-3 p-5 shadow-lg rounded-xl bg-white'>
                <FaTruckFast className='text-6xl text-main'/>
                <div className='space-y-2'>
                    <h1 className='text-xl md:text-3xl font-semibold'>Free Shipping</h1>
                    <p className='text-gray'>Order Over $300</p>
                </div>
            </div>
            </Slide>
            <Slide>
            <div className='flex flex-col md:flex-row items-center gap-3 p-5 shadow-lg rounded-xl bg-white'>
                <MdOutlinePayments className='text-6xl text-main'/>
                <div className='space-y-2'>
                    <h1 className='text-xl md:text-3xl font-semibold'>Quick Payment</h1>
                    <p className='text-gray'>100% Secure</p>
                </div>
            </div>
            </Slide>
            <Slide>
            <div className='flex flex-col md:flex-row items-center gap-3 p-5 shadow-lg rounded-xl bg-white'>
                <GiCash className='text-6xl text-main'/>
                <div className='space-y-2'>
                    <h1 className='text-xl md:text-3xl font-semibold'>Big Cashback</h1>
                    <p className='text-gray'>Over 20% Cashback</p>
                </div>
            </div>
            </Slide>
            <Slide>
            <div className='flex flex-col md:flex-row items-center gap-3 p-5 shadow-lg rounded-xl bg-white'>
                <MdContactSupport className='text-6xl text-main'/>
                <div className='space-y-2'>
                    <h1 className='text-xl md:text-3xl font-semibold'>24/7 Support</h1>
                    <p className='text-gray'>Ready For You</p>
                </div>
            </div>
            </Slide>
        </div>
        </div>
    );
};

export default Support;