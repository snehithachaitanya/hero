import React from 'react'
import l1 from './images/l1.jpeg'
import l2 from './images/l2.jpg'
import l3 from './images/l3.jpg'

function Lunch() {

    const lnch=[{ 
        "img":<img src={l1} width="150" height="150"/>, 
        "model":9, 
        "name":"One Plus", 
        "price":"Rs. 50,000/-", 
        "available":true 
    }, 
    { 
        "img":<img src={l2} width="150" height="150"/>, 
      "model":14, 
      "name":"iPhone", 
      "price":"$1500/-", 
      "available":false 
    },
    { 
        "img":<img src={l3} width="150" height="150"/>, 
      "model":14, 
      "name":"iPhone", 
      "price":"$1500/-", 
      "available":false 
    }]

  return (
    <div>
    {lnch.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
    Available: {mb.available 
 ?"Yes" : "No"}</h6>))} 
 </div>
  )
}

export default Lunch