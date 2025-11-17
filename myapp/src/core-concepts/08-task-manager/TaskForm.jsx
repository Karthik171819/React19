export default function TaskForm() {
    return(
        <div>
            <form>
                <input type="text"  className="add-input" placeholder="Add a task"/>
                <button type="submit" className="btn">ADD</button>
            </form>
        </div>
    )
}