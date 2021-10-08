import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer>
          <a
            className="github-link"
            target="-blank"
            href="https://github.com/laurajhunter88/dictionary-app-react"
          >
            Open-Source
          </a>{" "}
          Code by
          <a
            className="linkedin-link"
            target="-blank"
            href="https://www.linkedin.com/in/laurajaynehunter/"
          >
            {" "}
            Laura Hunter
          </a>
          , hosted on{" "}
          <a
            className="netlify-link"
            target="-blank"
            href="https://vigorous-swirles-6bc761.netlify.app"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
