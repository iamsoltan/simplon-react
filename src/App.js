import React from 'react';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Flex from './flex-photo-text/flex-photo-text'

import './App.css';


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

export default App;



