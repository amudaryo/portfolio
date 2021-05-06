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
        background: 'url("./img/home0.svg") no-repeat',
        backgroundSize: 'contain',
        marginTop: '20px',
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

export default function Home(props) {
    const classes = useStyles();

const text = `Hi, I am Daria, a Full-Stack web developer based in Berlin.`

    return(
        <div  className={classes.root}>
            <div className={classes.content}>           
                <RainbowText colors={colors} string={text} />                
            </div>
            <div className={classes.bgd}></div>            
        </div>
        
    )
}
// export default function Home(props) {

//     return(
//         <div>
//             <h1>Home</h1>
//             <h3>Hi, I am Daria</h3>
//             <p>...a Full-Stack web developer based in Berlin. </p>
//         </div>
//     )
// }