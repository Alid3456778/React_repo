import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from './home'
import About from './about'
import Contact from './contact'

const nav = () => {

    const [vaer,setvar]=useState("");
    const changevar = (r)=>{
        setvar(r)
    }

  return (
    <>
    <Router>
      <div className="flex justify-between align-middle pt-[10px] px-[20px]">
        <div className=" font-serif font-semibold w-3 text-xl">Discontent</div>
        <div>
            <ul className=" flex justify-between align-middle text-lg gap-[40px] font-light text-[20px]  font-sans">
                <li onClick={()=>{changevar("home")}} className={vaer==="home"?" underline underline-offset-2 ":""}> <Link to="/home">Home</Link>  </li>
                <li onClick={()=>{changevar("about")}} className={vaer==="about"?" underline underline-offset-2":""}><Link to="/about">About</Link></li>
                <li onClick={()=>{changevar("contact")}} className={vaer==="contact"?" underline underline-offset-2":""}><Link to="/contact">Contact</Link></li>
            </ul>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>

        </div>
        <div>
            <a href="http://" className=" border-2 border-black rounded-md px-[7px] py=[4px] hover:bg-slate-600 hover:text-white">Button</a>
        </div>
      </div>
      </Router>
    </>
  );
};

export default nav;
