import React, { useState } from 'react'

function update_array_object() {

    const [car,setcar]=useState([]);
    const [newyear,setyear]=useState(1990);
    const [newmodel,setmodel]=useState("");

    function add_carname(){
      const newcar={
        year:newyear,
        model:newmodel
      }
      setcar(c=>[...c,newcar])
      setyear(new Date ().getFullYear());
      setmodel("");
    } 
    function remove_carname(index){
      setcar(c=>c.filter((_,i)=>i!==index))
    }
    function change_year(e){
        setyear(e.target.value);
    }
    function change_model(e){
        setmodel(e.target.value);
    }

  return (
    <div>
        <h3>list of car</h3>
        <ul>{car.map((car,index)=><li key={index} onClick={()=>remove_carname(index)}>{car.year} {car.model}</li>)}</ul>

        <input type="number"  placeholder='Enter the Year' value={newyear}  onChange={change_year} />
        <input type="text"  placeholder='Enter the moduel' value={newmodel}  onChange={change_model} />
        <button onClick={add_carname} >button</button>
    </div>
    
  )
}

export default update_array_object