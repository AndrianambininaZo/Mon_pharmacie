import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listCommandes } from '../../../redux/actions/CommandeAction';
import './detailCommande.scss';
import { Link } from 'react-router-dom';

const DetailCommande = () => {
    const commandeList = useSelector((state) => state.commandeList);
    const dispatch = useDispatch();
    const { commandes } = commandeList;
    const { id } = useParams();
    const detailAchat = commandes.filter((res) => {
        return res.achatId == id;
    });
    const navigate = useNavigate();
    const redirectAchat = () => {
        return navigate('/admin/achat')

    }
    useEffect(async () => {
        dispatch(listCommandes());

    }, [dispatch]);


    return (
        <div className='detailAchat'>
            <div className='detailTop'>
                <span className='spanLink' onClick={() => redirectAchat()}>Liste achat</span>
                <span className='achatNo'>Achat No:</span>
                <span className='span'>{id}</span>
            </div>
            <div className='detailCoitainer'>
                <ul>
                    {
                        detailAchat.map((res, index) =>
                            <li>
                                <p className='pMedic'><span>Nom:</span>{res.nomMedicament}</p>
                                <p className='pQte'><span>Qte:</span>{res.qteMed}</p>
                                <p className='pPrix'><span>Prix_Unitaire:</span>{res.prixUnitaire}</p>
                                <div className='button'>
                                    <button>Mod</button>
                                    <button>Sup</button>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
};

export default DetailCommande;