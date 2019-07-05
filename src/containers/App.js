import React, { Component, useState } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import FlightDeck from "../components/FlightDeck/FlightDeck";

class App extends Component {
  state = {
    persons: [
      { id: "jn32", name: "Max", age: 45 },
      { id: "ogk12", name: "Fran", age: 5 },
      { id: "mvcl9", name: "Dan", age: 15 }
    ],
    personView: false
  };

  showPersons = () => {
    const shown = this.state.personView;
    this.setState({
      personView: !shown
    });
  };

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //To avoid directly mutating state. Spread op, distributes properites into new object
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    //Make new copy of state with spread, similar to line 40
    const persons = [...this.state.persons];

    //Replace new copy of current state with updated person's name at correct index point
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletMe = item => {
    const persons = this.state.persons.slice();
    console.log(persons);
    persons.splice(item, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.personView) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.switchNameHandler}
            delete={this.deletMe}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <FlightDeck
          showPersons={this.showPersons}
          persons={this.state.persons}
        />

        {persons}
      </div>
    );
  }
}

export default App;
