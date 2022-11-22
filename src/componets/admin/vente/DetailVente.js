import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listDetailVente } from '../../../redux/actions/VenteMedicamentAction';
import './detailVente.scss';

const DetailVente = () => {
    const dispatch=useDispatch();
    const detailVenteList=useSelector((state)=>state.detailVenteList)
    
    const {detailVente}=detailVenteList
    const {id}=useParams();
    const details=detailVente.filter(res=>{
        return res.idVente== id;
    })
    useEffect(async()=> {
        dispatch(listDetailVente())
    },[dispatch])
    return (
        <div className='detailVente'>
        <div className='topDetail'>
            <span>Liste vente</span>
            <p>Detail de vente No:<span>{id}</span></p>
        </div>
        <ul>
            {
                details.map((res,index)=>
                <li key={index}>
                    <p>Nom:<span>{res.nom}</span></p>
                    <p>Quatite:<span>{res.qte}</span></p>
                    <p>Prix:<span>{res.prixVente}</span></p>
                </li>
                )
            }
        </ul>           
        </div>
    );
};

export default DetailVente;