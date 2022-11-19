import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FadeLoader from "react-spinners/FadeLoader"
import { AjouterVente } from '../../../redux/actions/VenteAction';
import { AjouterVentMedicament } from '../../../redux/actions/VenteMedicamentAction';
import Paniervente from './Paniervente';
import TableVenteSans from './TableVenteSans';
import './venteSans.scss';
const getVenteS = () => {
    let ventes = localStorage.getItem('ventes');
    if (ventes) {
        return (ventes = JSON.parse(localStorage.getItem("ventes")));
    }
    else {
        return [];
    }
}

const VenteSans = () => {
    const [ventes, setVentes] = useState(getVenteS);
    const montaTotal=ventes.reduce((prev,curr)=>parseInt(prev)  + parseInt(curr.prixVente),0 );
    const totalRemise=0;
    const netPayer=montaTotal + totalRemise;
    const [montaVerse, setMontantVerse]=useState('');
    const motantRendue=montaVerse? montaVerse - montaTotal: 0;
    const [modePayement, setModePayement]=useState('')
    const dispatch=useDispatch();

    //valider le vente de client
    const valideVente=(montantTotale,qteTotal)=>{
        const today = new Date();
        const dd = String(today. getDate()). padStart(2, '0');// afara ----padEnd(), 
        const mois = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
        const yyyy = today. getFullYear();
        const h=String(today.getHours()).padStart(2,'0');
        const m=String(today.getMinutes()).padStart(2,'0');
        const s=String(today.getSeconds()).padStart(2,'0');
        const time = h + ":" + m + ":" + s;
        const DateEntre =yyyy +'-' + mois +'-'+ dd;
        alert(today);
        const data={
            date:DateEntre ,
            heure:time ,
            quatite: qteTotal,
            montantTotal: montantTotale,
            modePayement:modePayement ,
            mois: mois,
            annees: String(yyyy)
        }
        if (motantRendue < 0 || modePayement== "") {
            return;
        }else{
            
          dispatch(AjouterVente(1,data));
           ventes.map(res=>{
           dispatch(AjouterVentMedicament(res.qtVente,res.id,res.prixVente))
           })
           alert("mety")
            setVentes([]);
        }

    }

    //Ajouter medicament au panier
    const ajouterPanier=(vente)=>{
        setVentes([...ventes,vente])
    }
    console.log(ventes);

    useEffect(async () => {
        localStorage.setItem("ventes", JSON.stringify(ventes));
    }, [ventes]);
    return (
        <div className='venteSans'>
            <div className='topS'>
                <span>Gestions des ventes</span>
                <div className='numVente'>
                    <span>No:</span>
                    <input type="text" readOnly />
                </div>
            </div>
            <div className="informationVente">
                <div className='information'>
                    <div className='form'>
                        <label htmlFor="">Montant Total:</label>
                        <input  readOnly placeholder='montant total' value={montaTotal} />
                    </div>
                    <div className='form'>
                        <label htmlFor="">Total Remise:</label>
                        <input type="text" readOnly value={totalRemise} />
                    </div>
                    <div className='form'>
                        <label htmlFor="">Net à Payer:</label>
                        <input type="text" readOnly value={netPayer}/>
                    </div>
                </div>
                <div className='information1'>
                    <div className='form'>
                        <label htmlFor="">Montant Versé:</label>
                        <input type="number" placeholder='montant versé'  value={montaVerse} onChange={(e)=>setMontantVerse(e.target.value)}/>
                    </div>
                    <div className='form'>
                        <label htmlFor="">Montant Rendue:</label>
                        <input type="text" readOnly value={motantRendue}/>
                    </div>
                    <div className='form'>
                        <label htmlFor="">Mode de paiement:</label>
                        <select name="" id="" value={modePayement} onChange={(e)=>setModePayement(e.target.value)}>
                            <option value="">---------------Type----------------</option>
                            <option value="espece">Espece</option>
                            <option value="cheque">Cheque</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='containirVente'>
                <TableVenteSans ajouterPanier={ajouterPanier} />
                <Paniervente ventes={ventes} valideVente={valideVente}/>
            </div>
        </div>
    );
};

export default VenteSans;