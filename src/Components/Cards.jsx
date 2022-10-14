import React from 'react';

const Cards = () => {
    return (
        <div>
            <form className='ml-96'>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block pl-10 w-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search by Name or Data" required="" />
                </div>
            </form>

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
        </div>
    );
};

export default Cards;