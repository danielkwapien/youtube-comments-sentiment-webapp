'use client';
import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VideoContext } from '@/app/page';

function Timelinechart() {

    const {timeline} = useContext(VideoContext);

    function formatDate(dateInput) {
        const date = new Date(dateInput);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    const formattedData = timeline.map(item => ({
        ...item,
        date: formatDate(item.date)
    }));
    
    return (
        <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <AreaChart
                width={500}
                height={400}
                data={formattedData}
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
                }}
            >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#6366f1" fill="#6366f1" />
            </AreaChart>
            </ResponsiveContainer>
    )
}

export default Timelinechart




