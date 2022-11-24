import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { supprimerMedicament } from '../../../redux/actions/MedicamentsAction';
import _ from "lodash";
import ModalMedicament from './ModalMedicament';
import { listFamille } from '../../../redux/actions/FamilleAction';
import ModalEditer from './ModalEditer';
const TableMedicament = ({ medicaments, tableRef}) => {
    const dispatch = useDispatch();
    const famillelist = useSelector((state) => state.famillelist);
    const { familles } = famillelist;
    const [show, setShow] = useState(false);
    const [pageSize, setPage] = useState(1);
    const [currentpage, setcurrentpage] = useState(1);
    const [medicamentPage, setMedicamentPage] = useState([]);
    const [dataEditer, setDataEditer] = useState("");
    const coutMedicament=medicaments.length;
    useEffect(() => {
        if (medicaments.length === pageSize) {
            setMedicamentPage(medicaments);
        } else {
            dispatch(listFamille());
            const pages = _(medicaments).slice(0).take(pageSize).value();
            setMedicamentPage(pages)
        }

    }, [dispatch]);
    const pageCout = medicaments ? Math.ceil(medicaments.length / pageSize) : 0;
    //if(pageCout===1)return null;
    const page = _.range(1, pageCout + 1)
    const pagination = (pageNo) => {
        setcurrentpage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedMedicament = _(medicaments).slice(startIndex).take(pageSize).value();
        setMedicamentPage(paginatedMedicament);
    }

    const handlerDelete = (id) => {
        dispatch(supprimerMedicament(id));
    }

    const handlerEditer = (id, nom, idFamille, prixAchat, prixVente, dateProduction, datePeremption) => {
        const data =
        {
            id: id,
            nom: nom,
            idFamille: idFamille,
            prixAchat: prixAchat,
            prixVente: prixVente,
            dateProduction: dateProduction,
            datePeremption: datePeremption
        }
        setShow(true);
        setDataEditer(data);
    }

    return (
        <div className='maiTtable'>            
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medicamentPage.map((m, index) =>
                            <tr key={index}>
                                <td >{index + 1}</td>
                                <td>{m.nom}</td>
                                <td>{m.nomFamille}</td>
                                <td style={{ textAlign: 'right' }}>{m.prixAchat} Ariary</td>
                                <td style={{ textAlign: 'right' }}>{m.prixVente} Ariary</td>
                                <td>{m.dateProduction}</td>
                                <td>{m.datePeremption}</td>
                                <td>
                                    <button className='btn btn-sm'>
                                        <EditIcon className='incon' style={{ color: 'blue' }}
                                            onClick={() => handlerEditer(m.id, m.nom, m.idFamille, m.prixAchat, m.prixVente, m.dateProduction, m.datePeremption)} />
                                    </button>
                                    <button className='btn btn-sm' onClick={() => handlerDelete(m.id)} >
                                        <DeleteIcon style={{ color: 'red' }} />
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <nav className='d-flex justify-content-center'>
                    <ul className='pagination'>
                        {
                            page.map((page, index) =>
                                <li className={
                                    page === currentpage ? "page-item active" : "page-item"
                                } key={index}><p className='page-link' onClick={() => pagination(page)}>{page}</p></li>
                            )
                        }


                    </ul>
                </nav>
            </div>

            {
                show && <ModalEditer familles={familles} openModal={setShow} Editer={dataEditer} />
            }
        </div>
    );
};

export default TableMedicament;