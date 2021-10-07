import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h3>{props.phonetic.text}</h3>
      <a
        class="fas fa-microphone"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        title="microphone icon"
      ></a>
    </div>
  );
}
