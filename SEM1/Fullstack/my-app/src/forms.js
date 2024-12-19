

import { useState } from "react"

function Demo()
{
    const[name,setName]=useState("")
    const handle=(event)=>{
        alert(`The name entered is: ${name}`);
    }


    return (
        <form onSubmit={handle}>
            <label>
                Enter your Name
            </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <input type="submit"/>

        </form>
    )
}
export default Demo