
import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-[#060B18] p-6 rounded-lg shadow-lg h-72 sm:h-80 flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;