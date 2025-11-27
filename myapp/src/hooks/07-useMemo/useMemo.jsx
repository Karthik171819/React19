import { useState } from "react";

const items = ["Apple", "Bannana", "Grapes", "Mango"]

export default function UseMemo(){
    const [search, setSearch] = useState("");
    
    return <div>
        <h1>UseMemo example</h1>
        <input onChange={(e) =>setSearch(e.target.value)}type="text" placeholder="search Fruits"/>
    </div>
}