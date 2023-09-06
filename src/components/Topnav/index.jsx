import React, { useEffect } from 'react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CgArrowDownO } from 'react-icons/cg'

const HistoryButton = ({ type, Icon, disable=false }) => {
  return (
    <button id={type} className={`bg-neutral-950 bg-opacity-80 p-2 rounded-full ${disable && 'cursor-not-allowed opacity-70'}`}>
      <Icon />
    </button>
  )
}

const HistoryButtons = () => {
  return (
    <div className='flex gap-2'>
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

export const Topnav = () => {
  return (
    <div className='sticky top-0 bg-neutral-800 w-full h-[60px] flex items-center justify-between px-4 rounded-t-md'>
      <HistoryButtons />
      <AccountButtons />
    </div>
  )
}
