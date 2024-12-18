import React from 'react';

const Spinner = () => {
    return (
        <div className='flex bg-black  h-screen justify-center items-center pt-20'>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    );
};

export default Spinner;