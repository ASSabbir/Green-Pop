import React, { useState } from 'react';
import { CiBag1, CiClock1, CiDeliveryTruck, CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const [count, setCount] = useState(1)
    const data = useLoaderData()
    const { image, name, key, price, description, features, category, sunlight, soil, stock, tags } = data
    console.log(data)
    return (
        <div className='max-w-screen-2xl mx-auto mb-20'>
            <div className='flex flex-col gap-6 md:flex-row'>
                <div className='flex-1 overflow-hidden  h-[800px] w-full '>
                    <img src={image} alt="" className='object-cover hover:scale-150 duration-500 cursor-zoom-in object-center w-full h-full ' />
                </div>
                {/* detailks container  */}
                <div className='flex-1  space-y-4 '>
                    <div className='space-y-4  px-3 lg:px-28'>
                        <h1 className='text-4xl mt-5 font-reemKufi font-bold text-gray-600'>{name}</h1>
                        <h1 className='text-2xl font-bold text-primary'>${price}</h1>
                        <hr />
                        <h1 className='text-gray-400 pb-4'>{description}</h1>
                        <h1>Only <span className='text-red-500'>{stock} items</span> left in stock!</h1>
                        <hr />
                        <div className='flex gap-3 '>
                            <div className='flex gap-5 w-28 justify-around border-[1px] items-center p-3'>

                                {
                                    count > 0 && <button onClick={() => setCount(count - 1)}>-</button> ||
                                    <button >-</button>
                                }
                                <h1>{count}</h1>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <button className='flex-grow bg-gray-700 text-white hover:bg-primary duration-300 p-3 border-[1px] text-center'>Add to Cart</button>
                            <div className='p-3 hover:bg-primary duration-300 hover:text-white text-center text-xl border-[1px]'>
                                <CiHeart className='text-2xl ' />
                            </div>
                        </div>
                        <button className='flex-grow w-full  text-gray-600 hover:bg-primary hover:text-white  duration-300 p-3 border-[1px] text-center'>Buy Now</button>
                        
                        <div className='flex pt-5 items-center gap-3  '>
                            <CiDeliveryTruck className='text-2xl text-gray-400' />
                            <h1 className='text-gray-400'>Free worldwide shipping on all orders over $100</h1>
                        </div>
                        <div className='flex pb-5 items-center gap-3  '>
                            <CiClock1 className='text-2xl text-gray-400' />
                            <h1 className='text-gray-400'>Delivers in: 3-7 Working Days </h1>
                        </div>
                        <hr />
                        <h1 className='text-gray-400'>Categories : <span className='text-gray-600'>{category}</span></h1>
                        <h1 className='text-gray-400'>Sunlight : <span className='text-gray-600'>{sunlight}</span></h1>
                        <h1 className='text-gray-400'>Soil : <span className='text-gray-600'>{soil}</span></h1>
                        <h1 className='text-gray-400'>Features : <span className='text-gray-600'>{features.map(text=><span>{text}, </span>)}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;