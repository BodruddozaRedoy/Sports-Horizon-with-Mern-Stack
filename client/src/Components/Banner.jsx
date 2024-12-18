import React from 'react';
import { FaArrowRight, FaTruckFast } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { Slide, Zoom } from 'react-awesome-reveal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MainBtn from './MainBtn';
import BannerImg1 from './../../public/badminton.jpg'
import BannerImg2 from './../../public/skateboard-2.jpg'
import BannerImg3 from './../../public/football.webp'



const Banner = () => {
    
    return (
        <div className='font-poppins my-10 md:my-0'>
            <div>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} swipeable={false}>
                <div style={{background: `url(${BannerImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className={` bg-no-repeat bg-cover`}>
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center">
                    <div className='backdrop-blur-xl !opacity-100 flex flex-col justify-center items-center md:gap-10 p-10 rounded-xl'>
                    <Zoom>
                    <div className='flex flex-col md:flex-row w-full items-center'>
                    <div>
                    <p className='text-white font-semibold text-lg text-start'>Welcome To Sports Horizon</p>
                    <h1 className='text-white font-bold text-4xl text-start my-3'>Choose Your <span className='bg-white text-main px-2 font-protest'>Racket</span> That <br /> You've Never Had</h1>
                    <p className='text-white text-start'>Keep playing and keep your body healthy. Because healthy life is a wealthy life.</p>
                    </div>
                    <div className='w-[300px]'>
                    <img className='w-full' src="./badminton.png" alt="" />

                    </div>
                    </div>
                    </Zoom>
                    <MainBtn text={"Shop Now"}/>
                    </div>
                    </div>
                </div>
                <div style={{background: `url(${BannerImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="bg-no-repeat bg-cover">
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center">
                    <div className='backdrop-blur-xl !opacity-100 flex flex-col justify-center items-center gap-10 p-10 rounded-xl'>
                    <Zoom>
                    <div className='flex flex-col md:flex-row w-full items-center'>
                    <div>
                    <p className='text-white font-semibold text-lg text-start'>Welcome To Sports Horizon</p>
                    <h1 className='text-white font-bold text-4xl text-start my-3'>Choose Your <span className='bg-white text-main px-2 font-protest'>Skateboard</span> That <br /> You've Never Had</h1>
                    <p className='text-white text-start'>Keep playing and keep your body healthy. Because healthy life is a wealthy life.</p>
                    </div>
                    <div className='w-[300px]'>
                    <img className='w-full' src="./skateboard.png" alt="" />

                    </div>
                    </div>
                    </Zoom>
                    <MainBtn text={"Shop Now"}/>
                    </div>
                    </div>
                </div>
                <div style={{background: `url(${BannerImg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className=" bg-no-repeat bg-cover">
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center">
                    <div className='backdrop-blur-xl !opacity-100 flex flex-col justify-center items-center gap-10 p-10 rounded-xl'>
                    <Zoom>
                    <div className='flex flex-col md:flex-row w-full items-center'>
                    <div>
                    <p className='text-white font-semibold text-lg text-start'>Welcome To Sports Horizon</p>
                    <h1 className='text-white font-bold text-4xl text-start my-3'>Choose Your <span className='bg-white text-main px-2 font-protest'>Football</span> That <br /> You've Never Had</h1>
                    <p className='text-white text-start'>Keep playing and keep your body healthy. Because healthy life is a wealthy life.</p>
                    </div>
                    <div className='w-[300px]'>
                    <img className='w-full' src="./football.png" alt="" />

                    </div>
                    </div>
                    </Zoom>
                    <MainBtn text={"Shop Now"}/>
                    </div>
                    </div>
                </div>
                
            </Carousel>
            {/* <div><FaArrowRight onClick={renderArrowNext} className='text-4xl cursor-pointer'/></div> */}
            </div>
            
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-center items-center m-5 gap-5 md:py-20 md:mx-20 md:gap-20 '>
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

export default Banner;