import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import ShopSection from '../Components/ShopSection';
import {Link, NavLink, Outlet} from 'react-router-dom'
import { Fade, Slide } from 'react-awesome-reveal';
import Sale from '../Components/Sale';

const HomePage = () => {
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        fetch("../category.json")
        .then(res => res.json())
        .then(data => {
            setCategory(data);
        })
    }, [])  

    const handleShow = () => {
        fetch(`${import.meta.env.VITE_SERVER_URI}/limited-items`)
        .then(res => res.json())
        .then(data => {

        })
    }
    return (
        <div >
            <header>
                <Banner/>
            </header>
            <main>
                <section className=''>
                    <Fade>
                    <h1 className='text-center my-5 font-bold text-4xl'>Shop By Category</h1>
                    </Fade>
                    <Slide>
                    <div className='flex flex-wrap gap-5 items-center justify-center m-2'>
                    <NavLink className={({isActive}) => (isActive ? `bg-main shadow-lg p-3 md:p-5 rounded-lg text-white font-semibold border` :`bg-white shadow-lg p-5 rounded-lg text-main font-semibold border`)} onClick={handleShow}  to={'/'}>All Products</NavLink>
                        
                        {
                            category.map(i => (
                                <NavLink className={({isActive}) => (isActive ? `bg-main shadow-lg p-3 md:p-5 rounded-lg text-white font-semibold border` :`bg-white shadow-lg p-3 md:p-5 rounded-lg text-main font-semibold border`)} key={i.id} to={`/shop/${i.CategoryName}`}>{i.CategoryName}</NavLink>
                            ))
                        }
                    </div>
                    </Slide>
                    <Outlet/>
                </section>
                <section className='my-20'>
                    <h1 className='text-center text-4xl font-bold'>Grab Your Offer</h1>
                    <Sale/>
                </section>
            </main>
        </div>
    );
};

export default HomePage;