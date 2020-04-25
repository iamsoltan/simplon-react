import React from 'react';

import './flex-photo-text.css';

function Flexreverse(props) {
    return (
        
        <div className="flex-presentation">
        <img className="image-flex" style={{ width: '350px' }} src=  {props.img}/>
            <div>
                <h2 className="presentation-text-titre"> {props.name}</h2>
               <p className="presentation-text-paragraphe">{props.discription}</p>
                   </div>
                   </div>
          

              
            

     
    
    );
}

export default Flexreverse;