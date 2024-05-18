import React from 'react';
import image from '../../assets/kara-eads-EbLX7oRo4vI-unsplash__1_-removebg-preview.png'

const Benifts = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-3 py-5 md:py-0 '>
                <div className='flex justify-center items-center p-5'>
                    <h1 className='text-6xl font-reemKufi text-gray-600  '>The Benefits of Indoor Plants</h1>
                </div>
                <div className='relative overflow-hidden z-10  flex justify-center'>
                    <img src={image} alt="" className='z-20' />
                    <div className='h-[450px] w-[450px] bg-green-900 opacity-50 rounded-full -z-10   absolute -bottom-44'></div>
                </div>
                <div className='flex flex-col justify-center items-center p-10 space-y-6'>
                    <p>“Phasellus tempus dignissim nisl, eu interdum felis interdum consequat. Vestibulum varius dui vel tincidunt convallis.”</p>
                    <button className=" bg-primary text-white hover:bg-gray-700 duration-200  p-3 text w-56 te">Shop Now</button>
                </div>

            </div>
        </div>
    );
};

export default Benifts;