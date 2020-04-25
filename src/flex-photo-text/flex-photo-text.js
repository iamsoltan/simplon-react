import React from 'react';

import './flex-photo-text.css';

function Flex(props) {
    return (
        <div className="flex-presentation">
            <div>
                <h2 className="presentation-text-titre"> {props.name}</h2>
    <p className="presentation-text-paragraphe">{props.discription}</p>
            </div>
            <div>

                <img className="image-flex" style={{ width: '350px' }} src=  {props.img}></img>
            </div>

        </div>

    );
}

export default Flex;