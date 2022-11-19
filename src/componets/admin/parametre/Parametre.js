import React from 'react';
import './parametre.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ParametreUtilisateur from './ParametreUtilisateur';
import logo from './../../../assets/img/R.png'
import EditIcon from '@mui/icons-material/Edit';

const Parametre = () => {
    const pourcentage = 3.5;
    return (
        <div className='parametreMain'>
            <ParametreUtilisateur />
            <div className='containairParametre'>
                <div className='pourcentage'>
                    <p>Pourcentage:<span>{3.5}%</span></p>
                    <button className='btn'>
                        <EditIcon className='incon' style={{ color: 'blue' }} />
                    </button>
                </div>
                <div className='Logo'>
                    <img src={logo} />
                    <EditIcon className='incon' style={{ color: 'blue' }} />
                </div>
                <div className='Name'>
                    <p>Nom:<span>Sandratra</span></p>
                    <EditIcon className='incon' style={{ color: 'blue' }} />
                </div>
                <div className='Name'>
                    <p>Seuil:<span>{50}</span></p>
                    <EditIcon className='incon' style={{ color: 'blue' }} />
                </div>
            </div>
        </div>
    );
};

export default Parametre;