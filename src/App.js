import './App.css';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Master from './Templates/master';
import { CourseComponent } from './Templates/Template4/Courses/CourseComponent';

const theme = createTheme({

  typography: {
    fontFamily: "Montserrat",
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>  

        <Switch>
            
              <Route exact path="/" component={Master}/>
              <Route exact path="/course" component={CourseComponent}/>
            
        </Switch>     
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
