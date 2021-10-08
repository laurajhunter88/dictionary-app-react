import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        title="phonetics icon"
      >
        <i className="fas fa-microphone"></i>
      </a>
      <h3>{props.phonetic.text}</h3>
    </div>
  );
}
