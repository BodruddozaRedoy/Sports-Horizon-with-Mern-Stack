import React from 'react';
import ReactStars from "react-rating-stars-component";
import MainBtn from './MainBtn';
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {_id, title, price, imageUrl, category, rating, processingTime, stockStatus, customization, description, userName, userEmail} = item
    // console.log(typeof _id);
    return (
        <Bounce>
            <div className='bg-white dark:bg-slate-100 rounded-lg shadow-lg border-2 overflow-hidden border-main my-5'>
            <img className='w-full h-[350px]' src={imageUrl} alt="" />
            <div className='p-5 space-y-5'>
            <h1 className='truncate'>{title}</h1>
            <hr className='text-gray'/>
            {/* <div className='flex items-center justify-between'>
            <p>Processing Time: <br /> <span>{processingTime} days</span></p>
            <p>Stock Status: <br /> <span>{stockStatus}</span></p>
            </div> */}
            <div className='flex items-center justify-between'>
            <p>Price: <span>${price}</span></p>
            <p className='flex gap-3 font-semibold'><ReactStars value={rating}/>  <span>{rating}</span></p>
            </div>
            <hr />
            <p className='truncate'>
                {description}
            </p>
            <div className='flex justify-between items-center'>
                <Link to={`/item/${_id}`}><button className='btn bg-main text-white'>See More</button></Link>
                <p className='text-center rounded-3xl py-1 px-3 text-xs bg-main text-white'>{category}</p>
            </div>
            </div>
        </div>
        </Bounce>
    );
};

export default Card;