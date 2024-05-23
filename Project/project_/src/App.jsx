import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Login from './login'

import Nav from "./nav";

const App = () => {
  return (
    <div>
      <Nav/>
     {/* <Login/> */}
      
    </div>
  );
};

export default App;
