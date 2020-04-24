import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InterSimp from "./khalil/InterSimp"; //to test InterSimp component
import Descript from "./khalil/Descript";
import Jess from "./khalil/Jess";

function App() {
  return (
    <React.StrictMode>
      <Jess />
      <Descript 
      title = "Presentation"
      paragraph = "Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur.
            Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France, <br />
            Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15. Une école inclusive, visant à former les demandeurs d’emploi et contribuer ainsi au développement d’un 
            capital humain qualifié et l’inclusion d’un public éloigné de l’emploi."
      img_url= "https://i.ytimg.com/vi/Jql4Z6ob_tw/hqdefault.jpg"
      right_left = "right" />
      <InterSimp />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
