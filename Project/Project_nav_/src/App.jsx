import React, { useState } from 'react'
import Nav from './nav'
import Landing from './landing'
import Login from './login'
const App = () => {
  const [user,getuser]=useState("");

  function changeUserName (e){
    getuser(e.target.vlaue);
  }

  const changePage = ()=>{
    
  }
  return (
    <>
    <div className=' flex justify-center items-center h-screen'>
        <div className='  h-3/4  w-1/3 bg-purple-600'>
        <h2 className=' font-semibold text-center text-3xl font-mono py-10'>logIn</h2>
        <label htmlFor="" className=' font-mono font-medium ml-5'>Enter Your Name</label>
        <input type="text" placeholder='F_name' onChange={changeUserName} className='bg-zinc-500 w-4/5 mt-3 p-3 ' />
        <p className='bg-red-500'>sihdasdh {user}</p>
        <br />
        <input type="password" placeholder='Password ' />
        <button onClick={<Nav/>}>Submit</button>
        </div>
    
    </div>
    {/* <Nav/>
    <Landing/> */}
    {/* <Login/> */}
    </>
  )
}

export default App