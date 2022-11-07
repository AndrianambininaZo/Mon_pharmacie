import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const TableStock = ({ stocks }) => {
    const [id , setId]=useState('');
    const [idMed , setIdMed]=useState('');
    const [medicament , setMedicament]=useState('');
    const [qte , setQte]=useState('');
    const [qteAjouter , setQteAjouter]=useState('');
    const qteFinal= parseInt(qte) + parseInt(qteAjouter);
    const handlerModifier=(id, idMed, medicament, qte)=>{
        setId(id);
        setIdMed(idMed);
        setMedicament(medicament);
        setQte(qte);

    }
    console.log(stocks);
    return (
        <div className='maintock'>
            <div className='tableStock'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicament</th>
                            <th>Stock</th>
                            <th>Alert</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks.map((s, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{s.nom}</td>
                                    <td>{s.qte}</td>
                                    <td>{s.qte < 6 ?
                                        <span style={{ color: 'red' }}> Insiffisante</span>
                                        : s.qte < 50 ? <span style={{ color: '#911' }}> Passable</span>
                                            : <span style={{ color: 'rgb(27, 187, 27)' }}> Normale</span>}
                                    </td>
                                    <td>
                                    <button className='btn btn-sm btn-primary' onClick={()=>handlerModifier(s.id,s.idMedicament, s.nom, s.qte)}>
                                            <EditIcon className='incon'  />Modifietr
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='modifierStock'>
                <form className='form'>
                <input type="text" hidden value={id} onChange={(e)=> setId(e.target.value)} />                
                <input type="text" hidden value={idMed} onChange={(e)=> setIdMed(e.target.value)} />                
                    <div className='input'>
                        <label htmlFor="">Medicament:</label>
                        <input type="text" readOnly value={medicament} onChange={(e)=> setMedicament(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Quatité actuel:</label>
                        <input type="number"  value={qte} readOnly onChange={(e)=> setQte(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Quatité ajouter:</label>
                        <input type="number" value={qteAjouter}  onChange={(e)=> setQteAjouter(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Quatité:</label>
                        <input type="number" value={qteFinal} readOnly  onChange={(e)=> setQteAjouter(e.target.value)}/>
                    </div>
                    <div className='button'>
                       <button className='btn btn-success' >Valider</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TableStock;