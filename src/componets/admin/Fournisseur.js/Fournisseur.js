import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listFournisseurs } from '../../../redux/actions/FournisseurAction';
import './fournisseur.scss';
import './TableFournisseurs';
import TableFournisseurs from './TableFournisseurs';
import FadeLoader from "react-spinners/FadeLoader";

const Fournisseur = () => {
    const dispatch = useDispatch();
    const founisseurList = useSelector((state) => state.founisseurList);
    const founisseurSupprimer = useSelector((state) => state.founisseurSupprimer);
    const founisseurAjouter = useSelector((state) => state.founisseurAjouter);
    const { loading, error, fournisseurs } = founisseurList;
    const {  error:errorSupprimer, success:successSupprimer } = founisseurSupprimer;
    const { success:successAjouter } = founisseurAjouter;
    useEffect(() => {
        dispatch(listFournisseurs())
    }, [dispatch,successSupprimer,successAjouter])
    return (
        <div className='fournisseurs'>
        {
            loading ? 
            <div className='loader'>
            <FadeLoader
                className='loaderIcon'
              loading={loading}
              size={150} />
            </div>:
                <TableFournisseurs fournisseurs={fournisseurs}/>

        }
            
        </div>
    );
};

export default Fournisseur;