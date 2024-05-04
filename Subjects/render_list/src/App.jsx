import React from 'react'
import List from './list'
function App() {

  const item=[{id:1,name:"apple",cal:34},
  {id:2,name:"pineapple",cal:50},
  {id:3,name:"banana",cal:90},
  {id:4,name:"chiku",cal:45}
  ];

  const item1=[{id:5,name:"bhandi",cal:34},
  {id:6,name:"aaloo",cal:50},
  {id:7,name:"ghobi",cal:90},
  {id:8,name:"maythu",cal:45}
  ];


  
  return (
    <>
    
    <List valu={item} cator="frutes"/>
    <List valu={item1} cator="Vegitable"/>
    </>
  )
}

export default App