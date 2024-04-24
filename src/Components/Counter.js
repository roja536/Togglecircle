import React from 'react'
import Higher from './Higher'

function Counter(props) {
    return (
        <button onClick={props.Increment}>You Clicked{props.count}times</button>
    )
}

export default Higher(Counter, 10)