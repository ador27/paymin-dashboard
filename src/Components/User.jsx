import React from 'react';

const User = () => {
    return (

        <div>
            <div className='ml-96 m-4 rounded-3xl p-4 max-w-2xl bg-white border border-gray-200 shadow-md'>
                <h5 className="m-1 rounded-3xl mb-2 text-3xl font-bold text-gray-900">Users</h5>
                <div className='m-2 grid lg:grid-cols-5 text-black'>
                    <p className='font-semibold'>James Smith</p>
                    <p className='font-semibold'>$65.00</p>
                    <p>Sept 10 2021</p>
                    <p>#B3231</p>
                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center">Complete</button>
                </div>

            </div>
        </div>


    );
};

export default User;
