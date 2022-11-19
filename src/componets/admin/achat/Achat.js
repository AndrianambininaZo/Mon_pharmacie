import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AjouterAchat, listAchats } from '../../../redux/actions/AchatAction';
import { AjouterCommande } from '../../../redux/actions/CommandeAction';
import { listFournisseurs } from '../../../redux/actions/FournisseurAction';
import { listStock } from '../../../redux/actions/StockAction';
import './achat.scss';
import PanierAchat from './PanierAchat';
import TableAchat from './TableAchat';
const getCarts = () => {
    let carts = localStorage.getItem('carts');
    if (carts) {
        return (carts = JSON.parse(localStorage.getItem("carts")));
    }
    else {
        return [];
    }
}

const Achat = () => {
    const [telephone, setTelephone] = useState('');
    const [nomfrs, setNomfrs] = useState('');
    const [codeFrs, setCodeFrs] = useState('');
    const [carts, setCarts] = useState(getCarts());
    const [idFrs, setIdfrs]=useState('')
    const dispatch = useDispatch();
    const founisseurList = useSelector((state) => state.founisseurList);
    const stockList = useSelector((state) => state.stockList);
    const achatList = useSelector((state) => state.achatList);
    const { error, fournisseurs } = founisseurList;
    const { stocks} = stockList;
    const { achats,success:successAchat } = achatList;
    const coutAchat=achats.length;
    const AchatStock = stocks.filter((res) => {
        return res.qte < 50;
    });
    const navigate=useNavigate();
    const handleChange = (res) => {
        if (res == '') {
            setTelephone('');
            setTelephone('');
            setNomfrs('');
            setCodeFrs('');
        } else {
            const frs = fournisseurs.find(x => x.id == res)
            setTelephone(frs.telephone);
            setIdfrs(res);
            setNomfrs(frs.adresse)
            setCodeFrs(frs.codeFrs)
        }

    }
    const ajouterPanier = (achat) => {
        setCarts([...carts, achat])
    }
    const valideAchat=(montTotal,qte)=>{
            const today = new Date();
            const dd = String(today. getDate()). padStart(2, '0');
            const mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
            const yyyy = today. getFullYear();
            const DateEntre =yyyy +'-' + mm +'-'+ dd;  
        if (idFrs==='') {
            alert('salection fourniseurs');
            return
            
        }else{            
            const achat={
                date: DateEntre,
                quatite: parseInt(qte),
                montantTotal: montTotal,
                mois: mm,
                annees: String(yyyy)
        }        
            dispatch(AjouterAchat(idFrs,achat));
            if (successAchat) {
                alert("mety")
                
            }else alert('ok');

            carts.map((res)=>
            dispatch(AjouterCommande(res.qte,res.id,4,res.montant))
            );        
            setCarts([]);
            
            //navigate('/admin/achat');    
        }
    }
   

    useEffect(async () => {
            localStorage.setItem("carts", JSON.stringify(carts));
            dispatch(listFournisseurs());
            dispatch(listStock());
            dispatch(listAchats());
    }, [carts,dispatch]);
    return (
        <div className='achat'>
            <div className='topAchat'>
                <label htmlFor="">Bon de commande</label>
                <div className='inputNo'>
                    <label htmlFor="">No:</label>
                    <input type="text" readOnly value={coutAchat + 1} />
                </div>
            </div>
            <div className='fournisseur'>
                <div className='formFourniseur'>
                    <label htmlFor="">Nom:</label>
                    <select name="" id="" onChange={(e) => handleChange(e.target.value)}>
                        <option value="">-----Fourniseurs-----</option>
                        {
                            fournisseurs.map((res, index) =>
                                <option key={index} value={res.id}>{res.nom}</option>
                            )

                        }
                    </select>
                </div>
                <div className='formFourniseur'>
                    <label htmlFor="">CodeFrs:</label>
                    <input type="text" value={codeFrs} readOnly />
                </div>
                <div className='formFourniseur'>
                    <label htmlFor="">Telephone:</label>
                    <input type="text" value={telephone} readOnly />
                </div>
                <div className='formFourniseur'>
                    <label htmlFor="">Adresse:</label>
                    <input type="text" value={nomfrs} readOnly />
                </div>
            </div>
            <div className='information'>
               <PanierAchat carts={carts} valideAchat={valideAchat}/>
                <TableAchat ajouterPanier={ajouterPanier} stocks={AchatStock} />
            </div>
        </div>
    );
};

export default Achat;