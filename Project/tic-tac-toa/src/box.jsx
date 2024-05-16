import React, { useState }  from 'react'

const box = ({value ,squrex}) => {
  return (
    <>
     <button  className='but' onClick={squrex}>{value}</button>
    </>
  )
}

export default box