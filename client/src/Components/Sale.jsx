import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Sale = () => {
    return (
        <div className='grid grid-cols-1 lg:mx-10 lg:grid-cols-2 my-10 md:my-20 items-center justify-center gap-20 md:mx-40'>
            <Bounce>
            <div className="bg-[url('../skateboard.jfif')] bg-no-repeat bg-cover rounded-xl p-1">
                <div className='flex p-20 backdrop-blur-md rounded-xl'>
                <div className="">
                    <h1 className='font-semibold text-white text-xl'>Big Sale</h1>
                    <p className='text-4xl text-white font-bold'>Get An Extra <br /> <span className='bg-main px-2 py-0'>50%</span> Off</p>
                </div>
                <div className=''>
                    <img className='hidden md:flex absolute top-[-50px] right-[10px] w-[350px]' src="./skateboarding-1.png" alt="" />
                </div>
                </div>
            </div>
            </Bounce>
            <Bounce>
            <div className="bg-[url('../skateboard-2.jpg')] bg-no-repeat bg-cover p-1 rounded-xl">
                <div className='flex p-20 backdrop-blur-md rounded-xl'>
                <div className="">
                    <h1 className='font-semibold text-white text-xl'>New Year Sale</h1>
                    <p className='text-4xl text-white font-bold'>Get An Extra <br /> <span className='bg-main px-2 py-0'>70%</span> Off</p>
                </div>
                <div className=''>
                    <img className='hidden md:flex absolute top-[-50px] right-[10px] w-[350px]' src="./skateboarding-2.png" alt="" />
                </div>
                </div>
            </div>
            </Bounce>
        </div>
    );
};

export default Sale;