import React from 'react'

import { MdVerified } from 'react-icons/md'

export const ArtistBanner = () => {
  return (
    <div className='w-full bg-[url("https://source.unsplash.com/random/209×608")] bg-cover'>
      <div className='flex flex-col gap-4 p-6 pt-16 bg-black bg-opacity-20 text-neutral-100'>
        <div className='flex flex-col'>
          <span className='flex items-center gap-2'>
            <MdVerified className='text-2xl text-blue-500' />
            <span className='font-normal text-sm'>Verified Artist</span>
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>The Chainsmokers</h1>
        </div>
        <span className='font-normal text-base'>37,280,467 monthly listeners</span>
      </div>
    </div>
  )
}