 import { useRef } from "react";
export default function UseRef() {

    const inputRef = useRef();

    const handle = () => {
        inputRef.current.focus();
    }
    return<div>
        <h1> UseRef example</h1>
        <input ref={inputRef}type="text" name="" placeholder='click button to get outline'/>
        <button onClick={handle}>Focus</button>
    </div>
}