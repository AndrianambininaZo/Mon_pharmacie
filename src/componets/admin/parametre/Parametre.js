import React from 'react';
import './parametre.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ParametreUtilisateur from './ParametreUtilisateur';

const Parametre = () => {
    const pourcentage = 3.5;
    return (
        <div className='parametreMain'>
            <div className='pourcentage'>
                <div className='Progressbar'>
                    <label htmlFor="">Pourcentage de vente</label>
                    <CircularProgressbar value={pourcentage} text={`${pourcentage}%`} strokeWidth={4} />
                </div>
                <div className='buttonModifier'>
                    <button className='btnModifier'>Modifier</button>
                </div>
            </div>
            <ParametreUtilisateur />
        </div>
    );
};

export default Parametre;