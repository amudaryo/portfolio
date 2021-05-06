import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import {Link}from 'react-router-dom'
import MyceliumIcon from './icons'

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
}));

export default function MyAppBar(props){

    const classes = useStyles();

    return(

        <div className={classes.root}>
        <AppBar position='static'>
            <Toolbar>            
                {/* component={Link} -   */}
            <div className={classes.title} ></div>
            <Button color="inherit" component={Link} exact to={'/'}>Home</Button>
            <Button color="inherit" component={Link}  to={'/roots'}>Roots</Button>
            <Button color="inherit" component={Link}  to={'/growth'}>Growth</Button>
            <Button startIcon={<MyceliumIcon />} size='large' color="inherit" component={Link}  to={'/mycelium'}>Mycelium</Button>
            </Toolbar>
        </AppBar> 
        </div>
        
    )
}