import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Helmet } from 'react-helmet';


const CardDetailsPage = () => {
    const data = useLoaderData()
    console.log(data);
    const {_id, title, price, imageUrl, category, rating, processingTime, stockStatus, customization, description, userName, userEmail} = data

    return (
        <div className='m-10'>
            <Helmet title='Details | Sports Horizon'/>
            <div className='grid grid-cols-5 gap-10'>
                <div className='bg-white rounded-md overflow-hidden shadow-md w-full col-span-2 flex items-center justify-center p-5'>
                    <img src={imageUrl} alt=""/>
                </div>
                <div className='col-span-3 bg-white rounded-md shadow-md p-5 space-y-5'>
                    <h1 className='text-4xl font-semibold'>{title}</h1>
                    <p className='font-semibold text-gray'>Price: ${price}</p>
                    <p className='font-semibold text-gray'>Processing Time: {processingTime} days</p>
                    <p className='font-semibold text-gray'>Category: {category}</p>
                    <p className='font-semibold text-gray'>Stock Status: {stockStatus}</p>
                    <p className='font-semibold text-gray'>Customization: {customization}</p>
                    <p className='font-semibold text-gray'>Details: {description}</p>
                    <p className='font-semibold flex gap-3'>Rating: {rating} <ReactStars value={rating}/></p>
                    <div>
                        {/* <button></button> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetailsPage;