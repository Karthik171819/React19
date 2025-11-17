export default function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className="task-li">
                    {task.text}
                </li>
            ))}
        </ul>
    );
}
