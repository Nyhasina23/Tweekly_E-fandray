import React , {Component } from 'react'
import {BrowserRouter , Route,Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div className="NavBar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>    
        )
    
    }
}

export default Navbar;