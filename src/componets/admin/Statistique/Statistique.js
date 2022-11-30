import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listStatMois } from '../../../redux/actions/StatistiqueAction';
import './statistique.scss'

const Statistique = () => {
    const [anneesMois, setAnneesMois] = useState('');
    const statMoisList=useSelector((state=>state.statMoisList));
    const dispatch=useDispatch();
    const {mois}=statMoisList;
    useEffect(async ()=>{
        dispatch(listStatMois("2022"));
    },[dispatch])
    return (
        <div className='statistique'>
            <div className='statMois'>
                <div className='moisTable'>
                    <div className='selectAnnees'>
                        <select name="" id="" value={anneesMois} onChange={setAnneesMois}>
                            <option value="">-----Annees----</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <table className='table table-bordered'>
                        <thead>
                           {
                            mois.map((res,index)=>
                            <tr key={index}>
                            <th>{res.mois}</th>
                            </tr>
                            )
                            }
                        </thead>
                        <tbody>
                        <tr>
                        <tbody>
                            {
                                mois.map((res,index)=>
                                <tr key={index}>
                                    <td>{res.montantTotal}</td>
                                </tr>
                                )
                            }
                        </tbody>                            
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className='moisDiagramme'>
                </div>
            </div>
            <div className='stat diagramme'>

            </div>
        </div>
    );
};

export default Statistique;