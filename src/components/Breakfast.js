import React from 'react'
import br1 from './images/br1.jpg'
import br2 from './images/br2.jpg'
import br3 from './images/br3.jpg'
import Samplecard from './Samplecard'
import { Card } from '@material-ui/core'
import Button from '@material-ui/core/Button'
function Breakfast() {

    const brst=[{ 
        "img":<img src={br1} width="150" height="150"/>, 
        "cuisine":"Indian", 
        "name":"Pan cakes", 
        "price":"Rs. 250/-", 
        "piecesperplate":2,
        "available":true 
    }, 
    {  
      "img":<img src={br2} width="150" height="150"/>, 
       "cuisine":"Indian", 
        "name":"Roti", 
        "price":"Rs. 250/-", 
        "piecesperplate":2,
        "available":true 
    },
    { 
        "img":<img src={br3} width="150" height="150"/>, 
        "cuisine":"Indian", 
        "name":"dosa", 
        "price":"Rs. 250/-", 
        "piecesperplate":2,
        "available":true 
    }]

  return (
    <div>
      <Samplecard/>
      {brst.map((mb) =><Card sx={{ width: 445 ,height:350,float:'left',backgroundColor: "whitesmoke" }}> 
      <h6 key={mb.id}>{mb.img}<br/> Cuisine :{mb.cuisine}<br/> Name:{mb.name}<br/>Price:{mb.price}<br/> Quantity :{mb.piecesperplate}<br/>
      Available: {mb.available 
     ?"Yes" : "No"}</h6><Button variant="outlined">Buy Now</Button><br></br>
     </Card> )}
    </div>
  )
}

export default Breakfast