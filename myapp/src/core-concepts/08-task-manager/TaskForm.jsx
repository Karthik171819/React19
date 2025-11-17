import { useState } from "react";
export default function TaskForm({addTask}) {
    const [value, setValue] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();

        if(value.trim()){
            console.log("form Submitted", value)
            //add task list
            addTask(value);
            setValue("")
        }
        
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="add-task-action">
                <input type="text"
                    className="add-input"
                    placeholder="Add a task"
                    value={value}
                    onChange={(e)=> setValue(e.target.value)} />
                <button type="submit" className="btn">ADD</button>
                </div>
            </form>
        </div>
    )
}