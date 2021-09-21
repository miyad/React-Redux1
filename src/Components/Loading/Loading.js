import React from 'react';
import loadingGif from '../../Logo/loading.gif';
const Loading = () => {
    return (
        <div>
            <div className="w-screen bg-gray-100" />
            <div className="flex py-24 h-screen  flex-col justify-between items-center">
                <div className="text-6xl">Just a moment....</div>
                <img className=" h-5/6 mb-32" src={loadingGif} alt="loading for you..."/>
            </div>
        </div>
    );
};

export default Loading;
