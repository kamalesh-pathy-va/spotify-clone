import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Topnav } from '../../components/Topnav';
import { Banner } from '../../components/Banner';
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { SongTable } from '../../components/SongTable';

export const SongListPage = ({ pagetype = 'playlist' }) => {
  const { listid } = useParams();

  useEffect(() => {
    document.title = pagetype + listid;
  }, [])

  return (
    <>
      <Topnav />
      <div className='flex flex-col h-[calc(100vh-140px)] main-container'>
        <Banner bannertype={pagetype} />
        <div className='bg-gradient-to-b from-yellow-800 via-yellow-950 via-5% to-neutral-900 to-10%'>
          <div className='flex gap-5 items-center p-5'>
            <button className='text-3xl text-neutral-900 bg-green-500 rounded-full p-3 aspect-square hover:scale-105 hover:bg-green-400'>
              <BsFillPlayFill className='ml-1' />
            </button>
            {
              pagetype === 'album' && 
              <button className='text-4xl text-neutral-400 hover:scale-105 hover:text-neutral-300'>
                  <AiOutlineHeart />
              </button>
            }
            <button className='text-3xl text-neutral-400 hover:scale-105 hover:text-neutral-300'>
              <BsThreeDots />
            </button>
          </div>
          <SongTable pagetype={pagetype} />
        </div>
      </div>
    </>
  )
}
