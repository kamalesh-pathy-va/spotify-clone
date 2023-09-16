import React, { useEffect } from 'react'
import { ArtistBanner } from './ArtistBanner'
import { Topnav } from '../../components/Topnav'

import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { PopularSongListItem } from './PopularSongListItem';
import { useSelector } from 'react-redux';
import { ArtistPickCard } from './ArtistPickCard';
import { CatogorySections } from '../../components/CatogorySectioins';
import { OnTour } from './OnTour';
import { AboutArtist } from './AboutArtist';

export const ArtistPage = () => {
  const contentWidth = useSelector(state => state.mainContent.mainWidth)

  return (
    <>
      <Topnav />
      <div className='flex flex-col h-[calc(100vh-164px)] main-container'>
        <ArtistBanner />

        <div className='flex gap-5 items-center p-5'>
          <button className='text-3xl text-neutral-900 bg-green-500 rounded-full p-3 aspect-square hover:scale-105 hover:bg-green-400'>
            <BsFillPlayFill className='ml-1' />
          </button>
          <button className='text-sm border-[1px] border-neutral-600 text-neutral-100 p-1 px-4 rounded-full hover:scale-105 hover:border-neutral-100'>
            <span>Follow</span>
          </button>
          <button className='text-3xl text-neutral-400 hover:scale-105 hover:text-neutral-300'>
            <BsThreeDots />
          </button>
        </div>

        <div className='flex flex-wrap gap-8 mx-6'>
          <div className={contentWidth>1080 ? 'w-1/2' : 'w-full' }>
            <h3 className='text-2xl text-neutral-100'>Popular</h3>
            {
              [...Array(5)].map((song, key) => <PopularSongListItem key={key} data={key + 1} />)
            }
            <button className='text-sm hover:underline'>See more</button>
          </div>
          <div className={contentWidth>1080 ? 'w-fit' : 'w-full' }>
            <h3 className='text-2xl text-neutral-100'>Artist pick</h3>
            <ArtistPickCard fullWidth={contentWidth < 1080} />
          </div>
        </div>
        
        <div className='flex flex-col mx-6 mt-10 gap-10 pb-28'>
          <CatogorySections title='Discography' />
          <CatogorySections />
          <OnTour />
          <CatogorySections />
          <AboutArtist />
        </div>
      </div>
    </>
  )
}
