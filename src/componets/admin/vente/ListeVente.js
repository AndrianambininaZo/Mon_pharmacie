import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listVentes } from '../../../redux/actions/VenteAction';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const ListeVente = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const venteList = useSelector(state => state.venteList);
    const { ventes } = venteList;
    const coutVente=ventes.length;
    console.log(coutVente);
    const handlerDetail=(id)=>{
        return navigate('/admin/detailVente/'+id);

    }

    useEffect(async () => {
        dispatch(listVentes());

    }, [])
    return (
        <div className='listeVente'>
            <div className=''>
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