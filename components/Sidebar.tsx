
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { CloseIcon } from './icons/CloseIcon';

const DateBox: React.FC<{ children: React.ReactNode; onClick: () => void; isActive: boolean }> = ({ children, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`w-12 h-12 flex items-center justify-center rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
        ${isActive ? 'bg-blue-500 text-white' : 'bg-[#171e2f] text-gray-400 hover:bg-[#2d3748]'}`}
        aria-pressed={isActive}
    >
        {children}
    </button>
);

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeDate, setActiveDate] = useState<string>('01');
  const dates = ['01', '02', '03', '04'];

  return (
    <aside 
      className={`w-64 bg-[#060B18] p-6 space-y-8 flex-shrink-0 transform transition-transform duration-300 ease-in-out lg:transform-none lg:relative fixed inset-y-0 left-0 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex justify-between items-center lg:hidden">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-4 hidden lg:block">Filters</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="product-region-select" className="text-sm text-gray-400 mb-2 block">Product</label>
            <div className="relative">
              <select id="product-region-select" className="w-full bg-[#171e2f] border border-transparent text-gray-300 px-4 py-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>Region</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white mb-3">Date</h3>
        <div className="grid grid-cols-4 gap-2 mb-3">
            {dates.map(date => (
              <DateBox key={date} onClick={() => setActiveDate(date)} isActive={activeDate === date}>
                  {date}
              </DateBox>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-4">Aug. 17, 2023</p>
        <button className="w-full bg-[#171e2f] border border-transparent hover:bg-[#2d3748] focus:bg-[#2d3748] text-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Custom Range
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
