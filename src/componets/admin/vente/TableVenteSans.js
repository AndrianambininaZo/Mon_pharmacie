import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ModalVente from './ModalVente';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { filtrerStock } from '../../../redux/actions/StockAction';

const TableVenteSans = ({ajouterPanier}) => {
    const [Show, setShow]=useState(false) ; 
    const [donneMed , setDonneMed]=useState({}); 
    const [nou, setNou]=useState([]);
    const [recherche, setRecherche]=useState('');    
    const stocksFilterList=useSelector((state)=>state.stocksFilterList);
    const {stockFilter}=stocksFilterList;
    const dispatch=useDispatch();
    const AppeleModal=(res)=>{
        setShow(true);
        setDonneMed(res);
    }
    useEffect(async()=>{
        dispatch(filtrerStock(recherche));

    },[dispatch,recherche]);
    return (
        <div className='tableVante'>
        <div className='inputFilter'>
            <input type="text" placeholder='recherche medicament . . .' value={recherche} onChange={(e)=>setRecherche(e.target.value)}/>
            <SearchIcon className='inconSercher'  />
        </div>
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
                    stockFilter.map((res,index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{res.nom}</td>
                        <td>{res.prixVente}</td>
                        <td>
                        <button className='btn btn-sm' onClick={()=>AppeleModal(res)}><AddShoppingCartIcon style={{ color: 'blue' }}/></button>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            {
                Show && <ModalVente  openModal={setShow} medicament={donneMed}  ajouterPanier={ajouterPanier}  />
        }
        </div>
    );
};

export default TableVenteSans;