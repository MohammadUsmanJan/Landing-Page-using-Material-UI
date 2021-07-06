import React from 'react'
import { makeStyles } from '@material-ui/core'
import { CssBaseline , Card , CardMedia , Typography , CardContent , Collapse } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        maxWidth: 600,
      background: 'rgba(0,0,0,0.5)',
      margin: '20px',
      
    },
    media: {
      height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
      },
      desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#ddd',
      },
  });


function ImageCard(props) {

    const {place , checked} = props                // you can also use ... (spread operator) while sending so that inside of it is send only
   
    console.log(props)
    const classes = useStyles();
    return (
        <Collapse in = {checked}  {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.root}>
          
            <CardMedia
              className={classes.media}
              image={place.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography 
              className={classes.title}
              gutterBottom 
              variant="h5" 
              component="h2">

                {place.title}
              </Typography>
              <Typography variant="body2" 
              className={classes.desc}
              color="textSecondary" 
              component="p">
                {place.description}
              </Typography>
            </CardContent>
        </Card>
        </Collapse>
    )
}

export default ImageCard
