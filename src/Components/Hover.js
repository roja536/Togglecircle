import React from 'react'
import Higher from './Higher'

function Hover(props) {
    return (
        <div>
            <h1 onMouseOver={props.Increment}>You Hovered {props.count} times</h1>
        </div>
    )
}

export default Higher(Hover, 5)