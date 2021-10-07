import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h3>{props.phonetic.text}</h3>
      <i
        class="fas fa-microphone"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        title="microphone icon"
        alt="phonetics"
      ></i>
    </div>
  );
}
