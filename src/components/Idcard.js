import React from 'react'
import Card from '@material-ui/core/card';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 340,
    },
  });

function Idcard() {
    const classes = useStyles();
  return (
    <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <Card className={classes.root} style={{ border: "2px solid black" }}>
          <CardMedia
            className={classes.media}
            image="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
            title="student pic"
          />
          <CardContent style={{backgroundColor: "red"}} >
        <Typography gutterBottom variant="h5" component="div">
          <center>student name</center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center> designation:<br></br>
         cse department klu <br></br>
         from:andra pradesh<br></br>
         </center>
        </Typography>
      </CardContent>  
      </Card>
      <br></br>
      </center>
  )
}

export default Idcard