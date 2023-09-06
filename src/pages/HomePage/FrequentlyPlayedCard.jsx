import React from 'react'

import { BsFillPlayFill } from 'react-icons/bs'

export const FrequentlyPlayedCard = () => {
  return (
    <div className='group flex items-center grow bg-neutral-700 bg-opacity-50 rounded-md overflow-hidden hover:bg-opacity-90 transition'>
      <img src="https://source.unsplash.com/random/300×300" alt=""
        className='aspect-square object-cover w-20'
      />
      <span className='ml-5 py-2 truncate'>You don't know me</span>
      <div className='flex items-center justify-center ml-auto mr-6 bg-green-500 w-12 aspect-square rounded-full invisible group-hover:visible'>
        <BsFillPlayFill className='text-neutral-900 text-3xl ml-1' />
      </div>
    </div>
  )
}
