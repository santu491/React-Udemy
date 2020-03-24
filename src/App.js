import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      person: [
        { name: "srinu", age: 25 },
        { name: "Ram", age: 30 },
        { name: "aravind", age: 25 }
      ],
      isPersonDetailsEnabled: false
    }

  }
  

  togglePesonDetails = () => {
    this.setState({
      isPersonDetailsEnabled: !this.state.isPersonDetailsEnabled

    })
  }

  nameChangHandler = (event) => {
    this.setState({
      person: [
        { name: "srinu", age: 25 },
        { name: event.target.value, age: 30 },
        { name: "Balu", age: 25 }
      ]

    })
  }

  deletePersonDetail = (selectedndex) => {
    let persons = this.state.person
    persons.splice(selectedndex, 1)
    this.setState({
      person: persons
    })

  }

  render() {
    let personData = null
    if (this.state.isPersonDetailsEnabled) {
      personData = this.state.person.map((person, index) => {
        return (
          <Person name={person.name} age={person.age}
            selectedindex={index}
            deletePersonDetail={(index) => this.deletePersonDetail(index)} nameChangHandler={(e) => this.nameChangHandler(e)} />
        )
      })
    }
    return (
      <div className="App">

        <h1>I am a React App</h1>
        <p>This is really working</p>
        <button onClick={this.togglePesonDetails}>Switch</button>
        {/* {
          this.state.isPersonDetailsEnabled ?
            <div>
              <Person name={"santosh"} age="22"><b>Hobbies:Playing Cricket</b></Person>
              <Person name="manohar" age="24" />

            </div>
            :
            null
        } */}
        {personData}

      </div>
    );
  }
}

export default App;




// Using functional component and react life cycle hooks

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

