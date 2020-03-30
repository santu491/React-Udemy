import React, { useEffect,useRef } from 'react'
import classes from './Cockpit.css'
import Authinticate from '../../context/auth-context'

const Cockpit = (props) => {
 const buttonToggleRef=useRef()
    useEffect(() => {
        console.log("cockpit useeffect called")
        setTimeout(() => {
           // alert("hii")
        }, 1000)
    },[props.person])

useEffect(()=>{
    buttonToggleRef.current.click()
},[])

    const style = {
        backgroundColor: "green",
        color: "white",
        fontSize: 17,
        padding: 16,
        cursor: "pointer",
        ':hover': {
            backgroundColor: 'lightGreen',
            color: "blue"
        },
    }

    const assignedClasses = [];
    if (props.isPersonDetailsEnabled) {
        style.backgroundColor = "red"
        style[':hover'] = {
            backgroundColor: 'blue',
            color: "green"
        }
    }
    if (props.person.length <= 1) {
        assignedClasses.push("red")
        // assignedClasses.push(classes.red)
    }
    else if (props.person.length >= 2) {
        assignedClasses.push("bold")
        //  assignedClasses.push(classes.bold)
    }
    return (
        <div>
            <h1>I am a React App</h1>
            <p className={assignedClasses.join(" ")}> This is really working</p>
            <button ref={buttonToggleRef} style={style} onClick={props.togglePesonDetails}>Toggle Person</button>
          <Authinticate.Consumer>
           { 
           (context)=>
           <button  style={style} onClick={context.loginauthenticated}>login</button>
           
           }
            </Authinticate.Consumer>
        </div>
    )
}

export default React.memo(Cockpit) 