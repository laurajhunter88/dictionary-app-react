import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  {definition.definition}
                  <br />
                  <em> {definition.example}</em>
                </div>
              </div>
              <div className="-6">
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
