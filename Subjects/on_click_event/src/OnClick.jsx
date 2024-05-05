import React from 'react'

function OnClick() {
    // let count=0;
    // function on(e){
        
    //     if(count < 3){
    //         count++;
    //         alert(`${e} Bro you clicked me ${count}`)
            
    //     }
    //     else{
    //         alert("Stop Bro You Have Click me Enough")
    //     }
    // }

    const handle =(e)=>{
        // e.target.textContent="bhaiiiiii";
        console.log(e);
        e.target.style.color="blue";
    }
  return (
    <>
    <button onClick={(e)=>handle(e)} className=''>Button</button>
    </>
  )
}

export default OnClick