import React from 'react';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Flex from './flex-photo-text/flex-photo-text'

import './App.css';
import Slider from './staff/staff'
import Map from './staff/map'
import Contact  from './staff/contactfrom'
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
      <Map/>
 <Slider/>
 <Contact titre={presentation}/>
      <Footer links={links} />
  
  
  

    </div>

  );
}



export default App;





