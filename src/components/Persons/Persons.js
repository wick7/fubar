import React from "react";
import Person from "./Person/Person";

//3 props to pass
const persons = props =>
  props.persons.map((person, i) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.id)}
        click={() => props.delete(i)}
      />
    );
  });

export default persons;
