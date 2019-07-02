import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons:[
      {id: 'jn32', name: 'Max', age: 45},
      {id: 'ogk12', name: 'Fran', age: 5},
      {id: 'mvcl9', name: 'Dan', age: 15}
    ],
    personView: false
  }
  switchAgeHandler = () => {
    this.setState({
     persons:[
       {name: 'Max', age: 245},
       {name: 'Fran', age: 1000},
       {name: 'Dan', age: 33}
     ]
    })   
   }

   showPersons = () => {
    const shown = this.state.personView
    this.setState({
      personView: !shown
    })
   }

   switchNameHandler = (event) => {
    this.setState({
     persons:[
       {name: event.target.value, age: 245},
       {name: 'Fran', age: 1000},
       {name: 'Dan', age: 33}
     ]
    })   
   }

   deletMe = (item) => {
     const persons = this.state.persons.slice()
     console.log(persons)
      persons.splice(item,1)
      this.setState({
        persons: persons
      })
   }

render() {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null;

  if(this.state.personView) {
    persons = (

     <div>
       {
         this.state.persons.map((person, i) => {
      
         return <Person 
          key={person.id}
          name={person.name}
          age={person.age}
          changed={this.switchNameHandler}
          click={() => this.deletMe(i)}
          ></Person>
        
         })
       }
     </div>
    );
  }

  return (
    <div className="App">
     <h1>HI, I'm a React App</h1>
       <button onClick={this.switchAgeHandler}>Increase Age</button>
       <button 
       style={style}
       onClick={this.showPersons}
       
       >Show/Hide</button>         
       
       {persons}
          
        </div>
  );
}
}


export default App;




// const App = props => {
//   const [ personState, personsState] = useState({
//     persons:[
//       {name: 'Max', age: 45},
//       {name: 'Fran', age: 5},
//       {name: 'Dan', age: 15}
//     ]

//   });


  


//   return (
//     <div className="App">
//     <h1>HI, I'm a React App</h1>
//     <button onClick={this.switchAgeHandler}>Increase Age</button>
//       <Person 
//       name={personState.persons[0].name}
//       age={personState.persons[0].age}
//       ></Person>
//       <Person 
//       name={personState.persons[1].name}
//       age={personState.persons[1].age}
//       ></Person>
//       <Person 
//       name={personState.persons[2].name}
//       age={personState.persons[2].age}
//       ></Person>
//     </div>
//   );

// }
