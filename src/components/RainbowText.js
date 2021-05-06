import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    margin: {
        margin: '0px 5px 0px',
    },
    h3: {
        display: 'inline'
    },
    purple: {
        color: '#b65eba',
    },
    green: {
        color: '#22cc22',
    },
    blue: {
        color: '#2222cc',
    }
}));




export default function RainbowText (props){
    const classes = useStyles();
const colors = [classes.purple, classes.green, classes.blue]
    const randomColor = (colorArray) => {
        return colorArray[Math.floor(Math.random()*colorArray.length)]
    }
    

    return(
        props.string.split(" ").map(word => 
            
        (<div className={classes.margin}>
            <Typography display= 'inline' variant= 'h4' className ={randomColor(colors)} >{word}</Typography>
        </div>          
        )
    )
    )
}