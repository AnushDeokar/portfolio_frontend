import './App.css';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import Master from './Templates/master';


const theme = createTheme({

  typography: {
    fontFamily: "Montserrat",
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    {/* <Router>  

        <Switch>
            
              <Route exact path="/" component={Master}/>
              <Route exact path="/course" component={CourseComponent}/>
            
        </Switch>     
    </Router> */}

    <Master/>
    </MuiThemeProvider>
  );
}

export default App;
