import React from 'react';

const Upcoming = () => {
    return (
        <div className='h-screen flex  gap-10 justify-center items-center '>
            <h1 className='text-7xl font-bold font-reemKufi'>Coming Soon</h1>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            </div>
        </div>
    );
};

export default Upcoming;