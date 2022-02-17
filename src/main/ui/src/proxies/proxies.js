
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



//
//Put
//