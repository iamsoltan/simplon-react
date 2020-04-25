import React from 'react';
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