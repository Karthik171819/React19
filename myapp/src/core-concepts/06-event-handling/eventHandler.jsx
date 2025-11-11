import { useState } from "react";

export default function EventHandle(){
    const[text, updatetext] = useState("");

    const handler = (event) => {
        updatetext(event.target.value)
    }
    return(
        <>
        <h1>This is a Event Handler</h1>
        <input type="text" onChange={handler} placeholder="Enter your message"></input>
        <h2> {text} </h2>
        </>
    )
}