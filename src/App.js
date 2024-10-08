import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/alimacy2508?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Alice
          </a>{" "}
          and this code is open-sourced on {""}
          <a
            href="https://github.com/alimacy2508/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
