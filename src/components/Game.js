import { useState } from 'react';
import './Game.css';

function Game() {
  const [position, setPosition] = useState([10, 10])
  const [count, setCount] = useState(0);
  // const[updatePosition,intialPosition]=useState(setCount)
  const HandleMouseOver = (() => {
    let x = Math.random() * 100
    let y = Math.random() * 100
    console.log(x, y)
    setPosition([x, y])
    setCount(count + 1)
  })

  const HandleClick = (() => {
    setPosition([10, 10]);
    setCount(0);
  })

  return (
    <div>
      <div className='Container'>
        <div className='header'>
          <h1>Click Me If You Can !</h1>
          <h2>Number of attempts : {count}</h2>
          <button onClick={HandleClick}>Click</button>
        </div>
        <div className='circle' onMouseOver={HandleMouseOver} style={{ top: position[0] + '%', left: position[1] + '%' }} ></div>
      </div>
    </div>
  )
}

export default Game;