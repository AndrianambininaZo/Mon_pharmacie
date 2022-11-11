import React, { useState }from 'react';
import './modal.scss';
import { useDispatch } from 'react-redux';
import { AjouterMedicament } from '../../../redux/actions/MedicamentsAction';
const ModalEditer = ({ openModal,familles,Editer }) => {
    const handleClose = () => openModal(false);
    const[ nom, setNom]=useState(Editer.nom);
    const [ datePeremption ,setDatePremtion]=useState(Editer.datePeremption);
    const [dateProduction, setDateProduction]=useState(Editer.dateProduction);
    const [prixAchat, setPrixAchat]=useState(Editer.prixAchat);
    const pourcentage=(prixAchat * 3.5)/24;     
    const prixVente= prixAchat ? parseInt(prixAchat) + pourcentage: 0;
    const [famille ,setFamille]=useState('');
    const dispatch=useDispatch();  
    const handlerSubmit=(e)=>{
        e.preventDefault();
        var today = new Date();
        var dd = String(today. getDate()). padStart(2, '0');
        var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
        var yyyy = today. getFullYear();
        const DateEntre =yyyy +'-' + mm +'-'+ dd;        
        const dataa={
            nom: nom,
            dateEntre: DateEntre,
            dateProduction: dateProduction,
            datePeremption: datePeremption,
            prixAchat: parseInt(prixAchat),
            prixVente: prixVente
          }
        if ( prixAchat < 0 || !famille) {
            return;
            
        }else{
            if(dateProduction===DateEntre){
                alert('mitovy')
            }else{
                alert("tsy mitov");
            }
          //dispatch(AjouterMedicament(famille,dataa));
            handleClose();
        }    
       
    }
    return (
        <div className='mainModal'>
            <div className='top'>
                <label className='title'>Formulaire de modification un medicament</label>
                <label className='labelferme' onClick={handleClose}>X</label>
            </div>
            <div className='center'>
                <form className='forms' onSubmit={handlerSubmit}>  
                <div className='form'>
                <input type="text" value={Editer.id} readOnly />
                </div>              
                    <div className='form'>
                        <label>Nom:</label>
                        <input type="text" required value={nom} placeholder='Nom medicament' onChange={(e)=>setNom(e.target.value)} />
                    </div>
                    <div className='form'>
                        <label>Date_Production:</label>
                        <input type="date" required value={dateProduction} onChange={(e)=>setDateProduction(e.target.value)}/>
                    </div>
                    <div className='form'>
                        <label>Date_Péremption:</label>
                        <input type="date" required value={datePeremption } onChange={(e)=>setDatePremtion(e.target.value)}/>
                    </div>
                    <div className='form'>
                        <label>Prix_Achat:</label>
                        <input type="number" required placeholder="Prix d'achat" value={prixAchat} onChange={(e)=>setPrixAchat(e.target.value)}/>
                    </div>
                    <div className='form'>
                        <label>Prix_Vente:</label>
                        <input type="text" required value={prixVente} placeholder='Prix de vente' readOnly/>
                    </div>                    
                    <div className='form'>
                    <label htmlFor="">Famille:</label>
                        <select name="" id="" required value={famille}  onChange={(e)=>setFamille(e.target.value)} >
                            <option value="">---------------Famille-----------</option>
                            {
                                familles.map((f,index)=>
                                <option key={index} value={f.id}>{f.nom}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='form'>
                        <button type='submit' className='btn btn-success'>Modifier</button>
                    </div>                    
                </form>
            </div>
        </div>
    );
};

export default ModalEditer;