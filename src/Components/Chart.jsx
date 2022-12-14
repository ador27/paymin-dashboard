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
            "Consumer Goods": 200,
            "Gadget": 140,
            "Others": 90
        },
        {
            "name": "Feb",
            "Consumer Goods": 500,
            "Gadget": 380,
            "Others": 320
        },
        {
            "name": "Mar",
            "Consumer Goods": 600,
            "Gadget": 680,
            "Others": 690
        },
        {
            "name": "Apr",
            "Consumer Goods": 470,
            "Gadget": 728,
            "Others": 600
        },
        {
            "name": "May",
            "Consumer Goods": 490,
            "Gadget": 580,
            "Others": 311
        },
        {
            "name": "Jun",
            "Consumer Goods": 730,
            "Gadget": 440,
            "Others": 415
        },
        {
            "name": "Jul",
            "Consumer Goods": 750,
            "Gadget": 430,
            "Others": 390
        },
        {
            "name": "Aug",
            "Consumer Goods": 790,
            "Gadget": 530,
            "Others": 400
        },
        {
            "name": "Sep",
            "Consumer Goods": 829,
            "Gadget": 600,
            "Others": 410
        },
        {
            "name": "Oct",
            "Consumer Goods": 470,
            "Gadget": 630,
            "Others": 710
        },
        {
            "name": "Nov",
            "Consumer Goods": 510,
            "Gadget": 670,
            "Others": 750
        },
        {
            "name": "Dec",
            "Consumer Goods": 950,
            "Gadget": 690,
            "Others": 600
        }
    ]
    return (
        <div className='ml-96 flex flex-row ...'>
            <div>
                <h1 className='m-8 text-xl text-bold'>Daily Visits</h1>
                <BarChart width={380} height={250} data={data}>
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
                <LineChart width={590} height={250} data={lineData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Consumer Goods" stroke="#8C5FF6" />
                    <Line type="monotone" dataKey="Gadget" stroke="#D946EF" />
                    <Line type="monotone" dataKey="Others" stroke="#F97316" />
                </LineChart>
            </div>

        </div>
    );
};

export default Chart;