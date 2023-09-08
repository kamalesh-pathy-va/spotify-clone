import React, { useEffect, useState } from 'react'

import { Card } from './Card'
import { useSelector } from 'react-redux';

export const CatogorySections = () => {
  const mainWidth = useSelector(state => state.mainContent.mainWidth)
  const [noOfCards, setNoOfCards] = useState(6);

  useEffect(() => {
    console.log(mainWidth);

    if (mainWidth > 1130) {
      setNoOfCards(6);
    }
    if (mainWidth < 500) {
      setNoOfCards(2);
    } else if (mainWidth < 700) {
      setNoOfCards(3);
    } else if (mainWidth < 930) {
      setNoOfCards(4);
    } else if (mainWidth < 1130) {
      setNoOfCards(5);
    }
  }, [mainWidth]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-between items-center'>
        <h2 className='text-2xl'>Section name</h2>
        <p className='text-sm text-neutral-400'>Show all</p>
      </div>
      <div className={`flex justify-between gap-5 w-full`}>
        {
          [...Array(noOfCards)].map((e, key) => <Card />)
        }
      </div>
    </div>
  )
}
