import React, { useState } from "react";

const nav = () => {

    const [vaer,setvar]=useState("");
    const changevar = (r)=>{
        setvar(r)
    }

  return (
    <>
      <div className="flex justify-between align-middle pt-[10px] px-[20px]">
        <div className=" font-serif font-semibold w-3 text-xl">Discontent</div>
        <div>
            <ul className=" flex justify-between align-middle text-lg gap-[40px] font-light text-[20px]  font-sans">
                <li onClick={()=>{changevar("home")}} className={vaer==="home"?" underline underline-offset-2 ":""}>Home</li>
                <li onClick={()=>{changevar("about")}} className={vaer==="about"?" underline underline-offset-2":""}>About</li>
                <li onClick={()=>{changevar("contact")}} className={vaer==="contact"?" underline underline-offset-2":""}>Contact</li>
            </ul>
        </div>
        <div>
            <a href="http://" className=" border-2 border-black rounded-md px-[7px] py=[4px] hover:bg-slate-600 hover:text-white">Button</a>
        </div>
      </div>
    </>
  );
};

export default nav;
