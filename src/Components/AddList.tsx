import React, { useState } from 'react'
import { IState as Props } from './Main';

interface IProps {
    people : Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    
}

const AddList:React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        username : "",
        age : "" ,
        institute : "",
        contains : ""
    })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const HandleClick =  () :void =>{
        if(
            !input.username || !input.age || !input.institute || !input.contains
            ){
                return;
            }
        setPeople([
            ...people,
            {
                username : input.username,
                age : parseInt(input.age),
                institute : input.institute,
                contains : input.contains
            }
        ]);
        
        setInput({
            username : "",
            age : "",
            institute : "",
            contains : ""
        })

    }

    return (
        <div className="Content-form">
             <input type="text"
             placeholder="Username"
             className="AddList-Input"
             value = {input.username}
             onChange = {HandleChange}
             name="username"
             />       
             <input type="text"
             placeholder="Age"
             className="AddList-Input"
             value = {input.age}
             onChange = {HandleChange}
             name="age"
             />       
             <input type="text"
             placeholder="Institute"
             className="AddList-Input"
             value = {input.institute}
             onChange = {HandleChange}
             name="institute"
            />       
             <textarea  
             placeholder="Contains"
             className="AddList-Input"
             value = {input.contains}
             onChange = {HandleChange}
             name="contains"
            />       
             <button className="AddList-btn" onClick={HandleClick}>Publish</button>
        </div>
    )
}
export default AddList;
