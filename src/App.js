import React from 'react'
import {Typography , AppBar , Card , CardActions ,Button , CardContent , CardMedia , CssBaseline , Grid ,Toolbar , Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import LandingPage from './components/LandingPage'


function App() {


  return (
   <>

   <LandingPage/>
   
      {/* <AppBar>
        <Toolbar>
          <PhotoCamera/> <Typography>Photo Clicks</Typography>
        </Toolbar>
      </AppBar>

      <Card>
        <Typography>Hello</Typography>
      </Card>

      <Grid container>
        <Grid item>
           <Button>Hello</Button>
           <Card style = {{height:'20vh' , width:'20vh' , border:'1px red solid'}}variant = 'outlined'>
             lorem  mklndnananldnan
           </Card>
        </Grid>

      </Grid> */}
      
   </>
  )
}

export default App;
