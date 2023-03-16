import React from 'react'
import { herobg } from '../assets'
import { CV } from '../assets'
const Hero = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='ml-12 mt-24 '>
        <div className='w-5 h-5 rounded-full bg-purple-600'>
          <div className='h-48 w-1 bg-gradient-to-b from-purple-600 to-transparent ml-2'></div>
        </div>
        <div className='ml-8 flex flex-col gap-4 font-serif'>
        <h1 className='text-5xl '>Hey,I am <span className='text-purple-600'>Michael</span></h1>
        <h2>I develop Web applications and mobile applications and nice looking user interfaces.</h2>
        <button className='bg-orange-500 w-[140px] h-[40px] rounded-md text-white' onClick={() => {
          const link = document.createElement('a');
          link.href = CV;
          link.download = 'CV.pdf';
          link.click();
        }}>Download CV</button>

        </div>
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=996&t=st=1678897202~exp=1678897802~hmac=b60a075cb68a835a39ce30ba6a7d1286038b1898df4aff8ae1bfacef8811fb1b" alt="" />
      </div>
    </div>
  )
}

export default Hero