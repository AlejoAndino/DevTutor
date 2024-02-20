import React from 'react';
import { BookOpen } from "lucide-react";
import { BadgeCheck } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';


const
  SideNav = () => {
    const menu = [
      {
        id: 1,
        name: "All Courses",
        icon: BookOpen
      },
      {
        id: 2,
        name: "Membership",
        icon: BadgeCheck,
      },
      {
        id: 3,
        name: "Be Instructor",
        icon: GraduationCap,
      },
    ]
    return (
      <div className='p-5 bg-white shadow-sm h-screen border'>
        <Image className='mb-11' src={'/logo.png'} alt='logo' width={180} height={180} />
        {/* Menu List */}
        <hr />
        <div>
          {menu.map((item, index) => (
            <div className='group flex gap-3 mt-1 p-3 text-[20px] items-center text-gray-700 cursor-pointer hover:bg-primary rounded-md hover:text-white transition-all ease-in-out duration-300' key={item.id}>
              <item.icon className='group-hover:animate-bounce' />
              <h2>
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default SideNav;