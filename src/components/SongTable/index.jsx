import React from 'react'
import { useSelector } from 'react-redux';
import { SongTableItem } from './SongTableItem';
import { HiOutlineClock } from 'react-icons/hi2'

export const SongTable = ({pagetype = 'playlist'}) => {
  const scrollTop = useSelector(state => state.mainContent.mainTop)
    
  return (
    <div className='flex flex-col mb-20'>
      <div className={`sticky top-[60px] grid 
       ${pagetype==='playlist' ? 'grid-cols-[5%_45%_20%_15%_5%_5%_5%]':'grid-cols-[5%_auto_5%_5%_5%]'}
       text-neutral-300 border-b-[1px] mb-4 py-1 border-neutral-300
       ${scrollTop > 385 ? 'bg-neutral-800 px-6' : 'mx-6'}`}
      >
        <span className='text-center'>#</span>
        <span>Title</span>
        {pagetype === 'playlist' &&
          <span>Album</span>
        }
        {pagetype === 'playlist' &&
          <span className='col-span-2'>Date added</span>
        }
        <span className={`flex justify-end items-center text-lg ${!(pagetype==='playlist') && 'col-span-2'}`}><HiOutlineClock /></span>
      </div>
      <div>
        {
          [...Array(40)].map((item, key) => <SongTableItem data={key+1} key={key} pagetype={pagetype} />)
        }
      </div>
    </div>
  )
}
