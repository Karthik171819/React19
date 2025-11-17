export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="task-ul">
            {tasks.map((task, index) => (
                <li
                    onClick={() => toggleTask(task.id)}
                    key={index}
                    className={`task-li ${task.completed ? "completed" : ""}`}
                >
                    <span className="task-text">{task.text}</span>

                    <span
                        onClick={(e) => {
                            e.stopPropagation();      // prevent toggle
                            deleteTask(task.id);      // delete this task
                        }}
                        className="delete"
                    >
                        X
                    </span>
                </li>
            ))}
        </ul>
    );
}
