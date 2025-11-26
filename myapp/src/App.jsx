// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import HelloWorld from "./core-concepts/01-helloWorld/HelloWorld";
import Greeting from "./core-concepts/02-componenets/classGreeting";
import Welcome from "./core-concepts/02-componenets/functionGreetings";
import JSXExample from "./core-concepts/03-jsx/JSXExample";
import Props from "./core-concepts/04-prpos/PropsEx";
import StateExample from "./core-concepts/05-state/stateExample";
import EventHandle from "./core-concepts/06-event-handling/eventHandler";
import SimpleForm from "./core-concepts/06-event-handling/simpleForm";
import ListExample from "./core-concepts/07-list-keys/listExample";
import TaskManager from "./core-concepts/08-task-manager/TaskManager";
import UseStateExample from "./hooks/01-useState/useStateExample";
import UseActionState from "./hooks/02-useActionState/useActionState";
import UseEffect from "./hooks/03-useEffect/useEffect";
import UseLayoutEffect from "./hooks/04-useLayoutEffect/useLayoutEffect";
import UseContextExample from "./hooks/05-useContext/useContext";



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React + Karthik</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


function App(){
  //return <HelloWorld/>
  //return <Welcome/>
  //return <Greeting/>
  //return <JSXExample/>
  //return <Props  name = "Karthik this is props"/>
  //return <StateExample/>
  //return <EventHandle/>
  //return <SimpleForm/>
  //return <ListExample/>
  //return <TaskManager/>
  //return <UseStateExample/>
  //return <UseActionState/>
  //return <UseEffect/>
  //return <UseLayoutEffect/>
  return <UseContextExample/>
}

export default App
