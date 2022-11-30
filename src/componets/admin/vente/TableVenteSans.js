import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ModalVente from './ModalVente';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { filtrerStock } from '../../../redux/actions/StockAction';
import _ from "lodash";

const TableVenteSans = ({ ajouterPanier }) => {
    const [Show, setShow] = useState(false);
    const [donneMed, setDonneMed] = useState({});
    const [nou, setNou] = useState([]);
    const [recherche, setRecherche] = useState('');
    const stocksFilterList = useSelector((state) => state.stocksFilterList);
    const { stockFilter } = stocksFilterList;
    const dispatch = useDispatch();
    const AppeleModal = (res) => {
        setShow(true);
        setDonneMed(res);
    }
  const ventees=   _(stockFilter).slice(0).take(5).value();
  console.log(ventees);
    useEffect(async () => {
        dispatch(filtrerStock(recherche));

    }, [dispatch, recherche]);
    return (
        <div className='tableVante'>
            <div className='inputFilter'>
                <input type="text" placeholder='recherche medicament . . .' value={recherche} onChange={(e) => setRecherche(e.target.value)} />
                <SearchIcon className='inconSercher' />
            </div>
            <div className='table'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prix vente</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventees.map((res, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{res.nom}</td>
                                    <td>{res.prixVente}</td>
                                    <td>
                                        <button className='btn btn-sm' onClick={() => AppeleModal(res)}><AddShoppingCartIcon style={{ color: 'blue' }} /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {
                Show && <ModalVente openModal={setShow} medicament={donneMed} ajouterPanier={ajouterPanier} />
            }
        </div>
    );
};

export default TableVenteSans;