import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              Definition:
              <br />
              {definition.definition}
              <br />
              <br />
              Example:
              <em> {definition.example}</em>
              <Synonyms synomyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
