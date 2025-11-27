import { createContext, useState, useContext } from "react"

//Head Component to share state

const UserContext = createContext(null);
export default function UseContextExample() {
    const [user, setUser] = useState({name:"karthik", email:"karthik@gmail.com"});
    return <UserContext value={{user, setUser}}>
            <div>
                <Dashboard/>
            </div>
           </UserContext>
}

function Dashboard() {
    const {user, setUser} = useContext(UserContext)
    return <div>
        <h3>Welcome to Simple Context Example Dashboard</h3>
        <h2>Hi {user.name}</h2>
        <Profile/>
        <button onClick={() => setUser({name:"virat", email:"virat@gmail.com"})}>Change User!</button>
    </div>
}

function Profile(){
    const {user, setUser} = useContext(UserContext)
    return <div>
        <h4>It's Your Profile</h4>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>

    </div>
}