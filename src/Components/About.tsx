import React,{Component} from 'react'
import Main from './Main'
import ListContains from './ListContains'
import AddList from './AddList';
import Header from './Header';
import Navbar from './NavBar';

export default class About extends Component{
    render(){
        return(
            <div className="Main">
                    <h1>About the Developer</h1>
                    <div className="container">
                        <div className="Left">
                            <Navbar />
                            <Header/>
                        </div>
                        <div>
                            <h2>Created by ANDRIAMASIMANANA Ny Hasina Finaritra</h2> <br/>
                            <h2>IMTICIA 3 N°14</h2>
                        </div>
                    </div>
            </div>
        )
    }
}