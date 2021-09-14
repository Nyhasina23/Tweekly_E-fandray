import React,{Component} from 'react'
import Header from './Header'
import Navbar from './NavBar'
import '../App.css';
import Main from './Main';

export default class Home extends Component {
    render(){
        
        return(
            <div className="Container">
                <div className="main">
                    <Main/>
                </div>
            </div>

        )
        
    }
}