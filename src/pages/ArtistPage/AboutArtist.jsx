import React from 'react'

export const AboutArtist = () => {
  return (
    <div>
      <h2 className='text-2xl mb-2'>About</h2>
      <div className='lg:w-full xl:w-3/4 bg-[url("https://source.unsplash.com/random/209×609")] bg-cover rounded-lg'>
        <div className='relative h-[35rem] bg-neutral-900 bg-opacity-40'>
          <div className='absolute top-0 right-0 m-5 flex flex-col items-center justify-center bg-blue-600 p-3 aspect-square rounded-full'>
            <span className='text-3xl'>#20</span>
            <span className='text-xs font-normal'>in the world</span>
          </div>
          <div className='absolute bottom-5 left-5 max-w-[45rem]'>
            <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos eius possimus asperiores hic esse molestiae voluptatibus praesentium voluptate, impedit consequuntur repudiandae consectetur placeat vel, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!l, facilis officia repellat illo accusamus!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
