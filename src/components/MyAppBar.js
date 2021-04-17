import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/IconButton'
import { Toolbar } from '@material-ui/core'

export default function MyAppBar(props){
    return(
        <AppBar>
            <Toolbar>            
            <Button>Home</Button>
            <Button>Roots</Button>
            <Button>Growth</Button>
            <Button>Mycellium</Button>
            </Toolbar>
        </AppBar>
    )
}