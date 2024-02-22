import React from 'react'
import { Search } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='p-4 bg-white flex justify-between'>
      <div className='flex items-center border rounded-md pl-2'>
        <Search className='h-5 w-5' />
        <input className='p-2 outline-none' type='text' placeholder='Search...' />
      </div>
      <div className='flex items-center gap-4'>
      <BellRing className='text-gray-500'/>
      <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Header;