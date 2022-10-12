import React from 'react'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'


function Snaks() {

    const snx=[{ 
        "img":<img src={s1} width="150" height="150"/>, 
        "model":9, 
        "name":"One Plus", 
        "price":"Rs. 50,000/-", 
        "available":true 
    }, 
    { 
        "img":<img src={s2} width="150" height="150"/>, 
      "model":14, 
      "name":"iPhone", 
      "price":"$1500/-", 
      "available":false 
    },
    { 
        "img":<img src={s3} width="150" height="150"/>, 
      "model":14, 
      "name":"iPhone", 
      "price":"$1500/-", 
      "available":false 
    }]

  return (
 <div>
{snx.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available 
     ?"Yes" : "No"}</h6>))} 
   
    </div>
  )
}

export default Snaks