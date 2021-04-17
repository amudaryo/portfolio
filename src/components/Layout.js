import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
    },
    
    },
  });
  
  

export default function Layout(props){
    return(
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}