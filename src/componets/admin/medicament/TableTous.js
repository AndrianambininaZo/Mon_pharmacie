import React from 'react';

const TableTous = ({medicaments, tableRef}) => {
    return (
        <div hidden>
         <table className='table table-bordered' ref={tableRef}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Famille</th>
                        <th>Prix d'achat</th>
                        <th>Prix de vente</th>
                        <th>Date_Production</th>
                        <th>Date_Peremption</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        medicaments.map((m, index) =>
                            <tr key={index}>
                                <td >{index + 1}</td>
                                <td>{m.nom}</td>
                                <td>{m.nomFamille}</td>
                                <td style={{ textAlign: 'right' }}>{m.prixAchat} Ariary</td>
                                <td style={{ textAlign: 'right' }}>{m.prixVente} Ariary</td>
                                <td>{m.dateProduction}</td>
                                <td>{m.datePeremption}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>            
        </div>
    );
};

export default TableTous;