import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            "name": "9:00",
            "Mobile Browser": 4000,
            "Desktop": 2400
        },
        {
            "name": "11:00",
            "Mobile Browser": 3000,
            "Desktop": 1398
        },
        {
            "name": "13:00",
            "Mobile Browser": 2000,
            "Desktop": 9800
        },
        {
            "name": "15:00",
            "Mobile Browser": 2780,
            "Desktop": 3908
        },
        {
            "name": "17:00",
            "Mobile Browser": 1890,
            "Desktop": 4800
        }
    ]
    return (
        <div className='ml-48'>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Mobile Browser" fill="#8884d8" />
                <Bar dataKey="Desktop" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default Chart;