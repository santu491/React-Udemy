

//--using radium stryle component-----------
// import React, { Component } from 'react';
// import Person from './Person/Person'
// import './App.css';
// import Radium,{StyleRoot} from 'radium'


// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       person: [
//         { id: 0, name: "srinu", age: 25 },
//         { id: 1, name: "Ram", age: 30 },
//         { id: 2, name: "aravind", age: 25 }
//       ],
//       isPersonDetailsEnabled: false
//     }

//   }


//   togglePesonDetails = () => {
//     this.setState({
//       isPersonDetailsEnabled: !this.state.isPersonDetailsEnabled

//     })
//   }

//   nameChangHandler = (event, id) => {
//     const personIndex = this.state.person.findIndex((p) =>{return p.id === id})
//     const person = { ...this.state.person[personIndex] }
//     person.name = event.target.value;
//     let persons = [...this.state.person];
//     persons[personIndex] =Object.assign(persons[personIndex] ,person)
//       this.setState({
//         person: persons
//       })
//   }

//   deletePersonDetail = (selectedndex) => {
//     let persons = this.state.person
//     persons.splice(selectedndex, 1)
//     this.setState({
//       person: persons
//     })

//   }

//   render() {
//     let personData = null
//     const style={
//       backgroundColor:"green",
//       color:"white",
//       fontSize:17,
//       padding:16,
//       cursor:"pointer",
//       ':hover':{
//         backgroundColor:'lightGreen',
//         color:"blue"
//       },
//     }
//     if (this.state.isPersonDetailsEnabled) {
//       personData = this.state.person.map((person, index) => {
//         return (
//           <Person name={person.name} age={person.age}
//             selectedindex={index}
//             deletePersonDetail={(index) => this.deletePersonDetail(index)}
//             nameChangHandler={(e) => this.nameChangHandler(e, person.id)}
//             key={person.id}
//           />
//         )
//       })
//       style.backgroundColor="red"
//       style[':hover']={
//         backgroundColor:'samlon',
//         color:"green"
//       }
//     }

//     const classes=[];
//     if(this.state.person.length<=1){
//       classes.push("red")
//     }
//     else if(this.state.person.length >= 2){
//       classes.push("bold")
//     }
//     return (
//       <StyleRoot>
//       <div className="App">

//         <h1>I am a React App</h1>
//         <p className={classes.join(" ")}> This is really working</p>
//         <button style={style} onClick={this.togglePesonDetails}>Toggle Person</button>
//         {/* {
//           this.state.isPersonDetailsEnabled ?
//             <div>
//               <Person name={"santosh"} age="22"><b>Hobbies:Playing Cricket</b></Person>
//               <Person name="manohar" age="24" />

//             </div>
//             :
//             null
//         } */}
//         {personData}

//       </div>
//       </StyleRoot>
//     );
//   }
// }

// export default Radium(App);




// -------Using functional component and react life cycle hooks---------

// import React,{Component, useState} from 'react';
// import logo from './logo.svg';
// import Person from './Person/Person'
// import './App.css';


// const App =()=>{
//   const [nameState,setNameState]=useState({
//     person:[
//       {name:"srinu", age:25},
//       {name:"Ram",age:30},
//       {name:"aravind",age:25}
//     ]
//   })

//   const handleButtonClick=()=>{
//     setNameState({
//   person:[
//     {name:"srinu", age:25},
//     {name:"Ram",age:30},
//     {name:"Balu",age:25}
//   ]

// })
//   }

//   const nameChangHandler=(event)=>{
//     setNameState({
//       person:[
//         {name:"srinu", age:25},
//         {name:event.target.value,age:30},
//         {name:"Balu",age:25}
//       ]

//     })
//   }


//   return (
//     <div className="App">
//       <button onClick={handleButtonClick}>Switch</button>
//       <h1>I am a React App</h1>
//       <p>This is really working</p>
//       <Person name={"santosh"} age="22"><b>Hobbies:Playing Cricket</b></Person>
//       <Person name="manohar" age="24"/>
//       <Person name={nameState.person[0].name} age={nameState.person[0].age} />
//       <Person name={nameState.person[1].name} age={nameState.person[1].age} nameChangHandler={nameChangHandler}/>
//       <Person name={nameState.person[2].name} age={nameState.person[2].age}/>

//     </div>
//   );

// }

// export default App;

//--------using Styled Componet------------------------

// import React, { Component } from 'react';
// import Person from '../components/Persons/Person/Person'
// import './App.css';
// // import Radium,{StyleRoot} from 'radium'
// import styled from 'styled-components'
// import Errorboundary from '../ErrorBoundary/ErrorBoundary'

// const StyledButton = styled.button`
// background-color:${props=>props.alt?'red':"green"},
// color:white,  
// font-size:17,
// padding:16,
// cursor:pointer,
// &:hover {
//   background-color:${props=>props.alt?"green":"lightGreen"},
//   color:blue
// `;

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       person: [
//         { id: 0, name: "srinu", age: 25 },
//         { id: 1, name: "Ram", age: 30 },
//         { id: 2, name: "aravind", age: 25 }
//       ],
//       isPersonDetailsEnabled: false
//     }

//   }


//   togglePesonDetails = () => {
//     this.setState({
//       isPersonDetailsEnabled: !this.state.isPersonDetailsEnabled

//     })
//   }

//   nameChangHandler = (event, id) => {
//     const personIndex = this.state.person.findIndex((p) => { return p.id === id })
//     const person = { ...this.state.person[personIndex] }
//     person.name = event.target.value;
//     let persons = [...this.state.person];
//     persons[personIndex] = Object.assign(persons[personIndex], person)
//     this.setState({
//       person: persons
//     })
//   }

//   deletePersonDetail = (selectedndex) => {
//     let persons = this.state.person
//     persons.splice(selectedndex, 1)
//     this.setState({
//       person: persons
//     })

//   }

//   render() {
//     let personData = null
//     const style = {
//       backgroundColor: "green",
//       color: "white",
//       fontSize: 17,
//       padding: 16,
//       cursor: "pointer",
//       ':hover': {
//         backgroundColor: 'lightGreen',
//         color: "blue"
//       },
//     }
//     if (this.state.isPersonDetailsEnabled) {
//       personData = this.state.person.map((person, index) => {
//         return (
//           <Errorboundary key={person.id}>
//           <Person name={person.name} age={person.age}
//             selectedindex={index}
//             deletePersonDetail={(index) => this.deletePersonDetail(index)}
//             nameChangHandler={(e) => this.nameChangHandler(e, person.id)}
//             key={person.id}
//           />
//           </Errorboundary>
//         )
//       })
//       style.backgroundColor = "red"
//       style[':hover'] = {
//         backgroundColor: 'samlon',
//         color: "green"
//       }
//     }

//     const classes = [];
//     if (this.state.person.length <= 1) {
//       classes.push("red")
//     }
//     else if (this.state.person.length >= 2) {
//       classes.push("bold")
//     }
//     return (

//       <div className="App">

//         <h1>I am a React App</h1>
//         <p className={classes.join(" ")}> This is really working</p>
//         <button style={style} onClick={this.togglePesonDetails}>Toggle Person</button>
//         {/* <StyledButton alt={this.state.isPersonDetailsEnabled} onClick={this.togglePesonDetails}>Toggle Person</StyledButton> */}
//         {/* {
//           this.state.isPersonDetailsEnabled ?
//             <div>
//               <Person name={"santosh"} age="22"><b>Hobbies:Playing Cricket</b></Person>
//               <Person name="manohar" age="24" />

//             </div>
//             :
//             null
//         } */}
//         {personData}

//       </div>

//     );
//   }
// }

// export default App;


//----------

import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person'
import './App.css';
// import Radium,{StyleRoot} from 'radium'
import styled from 'styled-components'
import Errorboundary from '../ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import AuthContext from './../context/auth-context'

const StyledButton = styled.button`
background-color:${props => props.alt ? 'red' : "green"},
color:white,  
font-size:17,
padding:16,
cursor:pointer,
&:hover {
  background-color:${props => props.alt ? "green" : "lightGreen"},
  color:blue
`;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      person: [
        { id: 0, name: "srinu", age: 25 },
        { id: 1, name: "Ram", age: 30 },
        { id: 2, name: "aravind", age: 25 }
      ],
      isPersonDetailsEnabled: false,
      count: 0,
      isAuthenticated: false
    }

  }


  togglePesonDetails = () => {
    this.setState({
      isPersonDetailsEnabled: !this.state.isPersonDetailsEnabled

    })
  }

  nameChangHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => { return p.id === id })
    const person = { ...this.state.person[personIndex] }
    person.name = event.target.value;
    let persons = [...this.state.person];
    persons[personIndex] = Object.assign(persons[personIndex], person)
    this.setState({
      person: persons
    })
  }

  deletePersonDetail = (selectedndex) => {
    let persons = this.state.person
    persons.splice(selectedndex, 1)
    // this.setState({
    //   person: persons
    // })

    // If setState ids depends on prevoius state then we have to use like thi
    this.setState((prevState, props) => {
      return {
        person: persons,
        count: prevState.count + 1
      }

    })
  }

  loginauthenticated = () => {
    this.setState({ isAuthenticated: true })
  }

  render() {
    let personData = null
    if (this.state.isPersonDetailsEnabled) {
      personData = <Persons
        person={this.state.person}
        deletePersonDetail={(index) => this.deletePersonDetail(index)}
        nameChangHandler={(e, id) => this.nameChangHandler(e, id)}
        isAuthenticated={this.state.isAuthenticated}
      />
    }
    return (

      <div className="App">
        <AuthContext.Provider value={{
          loginauthenticated:this.loginauthenticated,
          isAuthenticated:this.state.isAuthenticated
        }}>
        <Cockpit togglePesonDetails={this.togglePesonDetails}
          person={this.state.person}
          isPersonDetailsEnabled={this.state.isPersonDetailsEnabled}
          //loginauthenticated={this.loginauthenticated}
        />
        {personData}
        </AuthContext.Provider>
        {/* <StyledButton alt={this.state.isPersonDetailsEnabled} onClick={this.togglePesonDetails}>Toggle Person</StyledButton> */}
        {/* {
          this.state.isPersonDetailsEnabled ?
            <div>
              <Person name={"santosh"} age="22"><b>Hobbies:Playing Cricket</b></Person>
              <Person name="manohar" age="24" />

            </div>
            :
            null
        } */}

      </div>

    );
  }
}

export default withClass(App);
