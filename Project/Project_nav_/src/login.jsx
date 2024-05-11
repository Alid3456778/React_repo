import React from 'react'

const login = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className='  h-3/4  w-1/3 bg-purple-600'>
        <h2 className=' font-semibold text-center text-3xl font-mono py-10'>logIn</h2>
        <label htmlFor="" className=' font-mono font-medium ml-5'>ENter Your Name</label>
        <input type="text"placeholder='F_name' className='bg-zinc-500 w-4/5 mt-3 p-3 '/>
        <input type="password" placeholder='Password ' />
        <button>Submit</button>
        </div>
    
    </div>
  )
}

export default login