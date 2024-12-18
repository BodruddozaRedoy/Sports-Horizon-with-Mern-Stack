import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Headroom from 'react-headroom';
import Spinner from '../Components/Spinner';
import Footer from '../Components/Footer';
import { UserContext } from '../Context/UserContext';

const MainLayout = () => {
    const {loading} = useContext(UserContext)
    return (
        <div className='dark:bg-gray-800'>
            {
                loading ? <Spinner/>
                : <div>
                <nav className='z-40'>
                    <Headroom>
                    <Navbar/>
                    </Headroom>
                </nav>
                <main className='w-full'>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
                </div>
            }
        </div>
    );
};

export default MainLayout;