import React from "react";

const flightDeck = props => {
  return (
    <div>
      <h1 className={props.persons.length < 2 ? "red" : "bold"}>
        HI, I'm a React App
      </h1>
      <button className="mainBtn" onClick={props.showPersons}>
        Show/Hide
      </button>
    </div>
  );
};

export default flightDeck;
