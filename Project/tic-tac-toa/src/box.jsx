import React, { useState }  from 'react'

const box = () => {
    const [valX,setvalX]=useState(" ");

const changeval= ()=>{
  setvalX("X");
}
  return (
    <>
     <button value={1} onClick={changeval}>{valX}</button>
    </>
  )
}

export default box