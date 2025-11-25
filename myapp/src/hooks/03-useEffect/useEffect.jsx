import { useEffect, useState } from "react"

export default function UseEffect(){
    // three states: Data, Load, Error
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Api Request
    function fetchPosts(){
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) =>{
            setData(data)
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
    }

    //UseEffect Hook
    useEffect(() => {
        fetchPosts();
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return(
        <div>
            <h1>UseEffect Example</h1>
            <h2>Fetched Data:</h2>
            {/* list */}
            <ul>
                {data && data.map((item) => {
                return  <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        </li>
                })}
                
            </ul>
        </div>
    )
}