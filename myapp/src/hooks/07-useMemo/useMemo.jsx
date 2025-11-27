import { useState } from "react";

const items = ["Apple", "Bannana", "Grapes", "Mango"]

export default function UseMemo(){
    const [search, setSearch] = useState("");

    const filteredItems = items.filter((item) =>  item.includes(search));

    return <div>
        <h1>UseMemo example</h1>
        <input onChange={(e) =>setSearch(e.target.value)}type="text" placeholder="search Fruits"/>
        <ul>
            {filteredItems.map(item => <li>{item}</li>)}
        </ul>
    </div>
}