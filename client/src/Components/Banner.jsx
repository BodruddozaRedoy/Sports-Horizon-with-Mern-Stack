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
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';




const Banner = () => {
    
    return (
        <div className='font-poppins my-5 md:my-0 '>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper" style={{height: '700px', zIndex: "0"}}>
                <SwiperSlide>
                <div style={{background: `url(${BannerImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className={` bg-no-repeat bg-cover h-full` }>
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center h-full">
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
                    <Link to={"all-equipment"}><MainBtn text={"Shop Now"}/></Link>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{background: `url(${BannerImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="bg-no-repeat bg-cover h-full">
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center h-full">
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
                    <Link to={"all-equipment"}><MainBtn text={"Shop Now"}/></Link>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                <div style={{background: `url(${BannerImg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className=" bg-no-repeat bg-cover h-full">
                    <div className=" lg:p-40 bg-black bg-opacity-60 flex flex-col justify-center items-center h-full">
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
                </SwiperSlide> */}
            </Swiper>
           
            {/* <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} swipeable={false}>
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
                <div style={{background: `url(${BannerImg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className=" bg-no-repeat bg-cover h-full">
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
                
            </Carousel> */}
        </div>
    );
};

export default Banner;