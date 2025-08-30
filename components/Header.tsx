
import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { MenuIcon } from './icons/MenuIcon';

const NavLink: React.FC<{ children: React.ReactNode; active?: boolean, onClick: () => void }> = ({ children, active = false, onClick }) => (
    <button
        onClick={onClick}
        className={`text-base px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0b1120] focus:ring-blue-500 ${active ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
        aria-pressed={active}
    >
        {children}
    </button>
);

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const [activeLink, setActiveLink] = useState('Sales Forecasting');
    const navItems = ['Sales Forecasting', 'Inventory Optimization', 'Customer Analysis'];

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 bg-[#060B18]">
      <div className="flex items-center space-x-4 md:space-x-8">
        <button className="lg:hidden text-gray-400 hover:text-white" onClick={onMenuClick}>
          <MenuIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-white">Demand Forecast</h1>
        <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map(item => (
                <NavLink 
                    key={item} 
                    active={activeLink === item}
                    onClick={() => setActiveLink(item)}
                >
                    {item}
                </NavLink>
            ))}
        </nav>
      </div>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#171e2f] border border-transparent focus:border-blue-500 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-32 sm:w-48"
        />
      </div>
    </header>
  );
};

export default Header;