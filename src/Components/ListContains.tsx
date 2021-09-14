import React from 'react'

interface IProps {
    people : {
        username : string,
        age : number,
        institute : string,
        contains : string
    }[]
}
  

    const ListContains:React.FC<IProps> = ({people}) =>  {
        
    const renderList = () : JSX.Element[] =>{
        return people.map(person => {
            return (
                <div className="ContentList">
                    <li className="list">
                        <div className="rightContent">
                            <div className="content">
                                <div>
                                    <h2  className="header-content">{person.username}</h2>
                                </div>
                                <p className="header-content">Age : {person.age} years old </p>
                                <h3 className="header-content">Institute : {person.institute}</h3>
                                </div>
                                    <p className="contains">{person.contains}</p>
                        </div>
                    </li>
                </div>
            )
        })
    }

        return (
        <div className="contains-item">
            {renderList()}
        </div>
    )
}
export default ListContains;
