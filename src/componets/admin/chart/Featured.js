import React from 'react';
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = ({total}) => {
    const pourcentage = 3.5;
    const totalRevenue=(total * 3) / 100
    return (
        <div className='featured'>
            <div className='top'>
                <span className='title'>Totale Revenue: {totalRevenue}</span>
            </div>
            <div className='center'>
                <CircularProgressbar value={pourcentage} text={`${pourcentage}%`} strokeWidth={4} />
            </div>
            <div className='bottom'>
                <span className='title'>Total vente aujourd'hui</span>
                <span className='montant'>{total} Ariaray</span>
                
            </div>
        </div>
    );
};

export default Featured;