import React, { Component } from 'react'
import Typical from 'react-typical'
import '../staff/staf.css'

export default function  animation (props){

  
    return (
      <Typical  
        steps={[props.text1, 1000, props.text2, 500,props.text3,500]}
        loop={Infinity}
        className=  {"oussama"}
        wrapper="h2"
       
      />
    )
  
}