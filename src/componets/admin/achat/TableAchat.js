import React from 'react';

const TableAchat = ({stocks,ajouterPanier}) => {    
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
                        <td>#</td>
                        <td>{res.nom}</td>
                        <td>{res.qte}</td>
                        <td>
                            <button className='btn btn-secondary' onClick={()=>ajouterPanier(res)}>Ajouter Panier</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    );
};

export default TableAchat;