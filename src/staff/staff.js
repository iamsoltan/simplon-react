import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';


import ReactDOM from 'react-dom';
//import './abc.scss' ;
import './staf.css'
import slide1 from './slide1.png'
library.add(
);
class Slider extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        items: [
          'https://simplon.co/storage/1326/responsive-images/home_image_1110x550___medialibrary_original_1110_550.jpg',
          'slide1.png',
          '../image/IMG_1268.jpg'
        ], 
        current: 0, 
        isNext: true 
      };
      
      this.handlerPrev = this.handlerPrev.bind(this);
      this.handlerNext = this.handlerNext.bind(this);
      this.goToHistoryClick = this.goToHistoryClick.bind(this);
    }
    
    handlerPrev() {
      let index = this.state.current,
          length = this.state.items.length;
      
      if( index < 1 ) {
        index = length;
      }
      
      index = index - 1;
    
      this.setState({
        current: index,
        isNext: false
      });
    }
    
    handlerNext() {
      let index = this.state.current,
          length = this.state.items.length - 1;
      
      if( index == length ) {
        index = -1;
      }
      
      index = index + 1;
      
      this.setState({
        current: index,
        isNext: true
      });
    }
    
    goToHistoryClick( curIndex, index ) {
      let next = (curIndex < index);
      this.setState({
        current: index,
        isNext: next
      });                 
    }
    
    render(){
      let index = this.state.current,
          isnext = this.state.isNext,
          src = this.state.items[index];
    
      return (
        
       
       
        <div className="app">
      
      
      
          <FontAwesomeIcon icon={['fa', "font-case"]} />
          <FontAwesomeIcon icon={['fa', 'facebook-messenger']} />
          <FontAwesomeIcon icon={['fas', 'fa-laptop-house']} />
          <FontAwesomeIcon icon={faBeer} className="blanc" />
           
            <p>bonjour</p>
          <br/><br/>
          <div className="carousel">
               <div className="carousel_slide" key={index}>
                 <img src={src}/>
               </div>
             <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
             <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
            <div className="carousel_history">
              <History 
                current={this.state.current} 
                items={this.state.items}
                changeSilde={this.goToHistoryClick}
              />
            </div>
            </div>
        </div>
      )
    }
  }
  
  class History extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      let current = this.props.current;
      let items = this.props.items.map( (el, index) => {
        let name = (index == current) ? 'active' : '';
        return (
          <li key={index}>
            <button 
              className={name} 
              onClick={ () => this.props.changeSilde(current, index) }
            ></button>
          </li>
        )
      });
      
      return (
        <>
        <ul className="itms">{items}</ul>
      

        </>
      )
    }
}

// Render Carousel component
export default Slider;