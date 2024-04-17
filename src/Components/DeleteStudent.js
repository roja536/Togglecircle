import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'

function DeleteStudent() {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    useEffect(() => {
        axios.get('http://localhost:4000/student')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const deleteData = (userid) => {
        axios.delete('http://localhost:4000/student/' + userid)
            .then(res => {
                document.getElementById('note').innerHTML = 'Data Deleted '
            })
            .catch(err => {
                console.log(err)
            })
    }
    const editData = (userid) => {
        axios.get('http://localhost:4000/student/' + userid)
            .then(res => {
                setId(res.data.id)
                setName(res.data.name)
                setLocation(res.data.location)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const HandleUpdate = (userid) => {
        axios.put('http://localhost:4000/student/' + id, { id, name, location })
            .then(res => {
                document.getElementById('note').innerHTML = 'Upadate success'
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>DeleteStudent
            <div>
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button onClick={() => { HandleUpdate() }}>UPdate</button>
            </div>
            <ul>
                {
                    data.map((stu) => {
                        return (
                            <li style={{ lineHeight: '30px' }}>
                                <span > {stu.id} </span>
                                <span> {stu.name} </span>
                                <span> {stu.location} </span>
                                <span><button onClick={() => deleteData(stu.id)}><i class="bi bi-trash3"></i></button></span>
                                <span><button onClick={() => editData(stu.id)}>Edit</button></span>

                            </li>
                        )
                    })
                }
            </ul>
            <h1 id='note'></h1>
        </div>
    )
}

export default DeleteStudent