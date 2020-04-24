import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './staff/staff'
import Map from './staff/map'
import Contact  from './staff/contactfrom'
class  App extends  React.Component{
  constructor(props) {

    super(props);
  }
   state = {name:''};

 
  handelChange = (e) => {
    this.setState ({
     name : e.target.value 
    
    })
  }
  handelSubmit =(e) =>{
     e.preventDefault();
     
     console.log(this.state.name)
  }
  render() {
  return (
    <div className="App">
      <form onSubmit={this.handelSubmit}>
         
      <input type="text"/>
         <input type="submit" value="send" onClick={this.handelChange}/>
      </form>
      <p> {this.state.name}</p>
      <Map/>
      <Slider/>
      <Contact/>
    </div>
  );
}
}

export default App;