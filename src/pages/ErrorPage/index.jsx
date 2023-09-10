import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import kamaleshpathy from '../../assets/images/kamaleshpathy-name.png'

export const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Page not found'
  }, [])

  return (
    <div className='flex items-center justify-center flex-col h-full gap-8'>
      <img src={kamaleshpathy} alt="" className='w-1/6'/>
      <div className='flex items-center justify-center flex-col gap-2'>
        <h1 className='text-5xl font-extrabold text-neutral-100'>Page not found</h1>
        <p className='text-sm text-neutral-500'>We can't seem to find the page you are looking for</p>
      </div>
      <button onClick={() => navigate('/')}
        className='bg-neutral-100 px-8 py-3 rounded-full text-neutral-900'
      >
        Home
      </button>
    </div>
  )
}
