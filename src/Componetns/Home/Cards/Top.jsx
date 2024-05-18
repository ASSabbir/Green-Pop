
import { useState } from 'react';
import './top.css'
import Details from './Details';
const Top = ({ data }) => {
    const [flag, setFlag] = useState(0)
    const { name, image, price, key } = data

    // if (key == 'hot') {
    //     setFlag(1)
    // }
    // else if (key == 'discount') {
    //     setFlag(2)
    // } else {
    //     setFlag(3)
    // }

    
    return (
        <div>
            <div className="max-w-lg   group overflow-hidden  ">
                <div className='overflow-hidden relative group-hover:bg-black duration-300  '>
                    <img id='box' onClick={<Details ></Details>} src={image} alt="" className="group-hover:scale-150 group-hover:opacity-75 cursor-pointer duration-300 ease-in-out overflow-hidden object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    {
                        key == 'hot' && <div id='overlay' className='absolute top-3 right-3 bg-green-500 rounded-full w-10 h-10 flex justify-center items-center  z-10'>
                            <h1 className='text-white text-sm font-light '>Hot</h1>
                        </div> ||
                        key == 'discount' && <div id='overlay' className='absolute top-3 right-3 bg-red-600 rounded-full w-10 h-10 flex justify-center items-center z-10'>
                            <h1 className='text-white text-sm font-extralight'>-{data.discount_percentage}%</h1>
                        </div> ||
                        key == 'out of stock' && <div id='overlay' className='absolute top-3 right-3 bg-white  px-2 flex justify-center items-center z-10'>
                            <h1 className='text-gray-600 font-bold'>Out Of Stock</h1>
                        </div>


                    }
                </div>

                <div className="flex flex-col overflow-hidden justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-gray-600 text-center ">{name}</h1>
                        {
                            key == 'discount' &&
                            <div className='flex justify-center gap-5'>
                                <h1 className="text-gray-600 text-center font-reemKufi font-normal line-through text-lg decoration-1 ">${price}</h1>
                                <h1 className="text-gray-600 text-center font-reemKufi font-semibold text-lg ">${data.discount_price}</h1>
                            </div>
                            ||
                            key == 'out of stock' && <h1 className="text-gray-600 line-through text-center font-reemKufi font-semibold text-lg decoration-2 ">${price}</h1>
                            ||
                            <h1 className="text-gray-600 text-center font-reemKufi font-semibold text-lg ">${price}</h1>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Top;