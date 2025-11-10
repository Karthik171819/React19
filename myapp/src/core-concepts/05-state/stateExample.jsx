import { useState } from "react"
export default function StateExample(){
    //use state
    const[count, setCount] = useState(0);

    //handling clicking
    const handlingClick = () =>{
        setCount(count+1);
    }

    return(
        <div><h1>This is state</h1>
        <h3>Counter { count }</h3>
        <button className="bg-color" onClick={ handlingClick } >Increment</button>
        </div>    
    )
}