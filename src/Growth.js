import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        flexGrow: 1,
      },
    red: {
        color: '#ff0000',
    }
  }));

export default function Growth(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1>Growth</h1>
            <p>ojgeoirjg <span className={classes.red}>sdfsdsdgs </span> oerje oreojt oerjterj trejtej jtreojteorjteor jjteoritjre jtreotjreitj erorijteoirtje jteroitjreoit reotjreoit reoijtreojtj reojtoreitj eoirjteor jtreoijtoreitjoreijt reojtjoerjt </p>
        </div>
        
    )
}