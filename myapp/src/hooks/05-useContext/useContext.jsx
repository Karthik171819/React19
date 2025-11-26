import { useState } from "react"

export default function UseContextExample() {
    return <div>
      <Dashboard/>
    </div>
}

function Dashboard() {
    const [user, setUser] = useState({name:"karthik", email:"karthik@gmail.com"});
    return <div>
        <h3>Welcome to Simple Context Example</h3>
    </div>
}

function Profile(){
    
}