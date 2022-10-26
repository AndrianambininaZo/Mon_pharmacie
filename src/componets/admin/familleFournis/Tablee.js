
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';
import './table.scss'
import { useDispatch } from 'react-redux';
import { AjouterFamille, supprimerFamille } from '../../../redux/actions/FamilleAction';
import { useNavigate } from 'react-router-dom';

const Tablee = (props) => {
    const [familless, setFamillesFiltrr] = useState([]);
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [hiddenAjouter, sethiddenAjouter] = useState(false)
    const [hiddenModifier, sethiddenModifier] = useState(true)
    const [text, setText] = useState("d'ajouter un");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deletehandler = (id) => {
        if (window.confirm("Voulez vous supprimer")) {
            dispatch(supprimerFamille(id));

        }
    }
    const updatehandler = (e, id, nom) => {
        e.preventDefault();
        setText('de modifier un');
        setId(id);
        setInputValue(nom);
        sethiddenAjouter(true);
        sethiddenModifier(false);
    }
    const handlerEditer = (e) => {
        e.preventDefault();
        if(inputValue.length > 4){
            return
        }else{
            alert(inputValue);
        }
        
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        const done = {
            nom: inputValue
        }
        dispatch(AjouterFamille(done));
        if (props.error) {
            return;
            
        }else{
            
        setInputValue('');
        }
        
    }
    const columns = [
        {
            name: "#",
            selector: (row) => row.id,

        },
        {

            name: "Famille",
            selector: (row) => row.nom,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn btn-sm' onClick={(e) => updatehandler(e, row.id, row.nom)}>
                        <EditIcon className='incon' style={{ color: 'blue' }} />
                    </button>
                    <button className='btn btn-sm' onClick={() => deletehandler(row.id)}>
                        <DeleteIcon style={{ color: 'red' }} />
                    </button>

                </>
        }
    ]

    useEffect(() => {
        setFamillesFiltrr(props.familles)
    }, []);

    useEffect(async () => {
        const resultat = props.familles.filter((res) => {
            return res.nom.toLowerCase().match(search.toLowerCase());
        });
        setFamillesFiltrr(resultat);

    }, [search]);


    return (
        <div className='familleTable'>
            <div className='tablee'>
                <label className='title'>Liste de tous familles</label>
                <DataTable
                    columns={columns}
                    data={familless}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='350px'
                    selectableRows
                    selectableRowsHighlight
                    subHeader
                    subHeaderComponent={
                        <input type="text"
                            placeholder='Recherche famille'
                            className='form-control w-25'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }


                />
            </div>
            <div className='forme'>
                <form className='form' onSubmit={handlerSubmit} >
                    <input type="text" hidden value={id} onChange={(e) => setId(e.target.value)} />
                    <span>Formulaire {text} famille</span>
                    <div className='input'>
                        <label>Famille:</label>
                        <input type="text" value={inputValue} placeholder='Famille' className='input' onChange={(e) => setInputValue(e.target.value)} required />
                    </div>
                    <div className='button'>
                        <button className='btn btn-block btn-primary' hidden={hiddenAjouter}>Ajouter</button>
                    </div>
                </form>
                <div className='buttonEdier'>
                    <button className='btn btn-block btn-success' onClick={(e) => handlerEditer(e)} hidden={hiddenModifier}>Modifier</button>
                </div>
            </div>

        </div>

    );
};

export default Tablee;