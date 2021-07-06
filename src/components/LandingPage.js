import React from 'react'
import { makeStyles } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import PlaceToVisit from "./PlaceToVisit"

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:'100vh',
        background:`url('https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        backgroundSize:'cover',
        backgroundRepeat:'none'

    }
}))


function LandingPage() {

    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <CssBaseline/>
            <Header/>
            <PlaceToVisit/>
            
        </div>
    )
}

export default LandingPage
