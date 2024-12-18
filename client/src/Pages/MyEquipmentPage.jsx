import React, { useContext, useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import { UserContext } from '../Context/UserContext';
import { Helmet } from 'react-helmet';



const MyEquipmentPage = () => {
    const {user} = useContext(UserContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URI}/user-items/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_SERVER_URI}/item/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // toast.success("Deleted Successfully")
                    const filter = items.filter(prev => prev._id !== id)
                    setItems(filter)
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });

        
    }
    return (
        <div className='m-5 md:m-10'>
            <Helmet title='My Equipment | Sports Horizon'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    items.map(item => (
                        <div key={item._id} className='relative'>
                            <Bounce>
                                <div className='bg-white rounded-lg shadow-lg border-2 overflow-hidden border-main my-5 '>
                                <img className='w-full h-[350px]' src={item.imageUrl} alt="" />
                                <div className='p-5 space-y-5'>
                                <h1>{item.title}</h1>
                                <hr className='text-gray'/>
                                <div className='flex items-center justify-between'>
                                <p>Processing Time: <br /> <span>{item.processingTime}</span></p>
                                <p>Stock Status: <br /> <span>{item.stockStatus}</span></p>
                                </div>
                                <div className='flex items-center justify-between'>
                                <p>Price: <span>${item.price}</span></p>
                                <p className='flex gap-3 font-semibold'><ReactStars value={item.rating}/>  <span>{item.rating}</span></p>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <Link to={`/item-update/${item._id}`}><button className='btn bg-main text-white'>Update</button></Link>
                                    <p className='text-center rounded-3xl py-1 px-3 text-xs bg-main text-white'>{item.category}</p>
                                </div>
                                </div>
                                <div onClick={() => handleDelete(item._id)} className='cursor-pointer p-2 bg-red-500 flex items-start absolute top-3 right-3 justify-center rounded-full'><ImCross className='text-white'/></div>
                                </div>
                            </Bounce>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyEquipmentPage;