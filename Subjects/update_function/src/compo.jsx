import React, { useState } from 'react'

function compo() {


    const [age,setage]=useState(0);


    const changeage = ()=>{
        setage(a=> a=a+1)
        // setage(age+1)
        // setage(age+1)

        setage(a=> a=a+1)//this is update function which make it easy to create a non error function
        setage(a=> a=a+1)
    }

    const decrementage =()=>{
        setage(a=> a=a-1)
        // setage(age-1)
        // setage(age-1)
        setage(a=> a=a-1)
        setage(a=> a=a-1)
    }


    const zero=()=>{
        // setage(age=0)
        setage(a=>a=0)
    }
  return (
    <div>


        <p>age :{age}</p>
        <button onClick={changeage}>Increment </button>
        <button onClick={decrementage}>Decrement </button>
        <button onClick={zero}>Zero </button>

  
    </div>
  )
}

export default compo