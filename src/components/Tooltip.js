import React from "react";
import { useState } from "react";


const Tooltip=({text,children,removeText,removeChildren})=>{
  return (
    <div className="tooltip">
      <h1 onMouseOver={text} onMouseLeave={removeText}>Hover over me</h1><br/><hr/>
      <p onMouseOver={children} onMouseLeave={removeChildren}>Hover over me to see another tooltip</p><hr/><br/>
    </div>
  )
}



export default Tooltip