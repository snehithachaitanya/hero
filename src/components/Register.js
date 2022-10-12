import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
function Register() {
  return (
    <div>
        <div style={{ padding: 30 }}>
         <h4>register form</h4>
         <Grid
        container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12}>
          <TextField label="Username"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="mailid"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={'password'}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Re-enter Password" type={'password'}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="phone no"></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button > Register </Button>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Register