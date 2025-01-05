import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainBtn from './MainBtn';
import { Fade, Slide,Bounce } from 'react-awesome-reveal';
import toast from 'react-hot-toast';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { UserContext } from '../Context/UserContext';
import { ThemeContext } from '../Context/ThemeContext';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";



const Navbar = () => {
    const {user, logOut} = useContext(UserContext)
    const { theme, toggleTheme } = useContext(ThemeContext);
    const handleLogout = () => {
        logOut()
        .then((result) => {
            toast.success("Logged Out")
        })
    }
    return (
        <div>
            <div className='flex justify-between items-center py-5 px-5 lg:px-10 bg-main '>
            <Slide>
            <Link to={'/'}><div className='font-protest font-semibold text-white text-lg lg:text-3xl cursor-pointer dark:text-black'>Sports Horizon</div></Link>
            </Slide>
            <Fade>
            <div className='hidden lg:flex items-center gap-3 lg:gap-5 text-white dark:text-black font-semibold font-poppins text-sm' >
                <NavLink to={'/'}><p>Home</p></NavLink>
                <NavLink to={'/all-equipment'}><p>All Sports Equipment</p></NavLink>
                { user && <NavLink to={'/add-equipment'}><p>Add Equipment</p></NavLink>}
                {user && <NavLink to={'/my-equipment'}><p>My Equipment List</p></NavLink>}
                <NavLink to={'/about'}><p>About Us</p></NavLink>
                <NavLink to={'/contact'}><p>Contact Us</p></NavLink>
                {user?.email === "bodruddozaredoy@gmail.com" && <NavLink to={'/users'}>Users</NavLink>}
                
            </div>
            </Fade>
            <div className='font-poppins flex items-center gap-5'>
                <div>
                {user && <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className='w-[50px] h-[50px] object-cover rounded-full' src={user?.photoURL} alt="" />}
                </div>
                {
                    user ? <Link onClick={handleLogout}><Bounce><MainBtn text={"Log Out"}/></Bounce></Link> : <div className='flex gap-3'><Link to={'/login'}><Bounce><MainBtn text={"Login"}/></Bounce></Link><Link to={'/register'}><Bounce><MainBtn text={"Register"}/></Bounce></Link></div> 
                }
                <button
                    onClick={toggleTheme}
                    className="p-2 md:w-[50px] md:h-[50px] flex items-center justify-center text-black bg-white rounded-full transition-all"
                    >
                    {theme === 'dark' ? <CiLight className='text-4xl text-yellow-500 font-bold' /> : <MdDarkMode className='text-4xl' />}
                </button>
            </div>
            <ReactTooltip id="my-tooltip" place="bottom" type="dark" effect="solid" />
        </div>
        <Fade>
            <div className='flex items-center justify-center md:gap-5 gap-3 bg-white shadow-md p-3 rounded-lg m-3 lg:hidden text-black dark:text-white font-semibold font-poppins [&>*]:text-center text-xs' >
                <NavLink className={({isActive}) => (isActive ? 'text-main': 'text-black')} to={'/'}><p>Home</p></NavLink>
                <NavLink className={({isActive}) => (isActive ? 'text-main': 'text-black')} to={'/all-equipment'}><p>All Sports Equipment</p></NavLink>
                <NavLink className={({isActive}) => (isActive ? 'text-main': 'text-black')} to={'/add-equipment'}><p>Add Equipment</p></NavLink>
                <NavLink className={({isActive}) => (isActive ? 'text-main': 'text-black')} to={'/my-equipment'}><p>My Equipment List</p></NavLink>
                
            </div>
            </Fade>
        </div>
    );
};

export default Navbar;