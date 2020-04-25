
import React from "react";
import "./App.css";
import { BrowserRouter , Route}  from 'react-router-dom';
import  Propos  from './Apropos'
import  Contacteznous from './contacteznous'
import  Navbar from './navbar/navbar'
import  Footer from './footer/footer'
import Acceuil  from './Acceuil'
import Equipe  from './Equipe'
const links = [
  { name: "Acceuil", link: "/index" },
  { name: "A propos ", link: "/Apropos" },
  { name: "Equipe", link: "/Equipe" },
  { name: "Contact", link: "/contacteznous" }
 ]
 function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Navbar links={links}/>
    <Route exact path = "/index" component = {Acceuil}/>
    <Route exact path = "/Apropos" component = {Propos}/>
    <Route exact path = "/Equipe" component = {Equipe}/>
  <Route  path = "/Contacteznous" component = {Contacteznous}/> 
     <Footer links={links} /> 
    </div>

    </BrowserRouter>
   
   
  ) 
  




}

export default App