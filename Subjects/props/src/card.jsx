import React from 'react'
import PropTypes from 'prop-types';

function card(prop) {
  return (
    <div className='card'>
        <h4 className="card-name">Name:  {prop.name}</h4>
        <h4 className="card-age">Age: {prop.age}</h4>
        <h4 className="card-class">Class: {prop.clas}</h4>
    </div>
  )
}

card.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    class:PropTypes.string
}

card.defaultProps={
    name:"Gest",
    age:0,
    clas:"O"
}

export default card