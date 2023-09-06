import React from 'react'
import { Topnav } from '../../components/Topnav'
import { HeroSection } from './HeroSection'

export const HomePage = () => {
  return (
    <>
      <Topnav />
      <div className='h-[calc(100vh-140px)] p-4 main-container'>
        <HeroSection />
      </div>
    </>
  )
}
