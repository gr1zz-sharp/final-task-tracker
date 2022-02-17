
//
//Get
//

export const getTasks = (setTaskList) => {
    fetch('/api/tasks')
        .then(resp => resp.json())
        .then(tasks => {
            setTaskList([...tasks])
        })
        .catch(error => console.error('Error: ', error))
}

//
//Post
//

export const addTask = (task, setTasks) => {
    fetch('/api/addTask', {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })
        .then(resp => resp.json())
        .then(task => {
            console.log('Success', task)
            getTasks(setTasks)
        })
        .catch(error => {console.error('Error: ', error)})
}


//
//Put
//