import React from 'react'
export default class  test extends  React.Component{
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
    <>
      <form onSubmit={this.handelSubmit}>
         
      <input type="text"/>
         <input type="submit" value="send" onChange={this.handelChange}/>
      </form>
      <p> {this.state.name}</p>
       
      </>
  )
      }
    }
