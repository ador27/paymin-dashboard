import React from 'react';

const Cards = () => {
    return (

        <div className='grid grid-cols-3 ml-96'>

            <div className="m-4 rounded-3xl p-6 max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="m-1 rounded-3xl mb-2 text-3xl font-bold tracking-tight text-gray-900">$120</h5>
                <p className="m-1 rounded-3xl mb-3 font-normal text-gray-500 dark:text-gray-400">Monthly Income</p>

            </div>

            <div className="m-4 rounded-3xl p-6 max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="m-1 rounded-3xl mb-2 text-3xl font-bold tracking-tight text-gray-900">+420</h5>
                <p className="m-1 rounded-3xl mb-3 font-normal text-gray-500 dark:text-gray-400">User Active</p>

            </div>

            <div className="m-4 rounded-3xl p-6 max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="m-1 rounded-3xl mb-2 text-3xl font-bold tracking-tight text-gray-900">23</h5>
                <p className="m-1 rounded-3xl mb-3 font-normal text-gray-500 dark:text-gray-400">Order Process</p>

            </div>

        </div>
    );
};

export default Cards;