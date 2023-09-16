import React, { useEffect } from 'react'
import { Topnav } from '../../components/Topnav'
import { CatogorySections } from '../../components/CatogorySectioins'
import { BrowseAll } from './BrowseAll'

export const SearchPage = () => {

  useEffect(() => {
    document.title = 'Search - Spotify Clone'
  }, [])

  return (
    <>
      <Topnav search />
      <div className='flex flex-col gap-10 h-[calc(100vh-164px)] p-4 px-6 main-container'>
        <CatogorySections title='Recent searches' />
        <BrowseAll />
      </div>
    </>
  )
}
