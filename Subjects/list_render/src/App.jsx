import React from 'react'
import List from './list'
function App() {

  const items=[{ id:1 , name:"apple" ,cal:34},
             {id:2 , name:"banan" ,cal:89},
             {id:7 , name:"chicku" ,cal:78},
             {id:5 , name:"pinapple" ,cal:45},
             {id:6 , name:"orange" ,cal:50}
            ];

  // //Sorting function
  // // items.sort( (a, b)=>a.name.localeCompare(b.name) ); // for accending order sorting
  // // items.sort( (a, b)=>b.name.localeCompare(a.name) ); // for decending order sort

  // // items.sort((a,b)=>a.id-b.id); //for accending order in numaric
  // // items.sort((a,b)=>b.id-a.id); // fordecending order in numaric


  // //filter function
  // //const fill = items.filter(item => item.cal<=50); // for finding low by 50 cal frutes with filter function
  // const fill = items.filter(item => item.cal > 50);  // for finding high by 50  cal frutes with filter function

  // //map function
  // const sorted = fill.map(fill => <li key={fill.id}>  {fill.name}  : {fill.cal}</li>) //usinf max function for properly displaying 

  return (
    <>
    <List valu={items} cat="fruits"/>
    </>
  );
}

export default App