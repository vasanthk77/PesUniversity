
import React from "react"
import { useState } from "react"

/*### hook can be defined in function */

function Demo()
{
    const[color,setColor]=useState("Blue")
    return (
        <div>
        <h1> Fav color is :{color}</h1>
        <button type= "button" onClick={()=>setColor("purple")}>
            ClickMe
        </button>
        </div>
    )
}

export default Demo