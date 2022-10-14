import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            "name": "9:00",
            "Mobile Browser": 450,
            "Desktop": 350
        },
        {
            "name": "11:00",
            "Mobile Browser": 700,
            "Desktop": 450
        },
        {
            "name": "13:00",
            "Mobile Browser": 600,
            "Desktop": 380
        },
        {
            "name": "15:00",
            "Mobile Browser": 550,
            "Desktop": 350
        },
        {
            "name": "17:00",
            "Mobile Browser": 189,
            "Desktop": 400
        }
    ]
    const lineData = [
        {
            "name": "Jan",
            "Consumer Goods": 400,
            "Gadget": 240,
            "amt": 240
        },
        {
            "name": "Feb",
            "Consumer Goods": 300,
            "Gadget": 180,
            "amt": 220
        },
        {
            "name": "Mar",
            "Consumer Goods": 200,
            "Gadget": 680,
            "amt": 290
        },
        {
            "name": "Apr",
            "Consumer Goods": 270,
            "Gadget": 398,
            "amt": 200
        },
        {
            "name": "May",
            "Consumer Goods": 190,
            "Gadget": 480,
            "amt": 211
        },
        {
            "name": "Jun",
            "Consumer Goods": 230,
            "Gadget": 380,
            "amt": 200
        },
        {
            "name": "Jul",
            "Consumer Goods": 390,
            "Gadget": 430,
            "amt": 210
        },
        {
            "name": "Aug",
            "Consumer Goods": 390,
            "Gadget": 430,
            "amt": 200
        },
        {
            "name": "Sep",
            "Consumer Goods": 349,
            "Gadget": 400,
            "amt": 210
        },
        {
            "name": "Oct",
            "Consumer Goods": 390,
            "Gadget": 430,
            "amt": 210
        },
        {
            "name": "Nov",
            "Consumer Goods": 340,
            "Gadget": 400,
            "amt": 210
        },
        {
            "name": "Dec",
            "Consumer Goods": 490,
            "Gadget": 300,
            "amt": 200
        }
    ]
    return (
        <div className='ml-96 grid lg:grid-cols-2 sm:grid-cols-1'>
            <div>
                <h1 className='m-8 text-xl text-bold'>Daily Visits</h1>
                <BarChart width={480} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mobile Browser" fill="#2DD4BF" />
                    <Bar dataKey="Desktop" fill="#6366F1" />
                </BarChart>
            </div>

            <div>
                <h1 className='m-8 text-xl text-bold'>Income</h1>
                <LineChart width={480} height={250} data={lineData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Consumer Goods" stroke="#8C5FF6" />
                    <Line type="monotone" dataKey="Gadget" stroke="#D946EF" />
                </LineChart>
            </div>

        </div>
    );
};

export default Chart;