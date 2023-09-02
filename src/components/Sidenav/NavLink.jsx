import React from 'react'

export const NavLink = ({ Icon, text }) => {
  return (
    <button className='group flex gap-5 w-full p-2 text-gray-300'>
      <Icon className='text-2xl text-gray-300 group-hover:text-gray-100 hover:text-gray-100' />
      <span className='transition duration-100 ease-linear group-hover:text-gray-100'>{text}</span>
    </button>
  );
}