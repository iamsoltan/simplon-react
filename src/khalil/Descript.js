import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';


 
 
 
 

function App() {
  return (
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
  );
}

export default App;
=======
import './Descript.css';

/* how to use :
props : 
title : the title in pink
paragraph : the content in the paragraph
right_left : put "right" if you want image at the right ...
*/
function Descript(props) {
  if (props.right_left === "right") {
    return (
      <section className="outerContainer">
        <div className="innerContainer">
        <div className="txt">
          <h2> {props.title} </h2>
          <p>{props.paragraph}</p>
          </div>
       <div  className="img" ><img src ={props.img_url} alt="imag" /></div>
       </div>   
       </section>
    );
  }
  if (props.right_left === "left") {
    return (
      <section className="outerContainer">
        <div className="innerContainer">
        <div  className="img" ><img src ={props.img_url} alt="imag" /></div>
        <div className="txt">
          <h2> {props.title} </h2>
          <p>{props.paragraph}</p>
          </div>
       </div>   
       </section>
    );
  }
}

export default Descript;
>>>>>>> 1239d517381e7307b853a43ce46136067af4fb34
