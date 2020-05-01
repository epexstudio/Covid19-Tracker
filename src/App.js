import React ,{Component} from 'react';
import './App.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {
  BrowserRouter as Router ,
  Link,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container-fluid" style={{paddingRight:'0px',paddingLeft:'0px'}}>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/india">
                <India/>
              </Route>
              <Route exact path="/world">
                <World/>
              </Route>
            </Switch>

          </Router>

      </div>
    )
    
  }
}


export default App;
