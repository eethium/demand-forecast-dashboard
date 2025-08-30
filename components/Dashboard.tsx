
import React from 'react';
import HistoricalSalesChart from './HistoricalSalesChart';
import SalesForecastChart from './SalesForecastChart';
import ForecastReports from './ForecastReports';
import ChartCard from './ChartCard';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 lg:gap-y-4 h-full">
      <ChartCard title="Historical Sales">
        <HistoricalSalesChart />
      </ChartCard>
      <ChartCard title="Sales Forecast">
        <SalesForecastChart />
      </ChartCard>
      <div className="lg:col-span-2">
        <ForecastReports />
      </div>
    </div>
  );
};

export default Dashboard;