import React, { useState } from "react";

function project() {
  const [info, into] = useState("");

  const name_funk=(e)=>{
    into(e.target.value);
  }

  return (
    <div className="text-center">
      <div className="w-full my-1 rounded-md">
        <input
          type="text"
          placeholder="Enter the Text"
          onChange={name_funk}
        />
      </div>
      <div className="w-full">hello {info}</div>
    </div>
    
  );
}

export default project;
