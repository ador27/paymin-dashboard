import React from 'react';
import Cards from './Cards';
import Chart from './Chart';
import SideNav from './SideNav';
import User from './User';

const Dashboard = () => {
    return (
        <div className='bg-blue-100'>
            <SideNav />
            <Cards />
            <Chart />
            <User />


        </div>
    );
};

export default Dashboard;