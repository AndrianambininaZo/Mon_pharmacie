import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFournisseurs } from '../../../redux/actions/FournisseurAction';
import { listStock } from '../../../redux/actions/StockAction';
import './achat.scss';
import PanierAchat from './PanierAchat';
import TableAchat from './TableAchat';

const Achat = () => {
    const [telephone, setTelephone]=useState('');
    const [nomfrs, setNomfrs]=useState('');
    const [codeFrs, setCodeFrs]=useState('');
    const [carteItems, setCartItems]=useState([]);
    const dispatch=useDispatch();
    const founisseurList = useSelector((state) => state.founisseurList);
    const stockList=useSelector((state)=>state.stockList);
    const { error, fournisseurs } = founisseurList;
    
    const {stocks,loading}=stockList;
    const AchatStock=stocks.filter((res)=>{
        return res.qte < 4;
    });
    const handleChange=(res)=>{
        if (res == '') {
            
            setTelephone('');
            setTelephone('');
            setNomfrs('');
            setCodeFrs('');
        }else{
            const frs=fournisseurs.find(x=> x.id==res)        
            setTelephone(frs.telephone);
            setNomfrs(frs.adresse)
            setCodeFrs(frs.codeFrs)
            console.log(frs);
        }     
        
    }
    const ajouterPanier=(medicament)=>{
        const medExist=carteItems.find((x)=>x.id===medicament.id);
        if(medExist){
            const newCartItems=carteItems.map((x)=>
            x.id===medicament.id ? {...medExist, qte:medExist.qte + 1}: x
            );
            setCartItems(newCartItems);
        }else{
            const newCartItems=[...carteItems,{...medicament, qte:1}]
            setCartItems(newCartItems);
        }
        console.log(carteItems);

    }  
    
    useEffect(async ()=>{
        dispatch(listStock());
        dispatch(listFournisseurs());
    },[])
    return (
        <div className='achat'>
            <div className='topAchat'>
                <label htmlFor="">Bon de commande</label>
                <div className='inputNo'>
                    <label htmlFor="">No:</label>
                    <input type="text" readOnly />
                </div>
            </div>
            <div className='fournisseur'>
                <div className='formFourniseur'>
                    <label htmlFor="">Nom:</label>
                    <select name="" id="" onChange={(e)=>handleChange(e.target.value)}>
                        <option value="">-----Fourniseurs-----</option>
                        {
                            fournisseurs.map((res,index)=>
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
               <TableAchat ajouterPanier={ajouterPanier} stocks={AchatStock} />
               <PanierAchat/>
            </div>
        </div>
    );
};

export default Achat;