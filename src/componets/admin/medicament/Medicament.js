import React, { useEffect, useState, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './medicement.scss';
import ModalMedicament from './ModalMedicament';
import { useDispatch } from 'react-redux';
import { listFamille } from '../../../redux/actions/FamilleAction';
import { useSelector } from 'react-redux';
import TableMedicament from './TableMedicament';
import { listMedicament } from '../../../redux/actions/MedicamentsAction';
import FadeLoader from "react-spinners/FadeLoader"
import { useDownloadExcel } from 'react-export-table-to-excel';
const Medicament = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const famillelist = useSelector((state) => state.famillelist);
    const medicamentlist = useSelector((state) => state.medicamentlist);
    const medicamentAjouter = useSelector((state) => state.medicamentAjouter)
    const medicamentSupprimer = useSelector((state) => state.medicamentSupprimer);
    const { success: successSupprimer } = medicamentSupprimer;
    const { familles } = famillelist;
    const { success } = medicamentAjouter;
    const { error, loading, medicaments } = medicamentlist;
    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Medicament',
        sheet: 'Users'
    });
    useEffect(async () => {
        dispatch(listMedicament());
        dispatch(listFamille());
    }, [dispatch, success, successSupprimer]);

    return (
        <div className='mainMedicamentt'>
            {
                loading ?
                    <div className='fadeLoader'>
                        <FadeLoader
                            className='Loader'
                            loading={loading}
                            size={150} />
                    </div> :
                    <div className='medicament'>
                        <div className='top'>
                            <span>Liste de tous medicament</span>
                            <div className='button'>
                                <input type="text" placeholder='recherche medicament' />
                                <button className='btn btn-sm btnCsv' onClick={onDownload}>Exporter Csv</button>
                                <button className='btn btn-sm btn-success' onClick={() => setShow(true)}><AddIcon />Nouveau</button>
                            </div>
                        </div>
                        <TableMedicament medicaments={medicaments} tableRef={tableRef} />
                    </div>
            }
            {
                show && <ModalMedicament familles={familles} openModal={setShow} />
            }

        </div>
    );
};

export default Medicament;