import { useState } from "react"


const AddTask = ({ onAdd, setTasks }) => {
    const [task, setTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!task) {
            alert('Please Add a Task')
            return
        }

        onAdd({
            task, 
            status : true
        }, setTasks)
    }

    return(
        <div className="wrapper">
            <div className="inputField" >
            <input 
                type="text" 
                placeholder="Add a Task" 
                value={task}
                onChange={ e => setTask(e.target.value)}
            />
            <button type="submit" onClick={e => onSubmit(e)}>Add Task</button>
            </div>
        </div>
    )
}

export default AddTask