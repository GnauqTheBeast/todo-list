import React from 'react';
import { NavLink } from 'react-router-dom';

interface IconButtonProps {
  to: string;
  ariaLabel: string;
  title?: string;
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ to, ariaLabel, title, icon }) => {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `flex items-center justify-center w-10 h-10 mx-10 rounded-md transition-colors ${
          isActive
            ? 'bg-slate-700 text-white'
            : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-slate-500'
        }`
      }
      aria-label={ariaLabel}
      title={title}
    >
      {icon}
    </NavLink>
  );
};

export default IconButton;