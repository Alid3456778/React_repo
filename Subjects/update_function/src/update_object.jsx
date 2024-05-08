import React, { useState } from 'react'

function update_object() {
    const [car,stecar]=useState({name:"bugate",year:1990,model:"Suppera"})
    const [pro,setpro]=useState(0)

    const change_year=(event)=>{
        // stecar({year:2004}) gives error and only print year
        //stecar({...car, year:event.target.value})//no error but creating without the uodate function
        stecar(c=>({...c, year:event.target.value}))
    }
    const change_name=(e)=>{
        stecar(c=>({...c,name:e.target.value}))
    }
    const change_model=(e)=>{
        stecar(c=>({...c,model:e.target.value}))
    }
  return (
    <div>
        <p>Deatial Of car :: {car.name} {car.year} {car.model} </p>

        <input type="number" value={car.year}  onChange={change_year}/>
        <input type="text" value={car.name}  onChange={change_name}/>
        <input type="text" value={car.model}  onChange={change_model}/>
    </div>
  )
}

export default update_object