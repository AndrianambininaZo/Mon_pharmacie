import React, { useState } from 'react';
import './famille.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listFamille } from '../../../redux/actions/FamilleAction';
import Tablee from './Tablee';

import FadeLoader from "react-spinners/FadeLoader"

const Famille = () => {
    const dispatch = useDispatch();
    const famillelist = useSelector((state) => state.famillelist)
    const { error, loading, familles } = famillelist
    const handeleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(async () => {
        dispatch(listFamille());
    }, [dispatch]);

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
                    : <div className='tablee'>
                    <label className='title'>Liste de tous familles</label>
                        <Tablee familles={familles} />
                    </div>
            }
            <div className='form'>
            
            </div>

        </div>
    );
};

export default Famille;