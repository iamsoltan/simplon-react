import React from 'react'
import './equipe.css';

const equ = [
    { image: "mouna", name: "Mouna", description: "COUNTRY MANAGER SIMPLON.COM" },
    { image: "sief", name: "Saif", description: " Responsable a simplon" },
    { image: "syrine", name: "Syrine", description: " Responsable de fabrique" },
]
function Equipe() {
    return (
        <div>
            <p>Nos professionnels s’impliquent corps et âme dans ce qui les passionne le plus : se tenir à l’avant-garde de la compétition. Notre équipe valorise le respect mutuel et les relations durables, et nous espérons que vous partagez notre vision. Avec notre vaste expérience en développement Web</p>
            <div className="ContainreboxEquipe" >
                {equ.map(element => <div className="boxEquipe"> <img src='{element.image}'></img> <h4 className='titre-equipe'>{element.name}</h4> <p className='pargraphe-equipe'> {element.description}</p> </div>)}
            </div>
        </div>
    );
}

export default Equipe;