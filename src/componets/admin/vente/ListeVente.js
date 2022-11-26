import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listVentes } from '../../../redux/actions/VenteAction';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import './listeVente.scss'

const ListeVente = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const venteList = useSelector(state => state.venteList);
    const { ventes } = venteList;
    const coutVente = ventes.length;
    const [selectMois, setSelectMois] = useState('');
    console.log(coutVente);
    const handlerDetail = (id) => {
        return navigate('/admin/detailVente/' + id);

    }
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


    useEffect(async () => {
        dispatch(listVentes());

    }, [])
    return (
        <div className='listeVente'>
            <div className='listVenteTop'>
                <span>Listes de vente</span>
                <div className='recherche'>
                    <select value={selectMois} onChange={(e) => setSelectMois(e.target.value)}>
                        <option value="">-----Mois-----</option>
                        {
                            mois.map((res, index) =>
                                <option value={res.id}>{res.nom}</option>
                            )
                        }
                    </select>
                    <select >
                        <option value="">-----Annees----</option>
                        <option value="">2022</option>
                    </select>
                </div>
            </div>
            <div className='tableVente'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Utilisateur</th>
                            <th>Qte</th>
                            <th>Montant</th>
                            <th>Mode_Payement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventes.map((res, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{res.date}</td>
                                    <td>{res.name}</td>
                                    <td>{res.quatite}</td>
                                    <td>{res.montantTotal}</td>
                                    <td>{res.modePayement}</td>
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
    );
};

export default ListeVente;