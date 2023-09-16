import React from 'react'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { BsFillPlayFill } from 'react-icons/bs'
import { PiRepeatFill, PiShuffle } from 'react-icons/pi'
import { HiMiniPause } from 'react-icons/hi2'

export const AudioControll = () => {
  return (
    <div className='flex flex-col items-center justify-center text-xl text-neutral-400'>
      <div className='flex items-center gap-4'>
        <div className='hover:text-neutral-100'>
          <PiShuffle />
        </div>
        <div className='text-4xl hover:text-neutral-100'>
          <BiSkipPrevious />
        </div>
        <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full aspect-square text-2xl hover:scale-105'>
          <BsFillPlayFill />
          {/* <HiMiniPause /> */}
        </div>
        <div className='text-4xl hover:text-neutral-100'>
          <BiSkipNext />
        </div>
        <div className='hover:text-neutral-100'>
          <PiRepeatFill />
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 w-4/5'>
        <span className='text-xs text-neutral-400'>1:00</span>
        <input type="range" defaultValue={25}/>
        <span className='text-xs text-neutral-400'>4:24</span>
      </div>
    </div>
  )
}
