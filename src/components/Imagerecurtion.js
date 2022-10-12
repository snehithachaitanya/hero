import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { makeStyles } from '@material-ui/styles';
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'

const useStyles = makeStyles(theme => ({ 
    root: { 
       
 
        flexGrow: 1, 
         
        padding: theme.spacing(5) 
    } 
})) 

function Imagerecurtion() {
    const classes = useStyles() 
    const mble=[{ 
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
    <div className={classes.root}>
         <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
                {mble.map(mb => ( 
                    <Grid item xs={12} sm={6} md={3} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={s1}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                    {mb.name} 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>Model Number:  {mb.model}</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>Model Number:  Rs. {mb.price}/-</b> 
                                </Typography> 
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Buy Now</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))} 
            </Grid> 

    </div>
  )
}

export default Imagerecurtion