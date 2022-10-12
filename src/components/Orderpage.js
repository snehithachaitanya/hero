import React from 'react'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }};

function Orderpage() {
  return (
    <div>
        <h4>FORM TO ORDER</h4>
        <Grid item xs={12}>
          <TextField label="product name"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="quantity" type={'number'}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="delivery address"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="primary contact number"></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button style={{background:"pink"}}> place order </Button>
        </Grid>
        <br></br>
    </div>
  )
}

export default Orderpage