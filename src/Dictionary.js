import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.pexels.com/api/documentation/?
    let pexelsApiKey =
      "563492ad6f91700001000001f42235b7b0be4d058143d989bfc112a1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="form-section">
          <p className="hint"> What word would you like to look up? </p>
          <form onSubmit={handleSubmit}>
            <input
              className="search-bar"
              type="search"
              autoFocus={true}
              onChange={keywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
