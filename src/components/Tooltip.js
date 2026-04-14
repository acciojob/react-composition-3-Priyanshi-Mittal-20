import React from "react";
import { useState } from "react";


const Tooltip=({fun1,fun2,fun3,fun4,text,children})=>{
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  return (
    <div>
      <h2 className="tooltip" onMouseOver={()=>{fun1();setShow1(true)}} onMouseLeave={()=>{fun3();setShow1(false)}}>
        Hover over me
        {show1 && <div className="tooltiptext">{text}</div>}</h2>
      <hr/><br/>
      <p className="tooltip" onMouseOver={()=>{fun2();setShow2(true)}} onMouseLeave={()=>{fun4();setShow2(false)}}>Hover over me to see another tooltip
        {show2 && <div className="tooltiptext">{children}</div>}
      </p>
      <hr/><br/>
    </div>
  )
}



export default Tooltip