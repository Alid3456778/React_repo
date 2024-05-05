import React from 'react'

function picture() {
    const img="./src/assets/pic.jpg";

    // function handle(){
    //     alert("You Clicked mr");
    // }

    const handle = (e)=>{
        e.target.style.display="none";
    }
  return (
    <>
    <img src={img} alt="" onClick={(e)=>handle(e)} />
    </>
  )
}

export default picture