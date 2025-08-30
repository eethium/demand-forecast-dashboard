
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { LineChartData } from '../types';

const data: LineChartData[] = [
  { name: 'Jan', forecast: 4000, actual: 2400 },
  { name: 'Feb', forecast: 4200, actual: 2900 },
  { name: 'Mar', forecast: 4800, actual: 3500 },
  { name: 'Apr', forecast: 5100, actual: 4200 },
  { name: 'May', forecast: 5500, actual: 4000 },
  { name: 'Jun', forecast: 6200, actual: 4800 },
  { name: 'Jul', forecast: 6800, actual: 5100 },
  { name: 'Aug', forecast: 7200, actual: 5500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0b1120] p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-semibold text-sm mb-1">{label}</p>
          <p className="text-sm" style={{ color: payload[0].color }}>{`Forecast: ${payload[0].value}`}</p>
          <p className="text-sm" style={{ color: payload[1].color }}>{`Actual: ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

const SalesForecastChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} hide />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="forecast" stroke="#60A5FA" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="actual" stroke="#60A5FA" strokeWidth={2} strokeDasharray="5 5" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesForecastChart;
