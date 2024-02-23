import React from 'react';
import Image from 'next/image';

const WelcomeBanner = () => {
  return (
    <div className='bg-white flex items-center rounded-xl md:h-48 '>
      <Image src='/panda.png' width={140} height={140} alt='panda' />
      <div className='ml-3'>
        <h1 className='text-3xl font-bold'>Welcome to <span className='text-primary'>DevTutor</span> Academy</h1>
        <h2 className='text-gray-600 font-medium mt-2'>Explore, Learn, and Build All Real Life Projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner;