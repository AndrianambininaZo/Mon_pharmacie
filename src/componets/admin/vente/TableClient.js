import React from 'react';

const TableClient = () => {
    return (
        <div className='tableMain'>
            <div className='table'>
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <td>#</td>
                    <td>Nom</td>
                    <td>Telephone</td>
                    <td>Montant</td>
                    <td>Action</td>
                </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='form'>
            form
            </div>
        </div>
    );
};

export default TableClient;