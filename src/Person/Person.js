
//-------using radium component-----------

// import React from 'react'
// import './Person.css'
// import Radium from 'radium'
// const Person=(props)=>{
//     const style={
//         '@media(min-width:500px)':{
//             width:'450px',

//         }
//     }
//     return(
//         <div className="Person" style={style}>
//         <h4 onClick={()=>props.deletePersonDetail(props.selectedindex)}>I am {props.name}. I have {props.age} years old</h4>
//         <p>{props.children}</p>
//         <input type="text" onChange={(e)=>props.nameChangHandler && props.nameChangHandler(e)} value={props.name}/>
//         </div>
//     )
// }

// export default Radium (Person)

//-------using styledComonent---------
import React from 'react'
import './Person.css'
import styled from 'styled-components'

const StyleDiv = styled.div`
width:60%;
border:1px solid #eee;
margin: 16px auto;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align: center;

'@media(min-width:500px)':{
    width:'450px',
    background-color:red
 
}
`

const Person = (props) => {
    const style = {
        '@media(min-width:500px)': {
            width: '450px',
            backgroundColor: "red"

        }
    }
    return (
        // <div className="Person" style={style}>
        <StyleDiv>
            <h4 onClick={() => props.deletePersonDetail(props.selectedindex)}>I am {props.name}. I have {props.age} years old</h4>
            <p>{props.children}</p>
            <input type="text" onChange={(e) => props.nameChangHandler && props.nameChangHandler(e)} value={props.name} />
            {/* </div> */}
        </StyleDiv>
    )
}

export default Person