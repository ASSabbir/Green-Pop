import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/W0ZkBy7/unsplash-VTXw4-5-Ss-NA.png")]  max-h-full p-5 md:p-[64px] bg-no-repeat bg-center  '>
                <div className='bg-[#8a9b6e] bg-opacity-70 space-y-2 md:space-y-9 p-6 md:py-12 text-center '>
                    <h1 className='text-5xl md:text-6xl font-reemKufi text-white '>Subscribe Newsletter</h1>
                    <p className='text-gray-200'>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be <br/> well on your way to maintaining healthy and thriving plants.</p>
                    <div className='space-y-2'>
                        <input type="text" className='max-w-[647px] w-full p-3 focus:outline-none' placeholder='Enter Your Email' />
                        <button className=" bg-primary text-white hover:bg-gray-700 duration-200  p-3 text w-40 te">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;