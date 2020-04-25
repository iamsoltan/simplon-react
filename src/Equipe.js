import React from 'react';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Box from './flex-photo-text/box'
import   './flex-photo-text/flex-photo-text.css'
const links = [
    { name: "Acceuil", link: "/" },
    { name: "A propos ", link: "/Apropos" },
    { name: "Equipe", link: "/Equipe" },
    { name: "Contact", link: "/contacteznous" }
   ]
function Equipe() {
    return (
        <>
    
        <h1 style={{textAlign:"center" , color:"red"}}>Equipe</h1>
        <Box/>
        
        
       
        </>
    );
  }
  
  export default Equipe;