import React, { useState } from 'react'
import axios from 'axios'

function AddStudent() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [location, setlocation] = useState('')
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/student', { id, name, location })
            .then(res => {
                document.getElementById('note').innerHTML = "success"
                setId('')
                setName('')
                setlocation('')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>AddStudent
            <form onSubmit={HandleSubmit}>
                <div>
                    <input type='text' placeholder='id' name='id' value={id} onChange={(e) => {
                        setId(e.target.value)
                    }} />
                </div>
                <div>
                    <input type='text' placeholder='name' value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <input type='text' placeholder='loaction' value={location} onChange={(e) => {
                        setlocation(e.target.value)
                    }} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <h1 id='note'></h1>
            </form>
        </div>
    )
}

export default AddStudent