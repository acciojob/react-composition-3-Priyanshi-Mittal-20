import React from "react";
import { useState } from "react";


const Tooltip=({text,children,removeText,removeChildren})=>{
  return (
    <div>
      <h2 className="tooltip" onMouseOver={text} onMouseLeave={removeText}>Hover over me
        {text && <div className="tooltiptext">{text}</div>}</h2><br/><hr/>
      <p className="tooltip" onMouseOver={children} onMouseLeave={removeChildren}>Hover over me to see another tooltip
        {children && <div className="tooltiptext">{children}</div>}</p><hr/><br/>
    </div>
  )
}



export default Tooltip