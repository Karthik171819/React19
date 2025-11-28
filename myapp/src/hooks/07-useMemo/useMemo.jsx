import { useMemo, useState } from "react";

const items = ["Apple", "Bannana", "Grapes", "Mango"]

export default function UseMemo(){
    const [search, setSearch] = useState("");
    const [counter, setCounter] = useState(0);


    const filteredItems = useMemo(() => {
        console.log("filtering");
        return items.filter((item) =>  item.includes(search));
    }, [search])

    return <div>
        <h1>UseMemo example</h1>
        <input onChange={(e) =>setSearch(e.target.value)}type="text" placeholder="search Fruits"/>
        <ul>
            {filteredItems.map(item => <li>{item}</li>)}
        </ul>

        <h3>Count:{counter}</h3>
        <button onClick={() => setCounter(counter+1)}>Increase Count</button>
    </div>
}