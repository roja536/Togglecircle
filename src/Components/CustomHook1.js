import React from 'react'
import useCustomeHook from './CustomHook'

function CustomHook1() {

    const user = useCustomeHook('https://jsonplaceholder.typicode.com/users');
    const todo = useCustomeHook('https://jsonplaceholder.typicode.com/todos');

    console.log(user, 'user')

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {
                    user?.map((e) => {
                        return (
                            <li>
                                <span>{e.id}</span>
                                <span>{e.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <h1>Todos Data</h1>
            <ul>
                {
                    todo?.map((e) => {
                        return (
                            <li>
                                <span>{e.id}</span>
                                <span>{e.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CustomHook1