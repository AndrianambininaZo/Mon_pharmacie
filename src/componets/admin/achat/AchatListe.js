import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listAchats } from '../../../redux/actions/AchatAction';
import FadeLoader from "react-spinners/FadeLoader"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AchatListe = () => {
    const dispatch = useDispatch();
    const [selectMois, setSelectMois] = useState('');
    const achatList = useSelector((state) => state.achatList);
    const { achats, loading } = achatList;
    const navigate = useNavigate();

    const mois = [
        { id: 1, nom: "Janvier" },
        { id: 2, nom: "Fevrier" },
        { id: 3, nom: "Mars" },
        { id: 4, nom: "Avril" },
        { id: 5, nom: "Mai" },
        { id: 6, nom: "Juin" },
        { id: 7, nom: "Juillet" },
        { id: 8, nom: "Aout" },
        { id: 9, nom: "Septabre" },
        { id: 10, nom: "Octobre" },
        { id: 11, nom: "Novembre" },
        { id: 12, nom: "Decambre" },

    ]
    const handlerDetail = (id) => {
        const data = {
            id: 1, idd: 4

        }
        return navigate('/admin/detailCommande/' + id);

    }
    useEffect(async () => {
        dispatch(listAchats())
    }, [dispatch])
    return (
        <div className='achaList'>
            {
                loading ? <FadeLoader
                    className='Loader'
                    style={{ marginLeft: '45%' }}
                    loading={loading}
                    size={150} /> :
                    <div className='listMain'>
                        <div className='topList'>
                            <select value={selectMois} onChange={(e) => setSelectMois(e.target.value)}>
                                <option value="">-----Mois-----</option>
                                {
                                    mois.map((res, index) =>
                                        <option value={res.id}>{res.nom}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='listContainer'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fornisseur</th>
                                        <th>Date</th>
                                        <th>Qte total</th>
                                        <th>Montant total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        achats.map((res, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{res.nom}</td>
                                                <td>{res.date}</td>
                                                <td>{res.quatite}</td>
                                                <td>{res.montantTotal}</td>
                                                <td>
                                                    <button className='btn btn-sm' style={{ color: "#00CC66" }} title='voir le detail' onClick={() => handlerDetail(res.id)}>
                                                        <VisibilityIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }


        </div>
    );
};

export default AchatListe;