import React, { useState }from 'react';
import './modal.scss';
import { useDispatch } from 'react-redux';
import { AjouterMedicament } from '../../../redux/actions/MedicamentsAction';

const ModalMedicament = ({ openModal,familles }) => {
    
    const handleClose = () => openModal(false);
    const[ nom, setNom]=useState('');
    const [ datePeremption ,setDatePremtion]=useState('');
    const [dateProduction, setDateProduction]=useState('');
    const [prixAchat, setPrixAchat]=useState('');
    const pourcentage=(prixAchat * 3.5)/24;     
    const prixVente= prixAchat ? (parseInt(prixAchat) + pourcentage).toFixed(0): 0;
    const [stock, setStock]=useState('');
    const [famille ,setFamille]=useState('');
    const [unite ,setUnite]=useState('');
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
            unite:unite,
            dateProduction: dateProduction,
            datePeremption: datePeremption,
            prixAchat: prixAchat,
            prixVente:prixVente
          }
        if (stock < 0 || prixAchat < 0 || !famille) {
            return;
            
        }else{
            if(dateProduction===DateEntre){
                alert('mitovy')
            }else{
                alert("tsy mitov");
            }
          dispatch(AjouterMedicament(stock,famille,dataa));
            handleClose();
        }
        
       
       
    }

    return (
        <div className='mainModal'>
            <div className='top'>
                <label className='title'>Formulaire d'ajouter un medicament</label>
                <label className='labelferme' onClick={handleClose}>X</label>
            </div>
            <div className='center'>
                <form className='forms' onSubmit={handlerSubmit}>                
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
                        <label>Quatité en stock:</label>
                       <input type="number" required value={stock} placeholder='stock ajouter' onChange={(e)=>setStock(e.target.value)} />
                    </div>
                    <div className='form'>
                    <label htmlFor="">Famille:</label>
                        <select required  value={unite}  onChange={(e)=>setUnite(e.target.value)} >
                            <option value="">---------------Unite-----------</option>                                
                            <option value="1">Unite 1</option>                                
                            <option value="plaquete">plaquete</option>                               
                            <option value="carton(50)">carton(50)</option>                             
                            <option value="carton(100)">carton(100)</option>                          
                        </select>
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
                        <button type='submit' className='btn btn-primary'>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalMedicament;