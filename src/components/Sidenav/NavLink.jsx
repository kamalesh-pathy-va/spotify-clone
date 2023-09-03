import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavLink = ({ Icon, text, pageUrl }) => {
  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);
  return (
    <Link to={pageUrl}>
      <button className={`group flex gap-5 w-full p-2 text-gray-300 ${sidenavCollpsed?'justify-center':'justify-normal'}`}>
        <Icon className='text-2xl text-gray-300 group-hover:text-gray-100 hover:text-gray-100' />
        {!sidenavCollpsed &&
          <span className='transition duration-100 ease-linear group-hover:text-gray-100'>{text}</span>
        }
      </button>
    </Link>
  );
}