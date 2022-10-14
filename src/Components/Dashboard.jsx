import React from 'react';
import Cards from './Cards';
import Chart from './Chart';
import SideNav from './SideNav';

const Dashboard = () => {
    return (
        <div className='bg-blue-100'>
            <SideNav />
            <Cards />
            <Chart />


        </div>
    );
};

export default Dashboard;