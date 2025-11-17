export default function TaskForm() {
    return(
        <div>
            <form action>
                <div className="add-task-action">
                <input type="text"  className="add-input" placeholder="Add a task"/>
                <button type="submit" className="btn">ADD</button>
                </div>
            </form>
        </div>
    )
}