import React from 'react';
import { useState } from 'react';
import './modalVente.scss';

const ModalVente = ({ openModal, medicament, ajouterPanier }) => {
    const handleClose = () => openModal(false);
    const [nom, setNom] = useState(medicament.nom);
    const [qtVente, setqtVente] = useState('');
    const [id, setId] = useState(medicament.idMedicament)
    const qteExistant = medicament.qte
    const qteActuel = qtVente ? qteExistant - parseInt(qtVente) : 0;
    const prixVente = qtVente * medicament.prixVente
    const handlerSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            nom: nom,
            prixVente:prixVente,
            qtVente:qtVente
        }
        if (qteActuel < 1) {
            return;            
        }
        
       ajouterPanier(data)
       openModal(false);
    }
    return (
        <div className='mainModalVente'>
            <div className='top'>
                <label className='title'>Formulaire de commande une medicament</label>
                <label className='labelferme' onClick={handleClose}>X</label>
            </div>
            <div className='center'>
                <form onSubmit={handlerSubmit}>
                    <div className='form'>
                        <label>Nom</label>
                        <input type="text" value={nom} readOnly />
                    </div>
                    <div className='form'>
                        <label>Qte existant</label>
                        <input type="text" value={qteExistant} readOnly />
                    </div>
                    <div className='form'>
                        <label>Qte actuel</label>
                        <input type="text" value={qteActuel} readOnly />
                    </div>
                    <div className='form'>
                        <label>Qte Vente</label>
                        <input type="text" required value={qtVente} onChange={(e) => setqtVente(e.target.value)} />
                    </div>
                    <div className='form'>
                        <label>Prix vente</label>
                        <input type="text" value={prixVente} readOnly />
                    </div>
                    <div className='form'>
                      <button type='submit' className='btn btn-primary'>Ajouter au panier</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalVente;