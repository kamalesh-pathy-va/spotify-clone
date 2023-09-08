import React from 'react'

import { BsFillPlayFill } from 'react-icons/bs'

export const GreenPlayButton = () => {
  return (
    <div className='flex items-center justify-center bg-green-500 w-12 aspect-square rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 transition-all'>
      <BsFillPlayFill className='text-neutral-900 text-3xl ml-1' />
    </div>
  )
}
