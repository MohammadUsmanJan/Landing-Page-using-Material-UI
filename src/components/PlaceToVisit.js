import React from 'react'
import { makeStyles } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import ImageCard from "./ImageCard"
import places from "../places"
import useWindowPosition from '../hook';


const useStyles = makeStyles((theme) => ({
   
    root:{
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {
            display:'flex',
            flexDirection:'column'
          }
    }
}))


function PlaceToVisit() {

    const checked = useWindowPosition('header')

    const classes = useStyles();
    return (
        <div className = {classes.root} id = 'place-to-visit'>
            <ImageCard place = {places[0]} checked = {checked}/>    
            <ImageCard place = {places[1]} checked = {checked}/>
        </div>
    )
}

export default PlaceToVisit
