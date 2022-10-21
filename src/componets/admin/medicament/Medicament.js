import React from 'react';
import './medicemen.scss'
import AddIcon from '@mui/icons-material/Add';

const Medicament = () => {
    return (
        <div className='medicament container'>
            <div className='top'>
            <div className='tete'>
                <span className='title'>Liste de tous medicament</span>
                <button className='btn btn-success'><AddIcon/>Creer</button>
            </div>
            <div className='card'>                
                <div className='card-body'>
                salut
                </div>
            </div>
            </div>
        </div>
    );
};

export default Medicament;