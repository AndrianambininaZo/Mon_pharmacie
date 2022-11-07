import React from 'react';
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Janvier',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Fevrier',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mars',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Avril',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Mai',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Juin',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
       
    ];
    return (
        <div className='chart'>
            <ResponsiveContainer width="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;