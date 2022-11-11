import React from 'react';
import { useState } from 'react';
import ModalAchat from './ModalAchat';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const TableAchat = ({stocks,ajouterPanier}) => { 
    const [Show, setShow]=useState(false) ; 
    const [donneMed , setDonneMed]=useState({}); 
    const [nou, setNou]=useState([]);
    const AppeleModal=(res)=>{
        setShow(true);
        setDonneMed(res);
    }        
    return (
        <div className='tableAchat'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Qte</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((res,index)=>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{res.nom}</td>
                        <td>{res.qte}</td>
                        <td>
                            <button className='btn btn-secondary' onClick={()=>AppeleModal(res)}><AddShoppingCartIcon/></button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        {
                Show && <ModalAchat  openModal={setShow} medicament={donneMed} ajouterPanier={ajouterPanier} />
        }
    </div>
    );
};

export default TableAchat;