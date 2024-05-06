import React, { useState } from 'react'

function compo() {

    const [name,setname]=useState("Gest");
    const [age,setage]=useState(0);
    const [employeed,setemeployeed]=useState(false);

    function changename (){
        setname("Alid")
    }

    const changeage = ()=>{
        setage(age+1)
    }

    const decrementage =()=>{
        setage(age-1)
    }

    const checkemployed = () =>{
        setemeployeed(!employeed)
    }

  return (
    <div>
        <p>name :{name}</p>
        <button onClick={changename}>Click me </button>

        <p>age :{age}</p>
        <button onClick={changeage}>Increment </button>
        <button onClick={decrementage}>Reste </button>

        <p>Employed  :{employeed ? "Yes ": "No"}</p>
        <button onClick={checkemployed}>Click me </button>
    </div>
  )
}

export default compo