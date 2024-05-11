import React from 'react'
import img1 from './assets/img1.jpg'
const landing = () => {
  return (
    <>
    <div className='flex justify-between py-10 px-5 relative h-screen'>
        <div className='absolute top-52 right-2/3 left-4'>
            <p className='absolute left-5 text-lg'>
              <span className=' text-2xl font-bold'>Hello </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat quos praesentium officia consectetur quibusdam nam laboriosam, itaque in quo! Aut corporis, dolore minus labore voluptates facere quaerat velit rerum.</p>
            <button className=' absolute top-40 left-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Click Me</button>
        </div>
        
        <div className='bg-gradient-to-br from-purple-600 to-blue-500 absolute left-1/2 right-4 h-5/6 '>
        <img src={img1} alt="jdls" className=' h-full w-full'/>
        </div>
    </div>
    </>
  )
}

export default landing