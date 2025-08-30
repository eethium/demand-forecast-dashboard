import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { BarChartData } from '../types';

const data: BarChartData[] = [
    { name: 'Jan', sales: 4000 }, { name: '', sales: 3800 }, { name: '', sales: 4200 }, { name: '', sales: 4100 },
    { name: 'Feb', sales: 3000 }, { name: '', sales: 3200 }, { name: '', sales: 2900 }, { name: '', sales: 3100 },
    { name: 'Mar', sales: 5000 }, { name: '', sales: 5300 }, { name: '', sales: 4800 }, { name: '', sales: 5100 },
    { name: 'Apr', sales: 4500 }, { name: '', sales: 4700 }, { name: '', sales: 4600 }, { name: '', sales: 4800 },
    { name: 'May', sales: 6000 }, { name: '', sales: 5800 }, { name: '', sales: 6300 }, { name: '', sales: 6100 },
    { name: 'Jun', sales: 5500 }, { name: '', sales: 5700 }, { name: '', sales: 5600 }, { name: '', sales: 5900 },
    { name: 'Jul', sales: 7000 }, { name: '', sales: 7200 }, { name: '', sales: 6800 }, { name: '', sales: 7100 },
    { name: 'Aug', sales: 7500 }, { name: '', sales: 7300 }, { name: '', sales: 7800 }, { name: '', sales: 7600 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0b1120] p-2 border border-gray-700 rounded-md">
        <p className="text-white text-sm">{`Sales: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const HistoricalSalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} interval={3} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} hide />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(96, 165, 250, 0.2)' }}/>
        <Bar dataKey="sales" fill="#60A5FA" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoricalSalesChart;