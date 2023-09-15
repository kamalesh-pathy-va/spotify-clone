import React from 'react'
import { TourDetails } from './TourDetails'

export const OnTour = () => {
  return (
    <div>
      <div className='flex w-full justify-between items-center'>
        <h2 className='text-2xl mb-4'>On Tour</h2>
        <p className='text-sm text-neutral-400'>View all upcomming concerts</p>
      </div>
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <TourDetails />
        <TourDetails />
        <TourDetails />
        <TourDetails />
        <TourDetails />
        <TourDetails />
      </div>
    </div>
  )
}
