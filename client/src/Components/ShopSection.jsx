import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ShopSection = () => {
    const {category} = useParams()
    const data = useLoaderData()
    const [item, setItem] = useState([])
    console.log(data);
    useEffect(() => {
        if(category){
            const filteredData = [...data].filter(prev => prev.category === category)
            setItem(filteredData);
            console.log(filteredData);
        }else{
            setItem(data)
        }
    }, [category])
    return (
        <div className='my-5 mx-5 lg:mx-40'>
            <div>
            <h1 className='text-center font-bold text-3xl'>Products</h1>
            <p className='font-semibold text-center mt-10'>{item.length === 0 && "No item available!!"}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:gap-5 w-full'>
                    {
                        item.map(i => <Card key={i._id} item={i}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopSection;