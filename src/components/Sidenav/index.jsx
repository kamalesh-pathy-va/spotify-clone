import React from 'react'

import { NavLink } from './NavLink'
import { Library } from './Library'
import { GoHome } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'

export const Sidenav = () => {
  return (
    <div className='sidenav m-2 flex flex-col gap-2'>
      <div className='home-search p-2 px-4 flex flex-col gap-2 rounded-md bg-neutral-900'>
        <NavLink Icon={GoHome} text='Home' />
        <NavLink Icon={FiSearch} text='Search' />
      </div>
      <Library />
    </div>
  )
}
