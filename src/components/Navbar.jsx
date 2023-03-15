import React from 'react'
import { mike } from '../assets'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white z-50 sticky top-0 h-[80px]'>
      <div>
      <img src={mike} alt="" className='h-12 w12' />
      </div>
      <div className='mr-4 flex gap-6'>
        <a href="#about" className='text-2xl'>About</a>
        <a href="#projects" className='text-2xl'>Projects</a>
        <a href="#contacts" className='text-2xl'>Contacts</a>
      </div>
    </div>
  )
}

export default Navbar