import React , {useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import { CssBaseline,AppBar , IconButton , Toolbar , Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll} from 'react-scroll'

const useStyles = makeStyles((theme) => ({

    root:{
        // border:'1px red solid',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    },
    appbar:{
        background:'transparent'
    },
    appbarwrapper:{
        width:'80%',
        margin:'0 auto'
    },
    appbartitle:{
        flexGrow:'1'
    },
    icon:{
        color:'white',
        fontSize:'2em'
    },
    textcolor:{
        color:'#5AFF3D'
    },
    container:{
        textAlign:'center'
    },
    title:{
        color: '#fff',
        fontSize:'4.5em'
    },
    godown:{
        color:'#5AFF3D',
        fontSize:'2.5em'
    }

  
}))


function Header() {

    const [checked , setChecked] = useState(false);

    useEffect(() => {
        setChecked(true)
        
    }, [])


    const classes = useStyles()
    return (
        <div className = {classes.root} id = 'header'>
            <AppBar className = {classes.appbar} elevation = {0}>
                <Toolbar className = {classes.appbarwrapper}>
                <h1 className = {classes.appbartitle}>My <span className = {classes.textcolor}>Island</span></h1>
                <IconButton className = {classes.icon}>
                    <SortIcon/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
              in = {checked}
             {...(checked ? { timeout: 1500 } : {})}
             collapsedHeight={50}
            >
            <div className = {classes.container}>
                <h1 className = {classes.title}>Welcome to my <br/><span className = {classes.textcolor}>Island</span></h1>
                <Scroll to = 'place-to-visit' smooth = {true}>
                <IconButton>
                    <ExpandMoreIcon className = {classes.godown}/>
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
          
            
            
        </div>
    )
}

export default Header
