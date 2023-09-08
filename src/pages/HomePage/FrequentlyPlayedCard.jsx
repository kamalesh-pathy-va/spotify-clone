import React from 'react'

import { GreenPlayButton } from '../../components/GreenPlayButton'

export const FrequentlyPlayedCard = () => {
  return (
    <div className='group flex items-center grow bg-neutral-700 bg-opacity-50 rounded-md overflow-hidden hover:bg-opacity-90 transition-all'>
      <img src="https://source.unsplash.com/random/300×302" alt=""
        className='aspect-square object-cover w-20'
      />
      <span className='ml-5 py-2 truncate'>You don't know me</span>
      <div className='mr-6 ml-auto'>
        <GreenPlayButton />
      </div>
    </div>
  )
}
