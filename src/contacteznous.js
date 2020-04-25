import React from 'react';
import Contact from './staff/contactfrom'
import simplon from './image/react-simplon.png'
import Map from './staff/map'
import './staff/staf.css'
const links = [
    { name: "Acceuil", link: "/" },
    { name: "A propos ", link: "/Apropos" },
    { name: "Equipe", link: "/Equipe" },
    { name: "Contact", link: "/contacteznous" }
   ]
function Contacteznous() {
    return (
        <>
       {/* <Navbar links={links}/> */ } 
       <div className="row flex-between">
        <img src={simplon} alt="image simplon"/>
      <div width = "30%"> 
      
      <Map/>
      </div>
             
        
            
         <div className="image">
          
          
          
         </div> </div>
         <Contact/>
        {/*<Footer links={links} /> */}
       
        </>
    );
  }
  
  export default Contacteznous;