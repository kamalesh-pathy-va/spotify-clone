import React from 'react'

export const TourDetails = () => {
  return (
    <div className='group flex items-center grow overflow-hidden gap-4 cursor-pointer'>
      <div className='flex flex-col w-[4.5rem] aspect-square items-center justify-center bg-neutral-700 bg-opacity-60 rounded-md'>
        <span>Mont</span>
        <span className='text-3xl'>01</span>
      </div>
      <div className='flex flex-col justify-between h-full'>
        <span className='truncate'>City Name</span>
        <span className='truncate font-normal text-sm'>Artist names</span>
        <div className='flex gap-1 truncate font-normal text-xs text-neutral-400'>
          <span>Wed 11:00</span>
          <span>•</span>
          <span>Event Venue</span>
        </div>
      </div>
    </div>
  )
}
