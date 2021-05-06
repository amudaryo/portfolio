import RainbowText from './components/RainbowText'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    bgd: {
        display: 'flex',
        flexFlow: 'row wrap',
        background: 'url("./img/roots0.svg") no-repeat',
        backgroundSize: '100% 100%',
        width: '50%',
        height : '75vh',
    },
    content: {
        display: 'flex',
        width: '50%',
        flexFlow: 'row wrap',
        padding: '5%',
    },
}));

const colors = ['purple', 'green', 'blue']

export default function Roots(props) {
    const classes = useStyles(); 

const rootText = `I come from Russia, I have a journalism background. I'm interested in Art and History. `

    return(
        <div  className={classes.root}>
            <div className={classes.content}>           
<RainbowText colors={colors} string={rootText} />                
            </div>
            <div className={classes.bgd}></div>
            
        </div>
        
    )
}