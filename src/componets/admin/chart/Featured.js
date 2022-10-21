import React from 'react';
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    const pourcentage = 90;
    return (
        <div className='featured'>
            <div className='top'>
                <span className='title'>Totale Revenue(Aujourd'hui)</span>
            </div>
            <div className='center'>
                <CircularProgressbar value={pourcentage} text={`${pourcentage}%`} strokeWidth={4} />
            </div>
            <div className='bottom'>
                <span className='title'>Total vente aujourd'hui</span>
                <span className='montant'>{1000} Ariaray</span>
                <span>....</span>
            </div>
        </div>
    );
};

export default Featured;