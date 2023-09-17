import React, { useState } from 'react'

import { BsCheck2 } from 'react-icons/bs'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

import { useToggle } from '../../hooks/useToggle'

const DropdownButton = ({ text, active = false, btnAction = [() => { }] }) => {
  const handlClick = () => {
    btnAction.forEach(action => action());
  }

  return (
    <button className='flex items-center justify-between w-full pl-4 pr-2 py-2 hover:bg-neutral-600'
      onClick={handlClick}
    >
      <span>{ text }</span>
      {active ? <BsCheck2 className='text-green-500' /> : null}
    </button>
  )
}

export const Dropdown = () => {
  const [category, setCategory] = useState('Recents')
  const [toggleDropdown, setToggleDropdown] = useToggle(false)

  return (
    <div className='ml-auto z-10'>
      <button className='flex items-center gap-1 text-gray-300 hover:text-gray-100'
        onClick={setToggleDropdown}
      >
        <span>{category}</span> {toggleDropdown?<AiOutlineCaretUp />:<AiOutlineCaretDown />}
      </button>
      {toggleDropdown ?
        <div className='absolute mt-1 p-1 bg-neutral-700 text-neutral-300 flex flex-col items-start w-40'>
          <span className='text-xs px-4 py-2'>Sort by</span>
          <DropdownButton text="Recents"
            btnAction={[setToggleDropdown, () => setCategory("Recents")]}
            active={category==='Recents'}
          />
          <DropdownButton text="Recently Added"
            btnAction={[setToggleDropdown, () => setCategory("Recently Added")]}
            active={category==='Recently Added'}
          />
          <DropdownButton text="Alphabetical"
            btnAction={[setToggleDropdown, () => setCategory("Alphabetical")]}
            active={category==='Alphabetical'}
          />
          <DropdownButton text="Creator"
            btnAction={[setToggleDropdown, () => setCategory("Creator")]}
            active={category==='Creator'}
          />
        </div>
        :
        null
      }
    </div>
  )
}