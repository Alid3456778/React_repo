import React, { useState } from 'react'
import Prop from './prop'


function App() {
  var[a,b]=  useState(0);

  //for upping the age 
  let up_age=(e)=>{
    b(a+1)
  }


  //for not going age till -1
  const funk = (e)=>{
    b(a-1)
    if(a===0 || a<0){
      alert("Not Zero");
      b(a=0)
  }  
   
  }

  //making age to zero
  const zero_age = (e)=>{
    b(a=0)
  }

  return (
  <div>
    <div className='w-auto h-screen bg-slate-700 text-black p-4   items-center  '>
      <div className='bg-emerald-400 w-full h-32 rounded-xl font-mono flex items-center justify-center my-3'>
        <h3>Your Age is {a}</h3>
        <br />
        <button onClick={up_age} className='rounded-md bg-red-400 mx-5 my-3  px-5 py-1'>up</button>
        <button onClick={funk}className='rounded-md bg-red-400 mx-5 my-3  px-5 py-1'>down</button>
        <button onClick={zero_age} className='rounded-md bg-red-400 mx-5 my-3  px-5 py-1'>Zero</button>
      </div>
      <div className='flex items-center justify-center   w-full h-32 rounded-xl font-mono  bg-blue-400 my-3'>
      <Prop/>
      </div>
    
    </div>
  </div>
  )
}

export default App