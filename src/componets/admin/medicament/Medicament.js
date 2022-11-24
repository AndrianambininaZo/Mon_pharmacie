import React, { useEffect, useState, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './medicement.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ModalMedicament from './ModalMedicament';
import { useDispatch } from 'react-redux';
import { listFamille } from '../../../redux/actions/FamilleAction';
import { useSelector } from 'react-redux';
import TableMedicament from './TableMedicament';
import { listMedicament } from '../../../redux/actions/MedicamentsAction';
import FadeLoader from "react-spinners/FadeLoader"
import { useDownloadExcel } from 'react-export-table-to-excel';
import TableTous from './TableTous';
const Medicament = () => {
    const [recherche, setRecherche] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const famillelist = useSelector((state) => state.famillelist);
    const medicamentlist = useSelector((state) => state.medicamentlist);
    const medicamentAjouter = useSelector((state) => state.medicamentAjouter)
    const medicamentSupprimer = useSelector((state) => state.medicamentSupprimer);
    const [page, setpage] = useState(8);
    const { success: successSupprimer } = medicamentSupprimer;
    const { familles } = famillelist;
    const { success } = medicamentAjouter;
    const { error, loading, medicaments } = medicamentlist;
    const tableRef = useRef(null);
    const [filename, setFilname]=useState('Medicament')
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: filename,
        sheet: 'Users'
    });
    
    const [open , setOpen]=useState(false);
    useEffect(async () => {
        dispatch(listMedicament(recherche));
        dispatch(listFamille());
    }, [dispatch, success, successSupprimer, recherche]);

    return (
        <div className='mainMedicament'>
            <div className='medicamentTop'>
                <div className='title'>
                    <span>Liste de tous medicament</span>
                </div>
                <div className='button'>
                    <input type="text" value={recherche} placeholder="Rechercherche . . ." onChange={(e) => setRecherche(e.target.value)} />
                    <div className='export'>
                        <button className='btn btn-sm btnCsv'  onClick={()=>setOpen(!open)}>Exporter Csv<KeyboardArrowDownIcon className='toglge-btn' /></button>
                        <div className='select'>
                        {
                            open ? <div className='span'>
                            <span onClick={onDownload}>Les fenetre  </span>
                            <span onClick={onDownload}>Tous médicament</span>
                            </div>: ""
                        }
                            
                        </div>
                    </div>
                    <button className='btn btn-sm btn-success' onClick={() => setShow(true)}><AddIcon />Nouveau</button>
                </div>
            </div>
            {
                loading ?
                    <div className='fadeLoader'>
                        <FadeLoader
                            className='Loader'
                            loading={loading}
                            size={150} />
                    </div> :
                    <TableMedicament medicaments={medicaments} tableRef={tableRef} pagess={page} />

            }
            {
                show && <ModalMedicament familles={familles} openModal={setShow} />
            }
            <TableTous medicaments={medicaments} tableRef={tableRef}/>

        </div>
    );
};

export default Medicament;