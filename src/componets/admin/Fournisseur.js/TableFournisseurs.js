import { Label } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AjouterFournisseurs, supprimerFournisseur } from '../../../redux/actions/FournisseurAction';

const TableFournisseurs = ({ fournisseurs }) => {
    const dispatch = useDispatch();
    const [nom, setNom] = useState('');
    const [code, setCode] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [hiddenBtnMdf, setHiddenBtnMdf]=useState(true);
    const [hiddenBtnAjou, setHiddenAjou]=useState(false);
    const [title ,setTitle]=useState("d'ajouter un")
    
    const founisseurAjouter = useSelector((state) => state.founisseurAjouter);
    const { error:errorAjouter } = founisseurAjouter;
    const handlerSubmit = (e) => {
        e.preventDefault();
        const donne = {
            nom: nom,
            codeFrs: code,
            adresse: adresse,
            telephone: telephone
        }
        dispatch(AjouterFournisseurs(donne));        

    }
    const handlerUptade=(res)=>{
        setTitle('de modification un');
        setNom(res.nom);
        setAdresse(res.adresse);
        setCode(res.codeFrs);
        setTelephone(res.telephone);
        setHiddenAjou(true);
        setHiddenBtnMdf(false);

    }
    const handlerDelete=(e,id)=>{
        e.preventDefault();
        if (window.confirm("Voulez vous supprimer")) {
            dispatch(supprimerFournisseur(id));
        }
    }

    return (
        <div className='tableFournisseur'>
            <div className='mainTable'>
            <label >Listes de {fournisseurs.length} fournisseurs</label>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Code</th>
                            <th>Adresse</th>
                            <th>Telephone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fournisseurs.map((res, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{res.nom}</td>
                                    <td>{res.codeFrs}</td>
                                    <td>{res.adresse}</td>
                                    <td>{res.telephone}</td>
                                    <td>
                                        <button className='btn btn-sm' onClick={()=>handlerUptade(res)}>
                                            <EditIcon className='incon' style={{ color: 'blue' }} />
                                        </button>
                                        <button className='btn btn-sm' onClick={(e)=>handlerDelete(e,res.id)}>
                                            <DeleteIcon style={{ color: 'red' }} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <nav className='d-flex justify-content-center'>
                    <ul className='pagination'>
                        <li className='page-link'>1</li>
                    </ul>
                </nav>
            </div>
            <div className='forms'>
                <label className='title'>Formulaire {title} fournisseur</label>
                <form className='form' onSubmit={handlerSubmit}>
                    <div className='input'>
                        <label >Nom:</label>
                        <input type="text" value={nom} placeholder='Nom fournisseur' onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label>Code:</label>
                        <input type="text" value={code} placeholder='Code fournisseur' onChange={(e) => setCode(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label>Adresse:</label>
                        <input type="text" value={adresse} placeholder='Adrese fournisseur' onChange={(e) => setAdresse(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label>Telephone:</label>
                        <input type="text" value={telephone} placeholder='Telephone fournisseur' onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                    <div className='input' hidden={hiddenBtnAjou}>
                        <button type='submit' className='btn btn-primary'>Ajouter</button>                        
                    </div>
                    <div className='input' hidden={hiddenBtnMdf}>
                        <button type='submit' className='btn btn-success'>Modifier</button>                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TableFournisseurs;