import React from 'react'

export const BrowseAllCard = () => {
  return (
    <div className='max-w-[12rem] relative aspect-square bg-emerald-600 overflow-hidden rounded-md cursor-pointer'>
      <h2 className='text-2xl p-4 line-clamp-2'>Live events near you</h2>
      <div className='w-24 absolute bottom-0 right-0 translate-x-4 translate-y-4'>
      <img src="https://source.unsplash.com/random/302×302" alt=""
        className='rotate-45 object-cover aspect-square'
        />
      </div>
    </div>
  )
}
