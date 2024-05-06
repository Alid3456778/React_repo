import React, { useState } from 'react'

function change() {

    const [name,setname]=useState("");
    const [quantity,setquantity]=useState();
    const [comment,setcomment]=useState();
    const [choise,setchoice]=useState("");
    const [option,setoption]=useState();

    const changeoption = (e) =>{
        setoption(e.target.value);
    }

    const changechoice = (e)=>{
        setchoice(e.target.value);
    }

    const changequentity =(e)=>{
        setquantity(e.target.value);
    }

    const changename =(e)=>{
        setname(e.target.value)
    }

    const changecomment=(e)=>{
        setcomment(e.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={changename} placeholder='Product_name'/>
        <p>Name : {name}</p>

        <input type="number" value={quantity} onChange={changequentity} placeholder='Enter_Quantity' />
        <p>Quantity : {quantity}</p>


        <textarea value={comment} onChange={changecomment} placeholder='Entr comment'></textarea>
        <p>Comment are : {comment}</p>

        <select value={choise} onChange={changechoice}>
            <option value="">Select Value</option>
            <option value="Milk">Milk</option>
            <option value="Smoothi">Smoothi</option>
            <option value="Snack">Snack</option>
            <option value="Mobile">Mobile</option>
        </select>
        <p>Selected Value is : {choise}</p>

        
        <br />
        <label >
        <input type="radio"  value="Pick UP" checked={option === "Pick UP"} onChange={changeoption} />pickup
        </label><br/>

        <label >
        <input type="radio"  value="Delivery" checked={option === "Delivery"} onChange={changeoption} />Delivery
        </label><br/>

        
        <p>Enter the option {option}</p>
    </div>
  )
}

export default change