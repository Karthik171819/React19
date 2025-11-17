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
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks}/>
            <p>Tasks: {tasks.length}</p>
        </div>
    );
}