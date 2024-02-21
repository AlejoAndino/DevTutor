import React from 'react'
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='p-4 bg-white flex'>
      <div className='flex items-center border rounded-md pl-2'>
        <Search className='h-5 w-5'/>
        <input className='p-2 outline-none' type='text' placeholder='Search...' />
      </div>
    </div>
  )
}

export default Header;