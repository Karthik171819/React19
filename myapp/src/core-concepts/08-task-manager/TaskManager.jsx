import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskManager.css"

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {id:Date.now(), text, completed: false};
        setTasks([...tasks, newTask])
    }

    const toggleTask = (id) =>{
        setTasks(tasks.map((task) => {
         return task.id == id ? {...task, completed: !task.completed} : task
        }))
    }

     const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
            <p>Tasks: {tasks.length}</p>
        </div>
    );
}