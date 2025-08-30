
import React from 'react';
import { WarningIcon } from './icons/WarningIcon';
import { SnowflakeIcon } from './icons/SnowflakeIcon';
import { CubeIcon } from './icons/CubeIcon';
import { SparkleIcon } from './icons/SparkleIcon';

const ReportItem: React.FC<{ icon: React.ReactNode; text: string; }> = ({ icon, text }) => (
  <button className="w-full flex items-center bg-[#060B18] p-4 rounded-lg text-left transition-colors hover:bg-[#171e2f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#171e2f] focus:ring-blue-500">
    {icon}
    <p className="text-sm text-gray-200">{text}</p>
  </button>
);

const ForecastReports: React.FC = () => {
  return (
    <div className="bg-[#060B18] p-6 rounded-lg shadow-lg relative">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Forecast Reports</h3>
      </div>
      <div className="space-y-4">
        <ReportItem 
          icon={<WarningIcon className="h-8 w-8 text-white mr-6" />} 
          text="Stock-out risk for Product A in 3 weeks"
        />
        <ReportItem 
          icon={<SnowflakeIcon className="h-8 w-8 text-blue-400 mr-6" />} 
          text="Seasonal spike in demand expected next month"
        />
        <ReportItem 
          icon={<CubeIcon className="h-8 w-8 text-blue-400 mr-6" />} 
          text="Overproduction risk for Product B"
        />
      </div>
      <SparkleIcon className="absolute bottom-4 right-4 w-6 h-6" />
    </div>
  );
};

export default ForecastReports;