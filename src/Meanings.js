import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <br />
              Example:
              <em> {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
