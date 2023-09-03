import React from 'react'

import { VscLibrary } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoGridOutline } from 'react-icons/io5'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

import { useDispatch, useSelector } from 'react-redux'
import { useToggle } from '../../hooks/useToggle'
import { Dropdown } from './Dropdown'
import { LibraryItem } from './LibraryItem'

import {collapse, expand} from '../../features/sidenav/sidenavSlice'

import {libraries} from '../../data'

const RoundedButtonIconOnly = ({ Icon, btnAction=()=>{} }) => {
  return (
    <button className='group p-2 text-lg rounded-full transition duration-100 ease-linear hover:bg-neutral-700'
      onClick={btnAction}
    >
      <Icon />
    </button>
  )
};

const Chips = ({ text }) => {
  return (
    <button className='bg-neutral-800 text-sm font-medium px-4 py-1 rounded-full hover:bg-neutral-700'>
      {text}
    </button>
  )
};

export const Library = () => {
  const [showMoreSidenav, setshowMoreSidenav] = useToggle(false);
  const [toggleSearch, setToggleSearch] = useToggle(false);
  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);
  const dispatch = useDispatch();

  const albums = libraries();

  const handleNavCollpse = () => {
    sidenavCollpsed ?  dispatch(expand()) : dispatch(collapse());
  }

  return (
    <div className='library p-2 pb-0 pr-0 flex flex-col gap-2 rounded-md bg-neutral-900'>
      <div className={`flex ${sidenavCollpsed ? 'justify-center' : 'justify-between'} px-2`}>
        <button
          className='group flex gap-5 p-2 text-gray-300 transition duration-100 ease-linear hover:text-gray-100'
          onClick={() => handleNavCollpse()}
        >
          <VscLibrary className='text-2xl text-gray-300 group-hover:text-gray-100 hover:text-gray-100' />
          {!sidenavCollpsed &&
            <span className='group-hover:text-gray-100'>Your Library</span>
          }
        </button>
        {!sidenavCollpsed &&
          <div className='flex items-center'>
            <RoundedButtonIconOnly Icon={AiOutlinePlus} />
            {showMoreSidenav ? <RoundedButtonIconOnly Icon={IoGridOutline} /> : null}
            <RoundedButtonIconOnly Icon={showMoreSidenav ? HiArrowLeft : HiArrowRight} btnAction={setshowMoreSidenav} />
          </div>
        }
      </div>
      {!sidenavCollpsed &&
        <div className='flex py-2 gap-2 px-2'>
          <Chips text="Playlists" />
          <Chips text="Artists" />
          <Chips text="Albums" />
        </div>
      }
      <div className={`${sidenavCollpsed?'h-[calc(100vh-248px)]':'h-[calc(100vh-300px)]'} overflow-y-auto flex flex-col library-list`}>
        {!sidenavCollpsed &&
          <div className='flex w-full text-sm font-normal items-center px-2'>
            <button
              className={`group p-2 
              ${toggleSearch ? 'rounded-l-md' : 'rounded-full'}
              ${toggleSearch ? 'bg-neutral-700' : null}
              transition duration-100 ease-linear hover:bg-neutral-700`}
              onClick={setToggleSearch}
            >
              <FiSearch className='text-base' />
            </button>
            {toggleSearch ? <input type="text" placeholder='Search in Your Library' className='p-1 px-2 bg-neutral-700 rounded-r-md w-40' /> : null}
            <Dropdown />
          </div>
        }
        {
          albums.map((album, key) => {
            return <LibraryItem key={key} album={album} />
          })
        }
      </div>
    </div>
  )
}
