import { useState } from "react";
import TaskForm from "./TaskForm";
import "./TaskManager.css"

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm/>
            <p>Tasks: {tasks.length}</p>
        </div>
    );
}