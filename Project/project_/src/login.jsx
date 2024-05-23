import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Nav from './nav';

const login = () => {
  return (
    <>
    <Router>
    <div>Login </div>
    <input type="text" placeholder='Name'/>
    <input type="password" placeholder='Password' />
    <button herf="./nav"><Link to="./nav">Pass</Link></button>
    <Routes>
      <Route path='./nav' element={<Nav/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default login