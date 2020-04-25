import React from 'react';
import Navbar from './navbar/navbar'
import InterSimp from "./khalil/InterSimp"; //to test InterSimp component
import Footer from './footer/footer'
import Flex from './flex-photo-text/flex-photo-text'
import Flexreverse from './flex-photo-text/flex-reverse'
import Slider from './staff/staff'
import Map from './staff/map'
import Video from './staff/video'
import Contact  from './staff/contactfrom'
import    './staff/staf.css'
import simplon1 from "./image/simplon1.JPG"
import simplon2 from './image/IMG_0582.JPG'
const links = [
    { name: "Acceuil", link: "/" },
    { name: "A propos ", link: "/Apropos" },
    { name: "Equipe", link: "/Equipe" },
    { name: "Contact", link: "/contacteznous" }
   ]
function Apropos() {
    return (
        <>
        <div className="container">
           <Video/></div>
      
      <Flex name="Notre Vision" img = {simplon1}  discription="Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur. Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France, Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15. Une école inclusive, visant à former les demandeurs d’emploi et contribuer ainsi au développement d’un capital humain qualifié et l’inclusion d’un public éloigné de l’emploi." />
      <Flexreverse name="Notre Valeur" img = {simplon1}  discription="Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur. Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France, Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15."></Flexreverse>
        
  <Flex name="Notre mission "  img = {simplon2}   discription="Simplon.co est un réseau de fabriques numérique"/>
  

    
        </>
    )
  }
  
  export default Apropos;