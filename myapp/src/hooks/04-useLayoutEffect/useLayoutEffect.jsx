import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect(){
    const [color, setColor] = useState("green");

    useLayoutEffect(() => {
        document.body.style.background = color;
    })
    return <div>
        <h1>UseLayoutEffect</h1>
        <button className="useLayoutEffect"  onClick={() => setColor("lightblue")}>Click To Change Color</button>
        <button className="useLayoutEffect"  onClick={() => setColor("green")}>Back To Normal Color</button>
    </div>
}