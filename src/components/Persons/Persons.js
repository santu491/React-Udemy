import React, {Component} from 'react'
import Errorboundary from '../../ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'


 const Persons=(props)=>props.person.map((person, index) => {
    return (
      <Errorboundary key={person.id}>
      <Person name={person.name} age={person.age}
        selectedindex={index}
        deletePersonDetail={(index) => props.deletePersonDetail(index)}
        nameChangHandler={(e) => props.nameChangHandler(e, person.id)}
        key={person.id}
        // isAuthenticated={props.isAuthenticated}
      />
      </Errorboundary>
    )
  })

  export default Persons