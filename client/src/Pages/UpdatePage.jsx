import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';
import { Helmet } from 'react-helmet';

const UpdatePage = () => {
    const {user} = useContext(UserContext)
    const data = useLoaderData()
    const [categories, setCategories] = useState([])

    // console.log(data);
    useEffect(() => {
        fetch("../category.json")
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.name.value;
        const price = parseInt(form.price.value);
        const imageUrl = form.imageUrl.value
        const category = form.category.value;
        const rating = parseFloat(form.rating.value);
        const processingTime = form.processingTime.value
        const stockStatus = parseInt(form.stock.value);
        const customization = form.customization.value;
        const description = form.description.value;
        const userName = user?.displayName
        const userEmail = user?.email
        const mainAdmin = false
        const item = {title, price, imageUrl, category, rating, processingTime, stockStatus, customization, description, userName, userEmail, mainAdmin}
        console.log(price);
        fetch(`${import.meta.env.VITE_SERVER_URI}/item/${data._id}`,{
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Item Updated Successfully")
            })
            


    }
    return (
        <div className='lg:m-20 shadow-lg p-5 md:p-20 rounded-xl border-2 border-main '>
            <Helmet title='Update | Sports Horizon'/>
            <h1 className='font-bold text-main text-4xl text-center mb-10'>Update Item</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-10' action="">
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>User Name</p>
                <input type="text" name="" readOnly defaultValue={user?.displayName} id="" placeholder='Type item name' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>User Email</p>
                <input type="text" name="" readOnly defaultValue={user?.email}  id="" placeholder='Type item name' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Name</p>
                <input type="text" name="name" id="" defaultValue={data.title} placeholder='Type item name' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Price</p>
                <input type="number" name="price" defaultValue={data.price} id="" placeholder='Type item price' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Image Url</p>
                <input type="text" name="imageUrl" id="" defaultValue={data.imageUrl} placeholder='Type item image url' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Category</p>
                <select name="category" className='py-3 px-5 border rounded-full w-full' id="">
                    {
                        categories.map(category => (
                            <option key={category.id} value={category.CategoryName}>{category.CategoryName}</option>
                        ))
                    }
                </select>
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Ratings</p>
                <input type="text" name="rating" defaultValue={data.rating} id="" placeholder='Type item image url' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Processing Time</p>
                <input type="text" name="processingTime" defaultValue={data.processingTime} id="" placeholder='Type item processing time' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Stock Status</p>
                <input type="number" name="stock" id="" defaultValue={data.stockStatus} placeholder='Type item stock quantity' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Customization</p>
                <input type="text" name="customization" defaultValue={data.customization} id="" placeholder='Type item customization' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2'>
                <p className='font-semibold my-3'>Item Description</p>
                {/* <textarea type="number" name="rating" id="" placeholder='Type item description' className='py-3 px-5 border rounded-full w-full' /> */}
                <textarea className='py-3 px-5 border rounded-xl w-full' defaultValue={data.description} placeholder='Type item description' name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='btn col-span-2 bg-main text-white'>Update Item</button>
            </form>
        </div>
    );
};

export default UpdatePage;