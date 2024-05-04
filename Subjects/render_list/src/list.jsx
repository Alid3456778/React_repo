import React from 'react'
import PropType from 'prop-types'
function list(props) {

    const item=props.valu
    // Sorting 
    // item.sort((a,b)=>a.name.localeCompare(b.name));//sorting in assending order
    // item.sort((a,b)=>a.name.localeCompare(b.name));//sorting in dessending order

    // item.sort((a,b)=>a.cal-b.cal); //sorting in numaric assendding order
    // item.sort((a,b)=>a.cal-b.cal); //sorting in numaric assendding order


    //filter
    // const fill=item.filter(item=> item.cal < 50 ) //Filtering the output
    // const fill=item.filter(item=> item.cal > 50 ) //Filtering the output 

    const frut=["apple","banana","pineapple","chicku"]
    //map
    const soo_frut = item.map( item => <li>{item.name} :  {item.cal}</li>)
    
    

  return (
    <>
    <h3>{props.cator}</h3>
<ol>{soo_frut}</ol>
<br />
</>
  )
}


list.defaultProp={
    valu:null,
    cator:"_"
}

export default list