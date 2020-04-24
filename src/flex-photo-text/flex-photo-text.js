import React from 'react';
import simplon1 from "./simplon1.jpg"
import './flex-photo-text.css';

function Flex(props) {
    return (
        <div className="flex-presentation">
            <div>
                <h2 className="presentation-text-titre">{propos.titre}</h2>
                <p className="presentation-text-paragraphe">Simplon.co est un réseau de fabriques numériques et inclusives à travers le monde souhaitant faire du numérique un véritable levier d’inclusion mais également révéler des talents parmi des publics peu représentés dans le secteur. Lancée en France en 2013, elle ouvre aujourd’hui ses portes au cœur du centre de Tunis avec le soutien de la Fondation Société Générale et la Région Île de France, Simplon Tunisie lance sa deuxième promotion de futurs Développeurs.se Web Mobile au coeur du centre ville de Tunis, à Le15. Une école inclusive, visant à former les demandeurs d’emploi et contribuer ainsi au développement d’un capital humain qualifié et l’inclusion d’un public éloigné de l’emploi.</p>
            </div>
            <div>

                <img className="image-flex" style={{ width: '350px' }} src={simplon1}></img>
            </div>

        </div>

    );
}

export default Flex;