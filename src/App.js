
import React from "react";
import "./App.css";
import InterSimp from "./khalil/InterSimp"; //to test InterSimp component
import Descript from "./khalil/Descript";
import Jess from "./khalil/Jess";

import React from 'react';

import Equipe from './equipe/equipe';

import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Flex from './flex-photo-text/flex-photo-text'


import './App.css';
import Slider from './staff/staff'
import Map from './staff/map'
import Contact  from './staff/contactfrom'
class  App extends  React.Component{
  constructor(props) {



    super(props);
  }
   state = {name:''};

 
  handelChange = (e) => {
    this.setState ({
     name : e.target.value 
    
    })
  }
  handelSubmit =(e) =>{
     e.preventDefault();
     
     console.log(this.state.name)
  }
  render() {
  return (
    <React.StrictMode>
      <Jess />
      <Descript
        title="Presentation"
        paragraph="Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur.Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France,Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15. Une école inclusive, visant à former les demandeurs d’emploi et contribuer ainsi au développement d’un capital humain qualifié et l’inclusion d’un public éloigné de l’emploi."
        img_url="https://i.ytimg.com/vi/Jql4Z6ob_tw/hqdefault.jpg"
        right_left="right"
      />
      <InterSimp />
    </React.StrictMode>
    <div className="App">

      <Equipe />

      <form onSubmit={this.handelSubmit}>
         
      <input type="text"/>
         <input type="submit" value="send" onClick={this.handelChange}/>
      </form>
      <p> {this.state.name}</p>
      <Map/>
      <Slider/>
      <Contact/>


const links = [

  { name: "Acceuil", link: "##" },
  { name: "A propos ", link: "##" },
  { name: "Equipe", link: "##" },
  { name: "Contact", link: "##" }

]



function App() {
  return (
    <div >

      <Navbar links={links} />
      <Flex />
      <Footer links={links} />

    </div>


  );
}
}


export default App;





