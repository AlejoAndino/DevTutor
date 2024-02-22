import React from 'react';
import Image from 'next/image';

const WelcomeBanner = () => {
  return (
    <div className='bg-white flex '>
      <Image src='/panda.png' width={120} height={120} alt='panda' />
      <h1>Welcome to DevTutor Academy</h1>
      <h2>Explore, Learn, and Build All Real Life Projects</h2>
    </div>
  )
}

export default WelcomeBanner;