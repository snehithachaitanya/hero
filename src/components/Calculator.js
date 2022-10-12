import React from 'react'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
function Calculator() {
  return (
    <div>
      <center>    
  <Card  sx={{ maxWidth: 545 ,Height: 655}}>
  <h2>Calculator</h2>
  <TextField id="outlined-basic" label="Result" variant="outlined"></TextField>
<br></br><br></br>
     <Button variant="outlined">7</Button>
     <Button variant="outlined">8</Button >
     <Button variant="outlined">9</Button>
     <Button variant="outlined">/</Button>
     <br></br>
     <Button variant="outlined">4</Button>
     <Button variant="outlined">5</Button >
     <Button variant="outlined">6</Button>
     <Button variant="outlined">*</Button>
     <br></br>
     <Button variant="outlined">1</Button >
     <Button variant="outlined">2</Button>
     <Button variant="outlined">3</Button>
     <Button variant="outlined">-</Button>
     <br></br>
     <Button variant="outlined" value="0"   id="zero">0</Button >
     <Button variant="outlined">.</Button>
     <Button variant="contained">=</Button>
     <Button variant="outlined">+</Button>
     <br></br>
     <Button variant="outlined">Delete</Button>
      <Button variant="outlined">Clear</Button>
  </Card></center>
    </div>
  )
}

export default Calculator