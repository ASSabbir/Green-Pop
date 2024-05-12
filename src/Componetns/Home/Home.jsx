

import Banner from './Banner';
import MainCard from './MainCard';
import TakeCare from './TakeCare';

const Home = () => {
    
    return (
        <div className='space-y-[100px]'>
            <Banner></Banner>
            <TakeCare></TakeCare>
            <div className='bg-[#F0F1EE] py-[100px]'>
                <MainCard></MainCard>
            </div>
        </div>
    );
};

export default Home;