import React, { useState, useEffect } from 'react'
import { BrowseAllCard } from './BrowseAllCard'
import { useSelector } from 'react-redux'

export const BrowseAll = () => {
  const mainWidth = useSelector(state => state.mainContent.mainWidth)
  const [gridCol, setGridCol] = useState('grid-cols-6')

  useEffect(() => {
    if (mainWidth > 1130) {
      setGridCol('grid-cols-6');
    }
    if (mainWidth < 500) {
      setGridCol('grid-cols-2');
    } else if (mainWidth < 700) {
      setGridCol('grid-cols-3');
    } else if (mainWidth < 930) {
      setGridCol('grid-cols-4');
    } else if (mainWidth < 1130) {
      setGridCol('grid-cols-5');
    }
  }, [mainWidth]);

  return (
    <div className='w-full flex flex-col gap-3'>
      <h2 className='text-2xl'>Browse all</h2>
      <div className={`grid ${gridCol} gap-5 w-full`}>
        {
          [...Array(66)].map((e, key) => <BrowseAllCard />)
        }
      </div>
    </div>
  )
}
