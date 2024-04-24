import React, { useState } from 'react'



const User = {
    name: 'roja',
    location: 'hyd'

}

function Home() {
    const [Value, HandleValue] = useState('')
    const HandleClickOne = () => {

        HandleValue(pre => pre + 1)
    }
    const HandleClickTwo = () => {

        HandleValue(pre => pre + 2)
    }
    return (
        <div>Home
            <p>{Value}</p>
            <button onClick={HandleClickOne} >1</button>
            <button onClick={HandleClickTwo}>2</button>
            <button >+</button>
            <button ></button>
            <button>=</button>
            <h1>{User.name}</h1>
            <h1>{User.location}</h1>
        </div>
    )
}

export default Home;