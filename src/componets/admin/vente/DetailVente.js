import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { listDetailVente } from '../../../redux/actions/VenteMedicamentAction';
import './detailVente.scss';

const DetailVente = () => {
    const dispatch = useDispatch();
    const detailVenteList = useSelector((state) => state.detailVenteList)

    const { detailVente } = detailVenteList
    const { id } = useParams();
    const navigate=useNavigate()
    const details = detailVente.filter(res => {
        return res.idVente == (id - 1);
    });

    const redirect = () => {
         return navigate('/admin/listesans');
    }
    useEffect(async () => {
        dispatch(listDetailVente())
    }, [dispatch])
    return (
        <div className='detailVente'>
            <div className='topDetail'>
                <span className="spanLien" onClick={() => redirect()}>Voir le liste</span>
                <p>Detail de vente No:<span>{id}</span></p>
            </div>            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Quatite</th>
                        <th>Prix vente</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        details.map((res, index) =>
                            <tr>
                                <td>{index}</td>
                                <td>{res.nom}</td>
                                <td>{res.qte}</td>
                                <td>{res.prixVente}</td>
                                
                            </tr>
                        )

                    }
                </tbody>
            </table>

        </div>
    );
};

export default DetailVente;