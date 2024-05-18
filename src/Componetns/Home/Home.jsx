

import Banner from './Banner';
import Benifts from './Benifts';
import FaQ from './Cards/FaQ';
import Exprencs from './Exprencs';
import MainCard from './MainCard';
import Newsletter from './Newsletter';
import TakeCare from './TakeCare';

const Home = () => {

    return (
        <div className='space-y-[100px]'>
            <Banner></Banner>
            <TakeCare></TakeCare>
            <div className='bg-[#F0F1EE] py-[100px]'>
                <MainCard></MainCard>
            </div>
            <Exprencs></Exprencs>
            <div className='bg-[#F0F1EE] '>
                <Benifts></Benifts>
            </div>
            <div className=' py-[100px] max-w-screen-2xl mx-auto '>
                <FaQ></FaQ>
            </div>
            <div className=' py-[100px] max-w-screen-2xl mx-auto '>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;