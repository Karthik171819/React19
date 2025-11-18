import { useState } from "react"
export default function UseStateExample(params) {
    const [state, setState] = useState(false);

    function handlingClick() {
        setState(!state); //toggle
    }
    return <div>
        <button onClick={handlingClick}>Show Text</button>
        {state && <p>This is a Text message it came by when you clicked button Its A useState </p>}
    </div>
}