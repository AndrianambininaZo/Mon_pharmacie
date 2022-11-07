import React, { useState } from 'react';
import './famille.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listFamille } from '../../../redux/actions/FamilleAction';
import Tablee from './Tablee';
import FadeLoader from "react-spinners/FadeLoader"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Famille = () => {
    const dispatch = useDispatch();
    const famillelist = useSelector((state) => state.famillelist);
    const familleSupprimer = useSelector((state) => state.familleSupprimer);
    const familleAjouter = useSelector((state) => state.familleAjouter);
    const familleModifier = useSelector((state) => state.familleModifier);
    const { error, loading, familles } = famillelist;
    const { error: errorDelete, success: successDelete } = familleSupprimer;
    const { error: errorCreate, success: successCreate, familles: famille } = familleAjouter;
    const { error: errorModifer, success: successMofier } = familleModifier;
    console.log(familles);
    useEffect(async () => {
        if (successCreate) {
            alert("salut creation");
            toast.success("Success Notification !");
        }
        dispatch(listFamille());
    }, [dispatch, successDelete, successCreate, famille, successMofier]);


    return (
        <div className='famille'>
            {
                loading ?
                    <div className='fadeLoader'>
                        <FadeLoader
                            className='Loader'
                            loading={loading}
                            size={150} />
                    </div>
                    : <div className=''>
                        <Tablee familles={familles} error={errorCreate} />
                    </div>
            }
        </div>
    );
};

export default Famille;