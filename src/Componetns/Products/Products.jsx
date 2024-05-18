import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Top from '../Home/Cards/Top';
// https://i.ibb.co/gmnX7rW/josefin-WS5yj-Fjyc-NY-unsplash.jpg
const Products = () => {
    const data = useLoaderData()
    console.log(data)
    const demo = data[0]
    return (
        <div>
            <div>
                <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/gmnX7rW/josefin-WS5yj-Fjyc-NY-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="p-10">
                            <h1 className="mb-5 text-5xl  font-reemKufi font-bold leading-relaxed">Welcome to our product page featuring the stunning Echinocereus Cactus. </h1>

                        </div>
                    </div>
                </div>
                <section className='flex max-w-screen-2xl mx-auto mt-40'>
                    {/* sectiion 1  */}
                    <section className='w-[30%] space-y-10'>
                        <div>
                            <h1 className='text-3xl font-bold'>Categories</h1>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected>Pick the best JS framework</option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                            </select>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>Price</h1>
                            <input type="range" min={0} max="100" className="range max-w-xs range-xs" />

                        </div>

                        <div>
                            <h1 className='text-3xl font-bold'>Size</h1>
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
                            <h1 className='text-3xl font-bold'>Feature Product</h1>
                            <div>
                                {
                                    data.slice(8, 10).map(data => <>
                                        <div className="w-36 gap-5 rounded-md flex   text-gray-900">
                                            <img src={data.image} alt="" className="object-cover object-center w-full rounded-md h-44  bg-gray-500" />
                                            <div className="mt-6 mb-2 space-y-2">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
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
                    <section className='w-[70%]'>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                data.map(data => <Top data={data}></Top>)
                            }
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Products;