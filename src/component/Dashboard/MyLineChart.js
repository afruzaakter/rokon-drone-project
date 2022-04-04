import React from 'react';
import { Area, AreaChart,   CartesianGrid,   Line,  LineChart,    Tooltip, XAxis, YAxis } from 'recharts';
import './MyChart.css'
const MyLineChart = () => {
    const data = [
        {
          month: 'Mar',
          investment: 100000,
          sell: 241,
          revenue: 10401,
        },
        {
          month: 'Apr',
          investment: 200000,
          sell: 776,
          revenue: 67401,
        },
        {
          month: 'May',
          investment: 500000,
          sell: 421,
          revenue: 24401,
        },
        {
          month: 'Jun',
          investment: 600000,
          sell: 601,
          revenue: 50500,
        },
        {
          month: 'Jul',
          investment: 700000,
          sell: 741,
          revenue: 42401,
        },
        {
          month: 'Aug',
          investment: 100000,
          sell: 541,
          revenue: 10801,
        },
        {
          month: 'Sep',
          investment: 890000,
          sell: 741,
          revenue: 50401,
        },
      ];
    return (
      <div className='container'>
          
       <div className='d-flex justify-content-around chart-style mt-5'>
           <div >
             <h2 className='mb-5'>Month Wise Sell</h2>
           <LineChart width={500} height={400} data={data}>
          
           <Line dataKey={'revenue'}  ></Line>
           <Line dataKey={'investment'}  ></Line>
            <Line dataKey={'sell'}></Line>
           <XAxis dataKey={'month'}></XAxis>   
           <YAxis ></YAxis>
           <Tooltip></Tooltip>   
           <CartesianGrid></CartesianGrid>
       </LineChart>
       
           </div>
               <div>
                 <h2 className='mb-5'>Investment VS Revenue</h2>
                    <AreaChart width={500} height={400} data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
          </div>
       </div>
      </div>
    );
};

export default MyLineChart;