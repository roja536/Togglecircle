import React from 'react'
import './Project.css';
import { useState } from 'react';

function Project() {
  const[count , setCount] = useState(0);
  const increment =(()=>{
    setCount(count+1)
  })
  const decrement =(()=>{
    setCount(count-1)
  })
 const HandleClick = (()=>{
    alert("Order Placed Successfully");
 })
  return (
    <div>
        <div className='Container'>
         <div className='card'>
            <img src='https://m.media-amazon.com/images/I/51Tl6Jr+fXL.jpg' alt='waterBottle' width='30%' height='30%'/>
            <div className='description'>
               <h1>Roses</h1>
               <h2>Sau Rang Plastic Artificial Rose Flower Bunch Of 4 Roses And 1 Bud (Natural Looking) For Valentines Day, Birthday, Anniversary, Home Decor</h2>
               <h1>Price:{count*10}</h1>
               <div className='count'>
                 <button id='btu' onClick={increment}>+</button>
                 <h1>{count}</h1>
                 <button id='btu'onClick={decrement}>-</button>
                 <button className='order'onClick={HandleClick}>PlaceOrder</button>
               </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Project;