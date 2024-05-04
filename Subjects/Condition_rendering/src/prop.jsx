import React from 'react'
import ProtoTypes from 'prop-types'
function prop(proper) {

    // if(proper.value){
    //     return( <h1>Hello {proper.name}</h1> )
    // }
    // else{
    //     return( <h1>Plesss register</h1> )
    // }
    const greeting = <h1>Hello {proper.name}</h1>;

    const getout = <h1>Plesss register</h1>
  return (
    
    proper.value ? greeting : getout 
    
  )
}

prop.propTypes={
    name:PropTypes.string,
    value:PropTypes.bool
}

prop.defaultProps={
    name:"gest",
    value:false,
}

export default prop