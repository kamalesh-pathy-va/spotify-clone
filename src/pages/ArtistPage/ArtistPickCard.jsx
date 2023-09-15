import React from 'react'

export const ArtistPickCard = ({fullWidth = false}) => {
  return (
    <div className='flex gap-2'>
      <div>
        <img src="https://source.unsplash.com/random/209×209" alt=""
          className='w-24 aspect-square object-cover rounded-md'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex bg-neutral-100 text-neutral-900 p-1 rounded-full gap-2 items-center'>
          <img src="https://source.unsplash.com/random/210×210" alt=""
            className='w-6 aspect-square object-cover rounded-full'
          />
          <span className={`truncate ${fullWidth?'w-max': 'w-40'} text-sm`}>Message from artist which is a bit long</span>
        </div>
        <div className={`flex flex-col ${fullWidth?'w-max': 'w-40'} gap-2`}>
          <span className='leading-6'>Some playlist name - Artist name</span>
          <span className='text-neutral-500 text-sm'>Playlist</span>
        </div>
      </div>
    </div>
  )
}

