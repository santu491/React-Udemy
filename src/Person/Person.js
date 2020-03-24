import React from 'react'
import './Person.css'
const Person=(props)=>{
    return(
        <div className="Person">
        <h4 onClick={()=>props.deletePersonDetail(props.selectedindex)}>I am {props.name}. I have {props.age} years old</h4>
        <p>{props.children}</p>
        <input type="text" onChange={(e)=>props.nameChangHandler && props.nameChangHandler(e)} value={props.name}/>
        </div>
    )
}

export default Person