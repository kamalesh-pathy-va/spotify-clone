import React from 'react'
import { GreenPlayButton } from '../GreenPlayButton'

export const Card = ({dec="Description Lorem ipsum dolor sit amet."}) => {
  return (
    <div className='group max-w-[12rem] bg-neutral-800 p-4 rounded-md flex flex-col gap-3 cursor-pointer hover:bg-neutral-700 transition-all'>
      <div className='relative overflow-hidden rounded-md'>
        <img src="https://source.unsplash.com/random/300×301" alt=""
          className='w-full aspect-square object-cover'
        />
        <div className='absolute bottom-0 right-0 p-3 translate-y-4 opacity-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all'>
          <GreenPlayButton />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg text-neutral-100'>Title</h3>
        <p className='text-sm line-clamp-2 text-neutral-400 leading-5'>{dec}</p>
      </div>
    </div>
  )
}