import React from 'react'
import { FrequentlyPlayedCard } from './FrequentlyPlayedCard'

export const HeroSection = () => {
  return (
    <div>
      <h2 className='text-3xl text-neutral-100 mb-4'>Good afternoon</h2>
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <FrequentlyPlayedCard />
        <FrequentlyPlayedCard />
        <FrequentlyPlayedCard />
        <FrequentlyPlayedCard />
        <FrequentlyPlayedCard />
        <FrequentlyPlayedCard />
      </div>
    </div>
  )
}
