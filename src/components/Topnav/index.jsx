import React from 'react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CgArrowDownO } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'

const HistoryButton = ({ type, Icon, disable=false }) => {
  return (
    <button id={type} className={`bg-neutral-950 bg-opacity-80 p-2 rounded-full ${disable && 'cursor-not-allowed opacity-70'}`}>
      <Icon />
    </button>
  )
}

const HistoryButtons = () => {
  return (
    <div className='flex gap-2 items-center'>
      <HistoryButton type='back' Icon={AiOutlineLeft} />
      <HistoryButton type='forward' Icon={AiOutlineRight} disable />
    </div>
  )
}

const AccountButtons = () => {
  return (
    <div className='text-sm flex items-center gap-2'>
      <button className='text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full'>
        Explore Premium
      </button>
      <button className='bg-neutral-900 flex items-center gap-1 px-3 py-1 rounded-full'>
        <CgArrowDownO />
        <span>Install App</span>
      </button>
      <button className='bg-neutral-900 p-1 rounded-full'>
        <img src="https://i.scdn.co/image/ab67757000003b82b46b72f0fcd4a3841e288a12" alt={`Profile picture of `}
          className='w-6 rounded-full object-cover aspect-square'
        />
      </button>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className='flex items-center bg-neutral-700 rounded-full overflow-hidden border-2 border-neutral-700 focus-within:border-neutral-100'>
      <FiSearch className='m-3 text-lg'/>
      <input type="text" className='p-3 pl-0 bg-neutral-700 outline-none font-normal w-80 text-sm placeholder:text-neutral-500' placeholder='What do you want to listen to?' />
    </div>
  )
}

export const Topnav = ({search=false}) => {
  return (
    <div className='sticky top-0 bg-neutral-800 w-full h-[60px] flex items-center justify-between px-4 rounded-t-md z-10'>
      <div className='flex gap-4'>
        <HistoryButtons />
        {
          search &&
          <SearchBar />
        }
      </div>
      <AccountButtons />
    </div>
  )
}
