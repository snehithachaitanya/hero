import React from 'react'
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 340,
    },
  });

function Samplecard() {
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
        image="https://c4.wallpaperflare.com/wallpaper/861/29/99/the-sky-girl-swing-dress-wallpaper-preview.jpg"
        title="pic"
      />
      <CardContent >
    <Typography gutterBottom variant="h5" component="div">
      <center>Pan cakes</center>
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <center> Cuisine :Indian<br></br>
    Price:Rs. 250/-<br></br>
    Quantity :2<br></br>
    Available: Yes<br></br>
     </center>
    </Typography>
    <Typography>
        <Button style={{background:"green"}}>Buy now</Button>
    </Typography>
  </CardContent>  
  </Card>
  </center>
  

  )
}

export default Samplecard