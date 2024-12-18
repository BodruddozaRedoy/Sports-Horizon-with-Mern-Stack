import React from 'react';

const MainBtn = ({text}) => {
    return (
        <div className='md:py-3 py-2 px-4 md:px-5 bg-white dark:bg-black rounded-lg md:text-md text-xs font-semibold cursor-pointer border-2 border-white hover:bg-transparent hover:text-white transition-all font-poppins text-main'>
            {text}
        </div>
    );
};

export default MainBtn;