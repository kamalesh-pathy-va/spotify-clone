import React from 'react'

import { AiTwotonePushpin } from 'react-icons/ai'
import { HiSpeakerWave } from 'react-icons/hi2'

export const LibraryItem = ({ album }) => {
  const nowPlaying = false; //Need to be replaced
  return (
    <div className={`grid ${nowPlaying ? 'grid-cols-[3.5rem_auto_1rem]':'grid-cols-[3.5rem_auto]'} gap-3 hover:bg-neutral-800 p-2 rounded-md cursor-pointer`}>
      <div className={`aspect-square min-w-fit
         ${album.type==='Artist'? 'rounded-full' : 'rounded-md'}
         overflow-hidden`}>
         <img src={album.imgUrl} alt={album.description} className='object-cover max-w-[3.5rem]' />
      </div>
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
      {
        nowPlaying ?
          <div className='flex items-center text-green-500'><HiSpeakerWave /></div>
          :
          null
      }
    </div>
  )
}


// <div className='flex gap-3 hover:bg-neutral-800 p-2 rounded-md cursor-pointer'>
//       <div className={`w-14 aspect-square min-w-fit
//         ${album.type==='Artist'? 'rounded-full' : 'rounded-md'}
//         overflow-hidden`}>
//         <img src={album.imgUrl} alt={album.description} className='object-cover max-w-[3.5rem]' />
//       </div>
      // <div className='flex flex-col justify-around w-4/6'>
      //   <span>{album.name}</span>
      //   <div className='flex gap-2 items-center'>
      //     {album.pinned ? <AiTwotonePushpin className='text-green-500' /> : null}
      //     <span className='text-xs text-neutral-400'>{album.type}</span>
      //     {album.type === 'Artist' ? null :
      //       <>
      //         <span className='text-sm text-neutral-400'> • </span>
      //         <span className='text-xs text-neutral-400 whitespace-nowrap w-3/5 overflow-hidden'>
      //           {album.description}
      //         </span>
      //       </>
      //     }
      //   </div>
      // </div>
    //   {
    //     nowPlaying ?
    //       <div className='flex items-center'><HiSpeakerWave /></div>
    //       :
    //       null
    //   }
    // </div>