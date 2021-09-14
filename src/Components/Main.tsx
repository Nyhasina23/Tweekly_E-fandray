import React, { useState } from 'react'
import ListContains from './ListContains'
import AddList from './AddList';
import Header from './Header';
import Navbar from './NavBar';
export interface IState {
    people : {
        username : string,
        age : number,
        institute : string,
        contains : string
    }[]
}
export default function Main() {
    const [people,setPeople] = useState<IState["people"]>([
        {
            username : "Ny Hasina",
            age : 23,
            institute : "ISPM (Institut Supérieur Polytechnique de Madagascar)",
            contains : "'Lay ISPM tena maminay , tsy mba foinay tokoa hatrizay"
        }
    ])

    

        return (
            <div className="Main">
                    <h1>List of the Contains</h1>
                    <div className="container">
                        <div className="Left">
                            <Navbar />
                            <Header/>
                            <AddList  people={people} setPeople = {setPeople} />
                        </div>
                        <div className="Right">
                            <h5>E-Fandray is a forum plateform public to all people who like share his mood</h5>
                            <h5>Just complete the forms in the left section and click the publish <br/> button so you can see the other pub already exists</h5>
                            <ListContains people={people} />
                        <h4>TWEEKLY 2021 - Technologie JS</h4>
                        </div>
                    </div>
            </div>
        )
}

