import React from 'react'

import { AiTwotonePushpin } from 'react-icons/ai'
import { HiSpeakerWave } from 'react-icons/hi2'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const LibraryItem = ({ album, key }) => {
  const nowPlaying = false; //Need to be replaced
  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);

  return (
    <Link to={album.itemURL}>
      <div id={key} className={`grid ${nowPlaying ? 'grid-cols-[3.5rem_auto_1rem]' : 'grid-cols-[3.5rem_auto]'} gap-3 hover:bg-neutral-800 p-2 rounded-md`}>
        <div className={`aspect-square
          ${album.type === 'Artist' ? 'rounded-full' : 'rounded-md'}
          overflow-hidden`}>
          <img src={album.imgUrl} alt={album.description} className='w-full aspect-square object-cover' />
        </div>
        {!sidenavCollpsed &&
          <div className='flex flex-col justify-around overflow-hidden'>
            <span>{album.name}</span>
            <div className='flex gap-2 items-center'>
              {album.pinned ? <AiTwotonePushpin className='text-green-500' /> : null}
              <span className='text-xs text-neutral-400'>{album.type}</span>
              {album.type === 'Artist' ? null :
                <>
                  <span className='text-sm text-neutral-400'> • </span>
                  <span className='text-xs text-neutral-400 truncate'>
                    {album.description}
                  </span>
                </>
              }
            </div>
          </div>
        }
        {
          nowPlaying & !sidenavCollpsed ?
            <div className='flex items-center text-green-500'><HiSpeakerWave /></div>
            :
            null
        }
        </div>
    </Link>
  )
}
