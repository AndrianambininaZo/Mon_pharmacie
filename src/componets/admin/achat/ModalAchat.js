import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './modalAchat.scss'


const ModalAchat = ({medicament,openModal,ajouterPanier}) => {
    const [id,setId]=useState(medicament.id);
    const [nom ,setNom]=useState(medicament.nom);
    const [qte, setQte]=useState(medicament.qte);
    const [qteAcheter, setQteAcheter]=useState('');
    const [prix, setPrix]=useState('');
    const montant=qteAcheter && prix ? parseInt(qteAcheter) * prix :0;
    const qteTotal=qteAcheter ? parseInt(qteAcheter) + qte : qte;
    const disabled =qteTotal < 50 ? true:false;
    const handleClose=()=>openModal(false);
    const handlerSubmit=(e)=>{ 
        e.preventDefault();
        const data={
            id:id,
            nom:nom,
            qte:parseInt(qteAcheter),
            montant:parseInt(prix),
            qteFinal:qteTotal

        }
        ajouterPanier(data);
        openModal(false);
              
    }
   
    return (
        <div className='mainModal'>
            <div className='top'>
                <label className='title'>Formulaire approvisonneent une medicament</label>
                <label className='labelferme' onClick={handleClose}>X</label>
            </div>
            <div className='center'>
                <form onSubmit={handlerSubmit}>                
                    <div className='form'>
                        <label>Nom:</label>
                        <input type="text" required value={nom} readOnly/>
                    </div>
                    <div className='form'>
                        <label>Quatite actuel:</label>
                        <input type="text" required value={qte} readOnly/>
                    </div>
                    <div className='form'>
                        <label>Quatite achat:</label>
                        <input type="number" required value={qteAcheter} onChange={(e)=>setQteAcheter(e.target.value)}/>
                    </div>
                    <div className='form'>
                        <label>Prix unitaire:</label>
                       <input type="number" value={ prix} onChange={(e)=>setPrix(e.target.value)} required />
                    </div>
                    <div className='form'>
                        <label>Montant:</label>
                       <input type="number" value={montant} readOnly />
                    </div>
                    <div className='form'>
                        <label>Quatite total:</label>
                       <input type="number" value={ qteTotal}readOnly />
                    </div>                
                    <div className='form'>
                        <button type='submit' className='btn btn-success' disabled={disabled}>Valider</button>
                    </div>                  
                </form>
            </div>
        </div>
    );
};

export default ModalAchat;