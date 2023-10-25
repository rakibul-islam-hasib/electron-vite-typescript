import React from 'react';

const Loading : React.FC = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex justify-center items-center'>
            <div className="h-7 relative rounded-full w-[90%] mx-auto ">
                <div className="absolute top-0 left-0 rounded-full bg-green-500 h-full   w-14"></div>
            </div>
        </div>
    );
};

export default Loading;