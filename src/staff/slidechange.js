import React from 'react';

export default class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        current: 0, 
        isNext: true 
      };
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
        <ul className="stuff">{items}</ul>
      )
    }
}