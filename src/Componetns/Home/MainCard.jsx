
import { useLoaderData } from 'react-router-dom';
import Top from './Cards/Top';
import { useState } from 'react';

const MainCard = () => {
    const [flag, setFlag] = useState(true)
    const datas = useLoaderData()


    const topDatas = datas.filter(data => data.tags[0] == 'top selling')
    const sellerDatas = datas.filter(data => data.tags[0] == 'best seller')
    console.log(flag)




    return (
        <div className='max-w-screen-2xl mx-auto'>

            <div className='flex gap-10'>
                <button onClick={() => setFlag(true)} className='text-4xl hover:text-primary text-gray-400 focus:text-primary font-reemKufi'>Top rating</button>
                <h1 className='text-4xl text-gray-400'>|</h1>
                <button onClick={() => setFlag(false)} className='text-4xl hover:text-primary text-gray-400 focus:text-primary font-reemKufi'>Best sellers</button>
            </div>

            <div className='flex flex-col-reverse md:flex-row'>
                <div className='bg-[url("https://i.ibb.co/Br76RGq/vipin-rajbher-l8-Ex3i-H3-LAM-unsplash.jpg")] w-full md:w-[40%] h-80 bg-cover bg-no-repeat bg-center'>

                </div>
                <div className='w-full'>
                    {
                        flag ? <div className='grid grid-cols-3 gap-5'>
                            {topDatas.slice(0, 6).map(data => <Top key={data.id} data={data}></Top>)}
                        </div>
                        :<div className='grid grid-cols-3 gap-5'>
                        {sellerDatas.slice(0,6).map(data=><Top key={data.id} data={data}></Top>)}
                    </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default MainCard;