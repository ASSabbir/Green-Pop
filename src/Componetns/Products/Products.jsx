import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Top from '../Home/Cards/Top';
// https://i.ibb.co/gmnX7rW/josefin-WS5yj-Fjyc-NY-unsplash.jpg
const Products = () => {
    const [flag, setFlag] = useState(1)
    const data = useLoaderData()

    console.log(flag)
    return (
        <div>
            <div>
                <div className="hero w-fit md:w-full " style={{ backgroundImage: 'url(https://i.ibb.co/gmnX7rW/josefin-WS5yj-Fjyc-NY-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="p-10">
                            <h1 className="mb-5 text-5xl  font-reemKufi font-bold leading-relaxed">Welcome to our product page featuring the stunning Echinocereus Cactus. </h1>

                        </div>
                    </div>
                </div>
                <section className='flex md:flex-row flex-col max-w-screen-2xl mx-auto md:mt-40 mt-10'>
                    {/* sectiion 1  */}
                    <section className='md:w-[30%] w-full mb-20   px-5 md:px-0  space-y-10'>
                        <div>
                            <h1 className='text-3xl font-bold pb-5'>Categories</h1>
                            <select className="select select-ghost focus:outline-none focus:border-0 outline-none w-full max-w-xs">
                                <option disabled selected>All Categories</option>
                                <option>In Door</option>
                                <option>Out Door</option>

                            </select>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold pb-5'>Price</h1>
                            <input type="range" min={0} max="100" className="range max-w-xs range-xs" />

                        </div>

                        <div>
                            <h1 className='text-3xl font-bold pb-5'>Size</h1>
                            <div>
                                <div className='space-x-5'>
                                    <h1 className='border-2 inline-block p-2 px-4 focus:border-black hover:border-black duration-300'>L</h1>
                                    <h1 className='border-2 inline-block p-2 px-4 focus:border-black hover:border-black duration-300'>M</h1>
                                    <h1 className='border-2 inline-block p-2 px-4 focus:border-black hover:border-black duration-300'>S</h1>
                                    <h1 className='border-2 inline-block p-2 px-4 focus:border-black hover:border-black duration-300'>XL</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold pb-5'>Feature Product</h1>
                            <div>
                                {
                                    data.slice(8, 10).map(data => <>
                                        <div className="w-36 gap-5 pb-3 rounded-md flex   text-gray-900">
                                            <img src={data.image} alt="" className="object-cover object-center w-full rounded-md h-44  bg-gray-500" />
                                            <div className="mt-6 mb-2 space-y-2">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                                <h2 className="text-xl font-semibold ">{data.name}</h2>
                                                <h1 className='text-primary'>${data.price}</h1>
                                            </div>

                                        </div>
                                    </>)
                                }
                            </div>
                        </div>

                    </section>

                    {/* section 2  */}
                    <section className='md:w-[70%]'>
                        <h1 className='text-6xl font-bold md:hidden flex font-reemKufi text-center text-gray-600  pb-20'><span className='text-primary'>P</span>roducts</h1>
                        <div className='grid grid-cols-1 px-2 md:grid-cols-3 gap-5'>
                            {flag == 1 &&
                                data.slice(0, 6).map(data => <Top data={data}></Top>) ||
                                flag == 2 &&
                                data.slice(6, 12).map(data => <Top data={data}></Top>) ||
                                flag == 3 &&
                                data.slice(12, 18).map(data => <Top data={data}></Top>) ||
                                flag == 4 &&
                                data.slice(18, 20).map(data => <Top data={data}></Top>)
                            }
                        </div>
                        <div className='w-full flex items-center justify-center '>
                            <div className="join ">
                                <input onClick={() => setFlag(1)} className={`join-item btn  ${flag == 1 && 'bg-[#3F00E7] text-white'}`} type="radio" name="options" aria-label="1" />
                                <input onClick={() => setFlag(2)} className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                                <input onClick={() => setFlag(3)} className="join-item btn " type="radio" name="options" aria-label="3" />
                                <input onClick={() => setFlag(4)} className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Products;