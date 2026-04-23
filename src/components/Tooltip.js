import React from "react";
import { useState } from "react";


const Tooltip=({fun1,fun2,fun3,fun4,text,children})=>{
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  return (
    <div>
      <h2 className="tooltip" onMouseEnter={() => setShow1(true)} onMouseLeave={() => setShow1(false)}>
          Hover over me
        {show1 && <div className="tooltiptext">This is a tooltip</div>}</h2>
      <hr/><br/>
      <p className="tooltip" onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)}>
          Hover over me to see another tooltip
        {show2 && <div className="tooltiptext">This is another tooltip</div>}
      </p>
      <hr/><br/>
    </div>
  )
}



export default Tooltip