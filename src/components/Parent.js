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
      <Tooltip text={handleTooltip1} children={handleTooltip2} removeText={handleTooltip1_1} removeChildren={handleTooltip2_1}/>
      <h1>{text}</h1>
      <p>{children}</p>
    </div>
  )
}



export default Parent