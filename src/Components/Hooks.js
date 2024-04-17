import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Hooks() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/student')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <div>
            <h1>Student Data</h1>
            <ul>
                {
                    data.map((stu) => {
                        return (
                            <>
                                <li key={stu.id}>
                                    <span>{stu.id}</span>
                                    <span>{stu.name}</span>
                                    <span>{stu.location}</span>
                                </li>


                            </>


                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hooks