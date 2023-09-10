import React from 'react'

export const Banner = ({ bannertype = 'playlist' }) => {
  return (
    <div className='flex bg-gradient-to-b from-yellow-500 to-yellow-700 p-6 items-end'>
      <div className='mr-4 shadow-2xl min-w-max'>
        <img src="https://source.unsplash.com/random/209×208" alt=""
          className='w-60 aspect-square object-cover'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-sm text-neutral-300'>{
          bannertype.charAt(0).toUpperCase() + bannertype.slice(1)
          }
        </p>
        <h1 className='text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl'>You don't know me</h1>
        {bannertype == 'playlist' &&
          <p className='text-sm text-neutral-300'>This is a description it's there if it's there</p>
        }
        <div className='flex text-sm gap-1 items-center'>
          <img src="https://i.scdn.co/image/ab67757000003b82b46b72f0fcd4a3841e288a12" alt={`Profile picture of `}
            className='w-6 rounded-full object-cover aspect-square'
          />
          <span>Kamaleshpathy VA</span>
          <span>•</span>
          <span>3 likes</span>
          <span>•</span>
          <span>255 songs, </span>
          <span className='text-neutral-300'>about 14 hr</span>
        </div>
      </div>
    </div>
  )
}
