import React from 'react'
import { AiOutlineHeart, AiOutlinePlaySquare } from 'react-icons/ai'
import { HiOutlineQueueList, HiOutlineSpeakerWave } from 'react-icons/hi2'
import { PiMicrophoneStageBold, PiPictureInPictureFill } from 'react-icons/pi'
import { LuMonitorSpeaker } from 'react-icons/lu'
import { AudioControll } from './AudioControll'

export const MusicPlayer = () => {
  return (
    <div className='w-full h-full p-4 grid grid-cols-[20%_auto_20%] gap-20 font-normal'>
      <div className='flex gap-4 items-center'>
        <img src="https://source.unsplash.com/random/209×208" alt=""
          className='w-16 aspect-square object-cover rounded-md'
        />
        <div className='flex flex-col justify-center items-start'>
          <span className='text-sm font-bold max-w-[10rem] truncate'>Song name</span>
          <span className='text-xs text-neutral-400 max-w-[10rem] truncate'>Artist1, Artist2</span>
        </div>
        <div className='text-xl text-neutral-300'>
          <AiOutlineHeart />
        </div>
      </div>
      <div>
        <AudioControll />
      </div>
      <div className='flex gap-3 text-xl justify-end items-center text-neutral-400'>
        <div className='hover:text-neutral-100'>
          <AiOutlinePlaySquare />
        </div>
        <div className='hover:text-neutral-100'>
          <PiMicrophoneStageBold />
        </div>
        <div className='hover:text-neutral-100'>
          <HiOutlineQueueList />
        </div>
        <div className='hover:text-neutral-100'>
          <LuMonitorSpeaker />
        </div>
        <div className='flex gap-2 items-center w-1/3 hover:text-neutral-100'>
          <div>
            <HiOutlineSpeakerWave />
          </div>
          <input type='range' className='accent-neutral-100' min={"0"} max={"100"} />
        </div>
        <div className='hover:text-neutral-100'>
          <PiPictureInPictureFill />
        </div>
      </div>
    </div>
  )
}
