import React, { HTMLAttributes } from 'react';

interface StoryBoxType {
  time: string;
  children?: React.ReactNode;
}

export function StoryBox({ time, children }: StoryBoxType) {
  return (
    <>
      <div className="flex flex-col text-white">
        <p className='text-xs'>ano</p>
        <p className='text-lg'>{time}</p>
      </div>
      <div className="flex items-center list-none text-white max-w-2xl">
        <div className='bg-black p-8 rounded-md font-light text-sm'>
          {children}
        </div>
      </div>
    </>
  )
}