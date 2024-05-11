import React from 'react'

const nav = () => {
  return (
    <>
    <div className='flex justify-between font-semibold'>
        <h2 className='font-bold text-1xl my-2 mx-3'>LOGo</h2>
        <ul className='flex '>
            <li className='mx-3  px-3 py-1 my-2 hover:underline underline-offset-4 '>home</li>
            <li className='mx-3  px-3 py-1 my-2 hover:underline underline-offset-4 '>about</li>
            <li className='mx-3  px-3 py-1 my-2 hover:underline underline-offset-4 '>contact</li>
            <li className='mx-3  px-3 py-1 my-2 hover:underline underline-offset-4 '>producta</li>
        </ul>
       
        <button className='mx-3 my-2 rounded-md px-2  hover:bg-zinc-200   '>Welcome User</button>
    </div>
    </>
  )
}

export default nav