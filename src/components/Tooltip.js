import React from "react";
import { useState } from "react";


const Tooltip=({fun1,fun2,fun3,fun4,text,children})=>{
  return (
    <div>
      <h2 className="tooltip" onMouseEnter={fun1} onMouseLeave={fun3}>
        Hover over me
        {text && <div className="tooltiptext">{text}</div>}</h2>
      <hr/><br/>
      <p className="tooltip" onMouseEnter={fun2} onMouseLeave={fun4}>Hover over me to see another tooltip
        {children && <div className="tooltiptext">{children}</div>}
      </p>
      <hr/><br/>
    </div>
  )
}



export default Tooltip