import React from 'react';
import { Area, AreaChart, Bar,  CartesianGrid, ComposedChart,  Line,  Scatter,  Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'SuplierA',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'SuplierB',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'SuplierC',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'SuplierD',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'SuplierE',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'SuplierF',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'SuplierG',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
    return (
      <div className='container'>
          <h1>This is chart</h1>
       <div className='d-flex justify-content-around'>
           <div>
           <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
           </div>
               <div>
                    <AreaChart width={500} height={400} data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
          </div>
       </div>
      </div>
    );
};

export default MyLineChart;