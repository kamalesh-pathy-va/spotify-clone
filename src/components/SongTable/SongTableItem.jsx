import React from 'react'

import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

export const SongTableItem = ({ data, key, pagetype = 'playlist' }) => {
  return (
    <div className={`group grid 
    ${pagetype === 'playlist' ? 'grid-cols-[5%_45%_20%_15%_5%_5%_5%]' : 'grid-cols-[5%_auto_5%_5%_5%]'}
      mx-6 py-1 items-center font-normal rounded-sm hover:bg-neutral-400 hover:bg-opacity-60`}
      id={key}
    >

      <span className='text-center flex justify-center'>
        <span className='group-hover:hidden'>{data}</span>
        <span className='hidden group-hover:block text-xl'><BsFillPlayFill /></span>
      </span>

      <div className='flex gap-4'>
        <div className='w-11 aspect-square overflow-hidden'>
          <img src="https://source.unsplash.com/random/209×209" alt=""
            className='aspect-square object-cover'
          />
        </div>
        <div className='flex flex-col justify-between w-fit overflow-hidden'>
          <span className='truncate font-bold'>Song name</span>
          <span className='truncate text-sm text-neutral-300 group-hover:text-neutral-100'>Artist name1, Artist name2</span>
        </div>
      </div>

      {pagetype === 'playlist' &&
        <span className='text-neutral-300 group-hover:text-neutral-100 truncate'>Album name</span>
      }
      {pagetype === 'playlist' &&
        <span className='text-neutral-300'>26 Oct 2001</span>
      }
      <span className='flex items-center justify-end text-xl text-neutral-300 invisible group-hover:visible hover:text-neutral-100'><AiOutlineHeart /></span>
      <span className='text-right text-neutral-300'>1:59</span>
      <span className='flex items-center justify-center text-xl text-neutral-300 invisible group-hover:visible hover:text-neutral-100'><BsThreeDots /></span>
    </div>
  )
}
