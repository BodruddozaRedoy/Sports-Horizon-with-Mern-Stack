import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';
import { Helmet } from 'react-helmet';
import Card from '../Components/Card';

const AllEquipmentPage = () => {
    const [items, setItems] = useState([])
    const {user} = useContext(UserContext)
    // const item = {title, price, imageUrl, category, rating, processingTime, stockStatus, customization, description}
    useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URI}/items`)
    .then(res => res.json())
    .then(data => {
        setItems(data);
    })
    }, [])

    const handleDelete = (id) => {
      fetch(`${import.meta.env.VITE_SERVER_URI}/item/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        toast.success("Deleted successfully")
        const filter = items.filter(prev => prev._id !== id)
        setItems(filter)
      })
    }

    const handleSort = (sort) => {
      
        // const sortedAscending = [...items].sort((a,b) => a.price - b.price)
        // setItems(sortedAscending)
        fetch(`${import.meta.env.VITE_SERVER_URI}/sorted-items`)
        .then(res => res.json())
        .then(data => {
          setItems(data);
        })
      
      
    }

    return (
      <div className="md:m-10 shadow-md rounded-xl border-2 border-main p-5 md:p-10 bg-white">
        <Helmet title="All Equipment | Sports Horizon" />
        <div className="flex items-center justify-end">
          <button
            onClick={handleSort}
            className=" font-semibold btn bg-main py-3 px-7 text-white"
          >
            Sort
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    );
};

export default AllEquipmentPage;