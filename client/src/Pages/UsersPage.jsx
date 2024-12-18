import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router-dom';

const UsersPage = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1'>
            <h1 className='text-4xl font-bold text-center col-span-4 my-5'>Users: {data.length}</h1>
            <Bounce>
            {
                data.map(user => (
            <div key={user?._id} className='bg-white dark:bg-slate-100 rounded-lg shadow-lg border-2 overflow-hidden border-main my-5'>
            <img className='w-full h-[350px]' src={user?.photoURL} alt="" />
            <div className='p-5 space-y-5'>
            <h1 className='truncate'>{user?.displayName}</h1>
            <h1 className='truncate'>{user?.email}</h1>
            <hr className='text-gray'/>
            {/* <div className='flex items-center justify-between'>
            <p>Processing Time: <br /> <span>{processingTime} days</span></p>
            <p>Stock Status: <br /> <span>{stockStatus}</span></p>
            </div> */}
            {/* <div className='flex items-center justify-between'>
            <p>Price: <span>${price}</span></p>
            <p className='flex gap-3 font-semibold'><ReactStars value={rating}/>  <span>{rating}</span></p>
            </div> */}
            <hr />
            <div className='flex justify-between items-center'>
                <Link to={`/item/`}><button className='btn bg-main text-white'>View Details</button></Link>
                {/* <p className='text-center rounded-3xl py-1 px-3 text-xs bg-main text-white'>{category}</p> */}
            </div>
            </div>
        </div>
                ))
            }
        </Bounce>
        </div>
    );
};

export default UsersPage;