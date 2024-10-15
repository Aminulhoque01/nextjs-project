import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <h1 className='text-6xl'>loading....<progress className="progress w-56"></progress></h1>
            <span className="loading loading-spinner text-accent"></span>
        </div>
    );
};

export default loading;