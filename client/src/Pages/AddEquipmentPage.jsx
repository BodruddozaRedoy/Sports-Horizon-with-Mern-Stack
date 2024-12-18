import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';
import { Helmet } from 'react-helmet';

const AddEquipmentPage = ({item}) => {
    // const {id, Image., ItemName., CategoryName., Description, Price., Rating., Customization., ProcessingTime., StockStatus.} = item
    const {user} = useContext(UserContext)
    const [categories, setCategories] = useState([])

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
        const price = parseFloat(form.price.value);
        const imageUrl = form.imageUrl.value
        const category = form.category.value;
        const rating = parseFloat(form.rating.value);
        const processingTime = form.processingTime.value
        const stockStatus = parseInt(form.stock.value);
        const customization = form.customization.value;
        const description = form.description.value;
        const userName = user.displayName
        const userEmail = user.email
        const mainAdmin = false
        const item = {title, price, imageUrl, category, rating, processingTime, stockStatus, customization, description, userName, userEmail, mainAdmin}

        fetch(`${import.meta.env.VITE_SERVER_URI}/item`,{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
            .then(data => {
                toast.success("Item Added Successfully")
                form.reset()
            })
    }

    return (
        <div className='md:m-20 shadow-lg p-5 md:p-20 rounded-xl border-2 border-main bg-white'>
            <Helmet title='Add Equipment | Sports Horizon'/>
            <h1 className='font-bold text-main text-4xl text-center mb-10'>Add Item</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10' action="">
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
                <input type="text" name="name" id="" placeholder='Type item name' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Price</p>
                <input type="number" name="price" id="" placeholder='Type item price' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Image Url</p>
                <input type="text" name="imageUrl" id="" placeholder='Type item image url' className='py-3 px-5 border rounded-full w-full' />
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
                <input type="text" name="rating" id="" placeholder='Type item rating (ex. 4.5, 5.0)' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Processing Time</p>
                <input type="text" name="processingTime" id="" placeholder='Type item processing time (ex. 3 to 5)' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Stock Status</p>
                <input type="number" name="stock" id="" placeholder='Type item stock quantity' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2 md:col-span-1'>
                <p className='font-semibold my-3'>Item Customization</p>
                <input type="text" name="customization" id="" placeholder='Type item customization' className='py-3 px-5 border rounded-full w-full' />
            </div>
            <div className='col-span-2'>
                <p className='font-semibold my-3'>Item Description</p>
                <textarea className='py-3 px-5 border rounded-xl w-full' placeholder='Type item description' name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='btn col-span-2 bg-main text-white'>Add Item</button>
            </form>
        </div>
    );
};

export default AddEquipmentPage;