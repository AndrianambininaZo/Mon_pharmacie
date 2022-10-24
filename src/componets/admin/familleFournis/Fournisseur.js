import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFournisseur } from '../../../redux/actions/FournisseurAction';

const Fournisseur = () => {
    const dispatch=useDispatch();
    const fournisseurList=useSelector((state)=>state.fournisseurlist);
    const{error, loading,fournisseurs}=fournisseurList;
    console.log(fournisseurs);
    useEffect(async()=>{
        dispatch(listFournisseur());

    },[])
    return (
        <div>
            Fournisseur
        </div>
    );
};

export default Fournisseur;