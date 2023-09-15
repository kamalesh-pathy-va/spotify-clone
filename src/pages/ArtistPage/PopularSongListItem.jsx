import React from 'react'

import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export const PopularSongListItem = ({ key, data }) => {
  const contentWidth = useSelector(state => state.mainContent.mainWidth)
  return (
    <div className={`group grid ${contentWidth>550 ? 'grid-cols-[8%_auto_auto_8%_5%_8%]' : 'grid-cols-[15%_auto_15%_10%_15%]'} py-2 items-center font-normal rounded-sm hover:bg-neutral-400 hover:bg-opacity-60`}
      id={key}
    >

      <span className='text-center flex justify-center'>
        <span className='group-hover:hidden'>{data}</span>
        <span className='hidden group-hover:block text-xl'><BsFillPlayFill /></span>
      </span>

      <div className='flex gap-4 items-center w-fit overflow-hidden'>
        <div className='w-10 aspect-square overflow-hidden'>
          <img src="https://source.unsplash.com/random/209×209" alt=""
            className='aspect-square object-cover'
          />
        </div>
        <span className='truncate font-bold'>Song name</span>
      </div>
      {contentWidth>550 &&
        <span className='text-neutral-300 group-hover:text-neutral-100 truncate'>2,259,100,952</span>
      }
      <span className='flex items-center justify-center text-xl text-neutral-300 invisible group-hover:visible hover:text-neutral-100'><AiOutlineHeart /></span>
      <span className='text-center text-neutral-300'>1:59</span>
      <span className='flex items-center justify-center text-xl text-neutral-300 invisible group-hover:visible hover:text-neutral-100'><BsThreeDots /></span>
    </div>
  )
}
