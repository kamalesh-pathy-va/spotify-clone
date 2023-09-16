import React, { useEffect } from 'react'
import { Topnav } from '../../components/Topnav'
import { HeroSection } from './HeroSection'
import { CatogorySections } from '../../components/CatogorySectioins'

export const HomePage = () => {

  useEffect(() => {
    document.title = 'Home - Spotify Clone'
  }, [])

  return (
    <>
      <Topnav />
      <div className='flex flex-col gap-10 h-[calc(100vh-164px)] p-4 px-6 main-container'>
        <HeroSection />
        <CatogorySections />
        <CatogorySections />
        <CatogorySections />
        <CatogorySections />
      </div>
    </>
  )
}
