import React from 'react';
import InterSimp from "./khalil/InterSimp"; //to test InterSimp component
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Flex from './flex-photo-text/flex-photo-text'
import Slider from './staff/staff'
import Map from './staff/map'
import simplon1 from "./image/simplon1.JPG"
import Animate from './staff/animation'

const links = [
    { name: "Acceuil", link: "/Acceuil" },
    { name: "A propos ", link: "/Apropos" },
    { name: "Equipe", link: "/Equipe" },
    { name: "Contact", link: "/contacteznous" }
   ]
function Acceuil() {
    return (
        <>
       
        <Animate text1="In Code We Trust !" text2="Quelle est notre mission?" text3=" former gratuitement des publics éloignés de la formation et/où de l’emploi aux métiers du numérique en tension" />
      <Slider/>
      <Flex img = {simplon1}   name="PRESENTATION" discription="Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur. Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France, Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15. Une école inclusive, visant à former les demandeurs d’emploi et contribuer ainsi au développement d’un capital humain qualifié et l’inclusion d’un public éloigné de l’emploi." />
      <InterSimp />
       <h3 className="rouge">Notre emplacement</h3>
      
       <Map/>
       
     
 
        </>
    )
  }
  
  export default Acceuil;