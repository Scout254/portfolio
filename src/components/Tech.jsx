import React from 'react'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <div className='mx-24 my-12'>
      <h1 className='font-bold text-4xl my-4'>Technologies</h1>
        <div className='flex flex-wrap w-[150px]'>
        {technologies.map((tech,index)=>(
            <div key={index} className="border rounded-full">
                <img
                 src={tech.icon} 
                 alt=""
                 className='h-12 w-12 '
                 />
                
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Tech