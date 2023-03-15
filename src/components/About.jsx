import React from 'react'
import { services } from '../constants'
const About = () => {
  return (
    <div id='about' className=''>
      <h1 className='font-bold text-4xl ml-24 py-4'>About</h1>
    <div className='flex justify-between'>
       <div className='ml-24 flex flex-col gap-4 '>
       
       <div className='flex space-x-3'>
       <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
         alt="" 
         className='h-8 w-8 cursor-pointer' 
         />
       <h1>Instragram</h1>
       </div>
       <div className='flex space-x-3'>
       <img 
       src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
        alt=""
        className='h-8 w-8 cursor-pointer'/>
       <h1>Twitter</h1>
       </div>
      <div className='flex space-x-3'>
      <img 
      src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
      alt=""
      className='h-8 w-8 cursor-pointer' />
       <h1>Email me</h1>
      </div>
    
       </div>
       <div className='mr-24 flex flex-col gap-4'>
       <h1>Introduction</h1>
        <h1>Overiew.</h1>
        <p>I'm a skilled software developer with experience in <br /> typescript and javascript and with expertise in frameworks like reactjs,nextjs and node js. <br /> I am a quick learner and collaborate easily with teams. </p>
      
    
            <div className='flex gap-4'>
                {services.map((item,index)=>(
                    <div key={index} className="border-2 border-gray-200 flex flex-col justify-center items-center h-[200px] w-[200px] shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img 
                        src={item.icon} 
                        alt="" 
                        className='h-16 w-16'
                        />
                        <h1 className='font-bold'>{item.title}</h1>
                    </div>
                ))}
            </div>
            </div>
    </div>

    </div>
  )
}

export default About