import React, { useState } from 'react'
import './form.css'

function Form() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const HandleName = (e) => {
        setName(e.target.value)

    }
    const HandlePhone = (e) => {
        setPhone(e.target.value)
    }
    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }
    const HandleSubmit = () => {
        console.log(name, phone, email)
        setName('')
        setPhone('')
        setEmail('')

    }
    return (
        <div className='container'>
            <div className='container form mt-5'>
                <h1>Contact List</h1>
                <form>
                    <label>Name</label>
                    <input type='text' placeholder='enter name' name='name' value={name} onChange={HandleName} />
                    <label>Phone</label>
                    <input type='text' placeholder='enter number' name='phone' value={phone} onChange={HandlePhone} />
                    <label>Mail</label>
                    <input type='text' placeholder='enter emaiil' name='mail' value={email} onChange={HandleEmail} />
                    <button type="button" class="btn btn-primary" onClick={HandleSubmit}>Submit</button>
                </form>
                <div>
                </div>
            </div>

        </div>

    )
}

export default Form;