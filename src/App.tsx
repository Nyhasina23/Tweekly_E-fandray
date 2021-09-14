import react , {Component} from 'react'
import './App.css';
import {BrowserRouter , Route,Link,Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/NavBar';
import ErrorPage from './Components/ErrorPage';
export default class App extends Component {
  render(){
    
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    
    );
  }
}

