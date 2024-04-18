import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [taskName, setTaskName] = useState('');
    const [TaskList, SetTaskList] = useState([])


    const HandleTaskName = (e) => {
        setTaskName(e.target.value)
    }
    const HandleClick = () => {
        console.log(taskName)

        SetTaskList(pre => [...pre, taskName])
        setTaskName('')

    }
    return (
        <div className='container'>
            <h1>Todo Application</h1>
            <div className='form'>
                <input type='text' placeholder='enter task' name='task' value={taskName} onChange={HandleTaskName} />
                <button onClick={HandleClick}>Add</button>
            </div>

            <ol>
                {
                    TaskList.map((itms) => {
                        return (
                            <li ><span>{itms}</span><span><button className='del' S>Del</button></span></li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Todo;