import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';
import { Helmet } from 'react-helmet';

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
            <Helmet title='All Equipment | Sports Horizon'/>
        <div className='flex items-center justify-end'><button onClick={handleSort} className=' font-semibold btn bg-main py-3 px-7 text-white'>Sort</button></div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
        <th>Stock Status</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        items.map((item, index)=> (
            <tr key={item._id}>
        <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.imageUrl}
                  alt={item.title} />
              </div>
            </div>
            <div>
              <div className="font-bold truncate">{item.title}</div>
              <div className="text-sm opacity-50">{item.userName}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{item.category}</span>
        </td>
        <td>{item.stockStatus} Pcs</td>
        <td>${item.price}</td>
        <th>
          <Link to={`/item/${item._id}`}><button className="btn btn-ghost btn-xs">View details</button></Link>
          {user?.email === "bodruddozaredoy@gmail.com" && <button onClick={() => handleDelete(item._id)} className='btn btn-ghost btn-xs'>delete</button>}
          {user?.email === "bodruddozaredoy@gmail.com" && <Link to={`/item-update/${item._id}`} className='btn btn-ghost btn-xs'>update</Link>}
        </th>
      </tr>
        ))
      }
    </tbody>
    
  </table>
</div>
      </div>
    );
};

export default AllEquipmentPage;