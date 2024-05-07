import React from 'react'

function compo() {

    const arr=[];

    for(let i=0;i<=30;i++){
        arr[i]=i;
    }


    
    const mop=arr.map(arr=><div>{arr}</div>)
  return (
    <>
    <div className='box'>{arr}</div>
    </>
  )
}

export default compo