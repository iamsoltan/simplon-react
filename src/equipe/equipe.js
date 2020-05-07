import React from 'react'
import './equipe.css';
import mouna from './image-equipe/mouna.png'
import sief from './image-equipe/Formateur Lead - Mohamed Seifeddine Hamza.jpg'
import syrine from './image-equipe/Responsable Fabrique Tunis - Syrine Auguste Amy - .jpg'
const equ = [
    { image: mouna, name: "Mouna", description: "COUNTRY MANAGER SIMPLON.COM" },
    { image: sief, name: "Saif", description: " Responsable a simplon" },
    { image: syrine, name: "Syrine", description: " Responsable de fabrique" },
]
function Equipe() {
    return (
        <div>
            <p className='pargraphe-equipe-introduction'>Nos professionnels s’impliquent corps et âme dans ce qui les passionne le plus : se tenir à l’avant-garde de la compétition. Notre équipe valorise le respect mutuel et les relations durables, et nous espérons que vous partagez notre vision. Avec notre vaste expérience en développement Web</p>
            <div className="ContainreboxEquipe" >


                {equ.map(element =>

                    <center className="boxEquipe">
                        <img className='container-image-card' src={element.image}></img>
                        <h4 className='titre-equipe'>{element.name}</h4>
                        <p className='pargraphe-equipe'> {element.description}</p>
                    </center>

                )}
            </div>
        </div>
    );
}

export default Equipe;