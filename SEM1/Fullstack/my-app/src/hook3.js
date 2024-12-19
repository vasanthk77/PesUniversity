
import  React from "react"
import { useState,useEffect,useRef } from "react"

function Demo ()
{
    const[inpval,setinpval]=useState("")
    const preinval =useRef("")
    useEffect(()=>{
        preinval.current=inpval
    },[inpval]
    )
    return (
        <div>
            <input type="text" value={inpval} onChange={(e)=>setinpval(e.target.value)}/>
            <h2>current value:{inpval}</h2>
            <h2>Previous Value:{preinval.current}</h2>
        </div>
    )
}
export default Demo