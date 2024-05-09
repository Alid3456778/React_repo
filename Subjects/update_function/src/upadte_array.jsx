import React, { useState } from 'react'

function upadte_array() {
    const [foods,setfood]=useState(["Mango"]);

    const chnagefood=()=>{
        
        const fos=document.getElementById("food_id").value;
        document.getElementById("food_id").value="";

        setfood(f=> [...f,fos]);
    }

    function deletfood(index){
        setfood(foods.filter((_,i)=> i!= index))
    }
  return (
    <div>
        <h3>List of food </h3>
        <ul>{foods.map((food,index)=> <li key={index} onClick={()=> deletfood(index)}> {food} </li> )}</ul>

        <input type="text" placeholder='Enter the Foods ' id='food_id' />
        <button onClick={chnagefood}>chnagefood</button>
    </div>
  )
}

export default upadte_array