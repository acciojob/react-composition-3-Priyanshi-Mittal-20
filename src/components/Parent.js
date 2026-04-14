import React from "react";
import { useState } from "react";
import Tooltip from "./Tooltip";


const Parent=()=>{
  const [text,setText]=useState("")
  const [children,setChildren]=useState("")
  function handleTooltip1()
  {
    setText("This is a tooltip")
  }
  function handleTooltip2()
  {
    setChildren("This is another tooltip")
  }
  function handleTooltip1_1()
  {
    setText("")
  }
  function handleTooltip2_1()
  {
    setChildren("")
  }
  return(
    <div>
      <Tooltip fun1={handleTooltip1} fun2={handleTooltip2} fun3={handleTooltip1_1} fun4={handleTooltip2_1} text={text} children={children}/>
    </div>
  )
}



export default Parent