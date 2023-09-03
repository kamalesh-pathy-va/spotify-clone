import React from 'react'

import { NavLink } from './NavLink'
import { Library } from './Library'
import { GoHome } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'

export const Sidenav = () => {
  return (
    <div className='m-2 mr-0 mb-0 flex flex-col gap-2'>
      <div className='home-search p-2 px-4 flex flex-col gap-2 rounded-md bg-neutral-900'>
        <NavLink Icon={GoHome} text='Home' pageUrl='/' />
        <NavLink Icon={FiSearch} text='Search' pageUrl='/search' />
      </div>
      <Library />
    </div>
  )
}
