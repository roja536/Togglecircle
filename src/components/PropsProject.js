import React from 'react'
import './PropsProject.css'


function PropsProject(props) {
  const HandleClick=(()=>{
    alert("booked Successfully")
  })
 const  HandleImage = (()=>{

 })
  return (
   <div className='body'>
   <div className='container'>
   <img src={props.path} alt={props.alt} onClick={HandleImage}/>
   <h2>MovieName:{props.name}</h2>
   <h2>ShowTime:{props.time}</h2>
   <h2>TicketCost:{props.cost}</h2>
   <h2>Rating:{props.rating}</h2>
   <button id='btu' onClick={HandleClick}>BookTicket</button>
  
   </div>
   </div>
  )
}

export default PropsProject;