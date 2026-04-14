import React from "react";
import { useState } from "react";


const Tooltip=({fun1,fun2,fun3,fun4,text,children})=>{
  return (
    <div>
      <h2 className="tooltip" onMouseOver={fun1} onMouseLeave={fun3}><span>Hover over me</span></h2>
      {text && <div className="tooltiptext">{text}</div>}
      <br/><hr/>
      <p className="tooltip" onMouseOver={fun2} onMouseLeave={fun4}><span>Hover over me to see another</span>tooltip</p>
      {children && <div className="tooltiptext">{children}</div>}
      <hr/><br/>
    </div>
  )
}



export default Tooltip