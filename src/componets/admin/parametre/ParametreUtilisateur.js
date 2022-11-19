import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listEmployer } from '../../../redux/actions/EmployerAction';
import ModalaParametre from './ModalaParametre';
import FadeLoader from "react-spinners/FadeLoader"
import EditIcon from '@mui/icons-material/Edit';
const ParametreUtilisateur = () => {
    const emploerlist = useSelector((state) => state.emploerlist)
    const dispatch = useDispatch();
    const { employers, loading } = emploerlist;    
    const ajouteEployer=useSelector((state)=>state.ajouteEployer);
    const [show, setShow] = useState(false);
    const { success }=ajouteEployer;

    useEffect(async () => {
        dispatch(listEmployer());

    }, [dispatch,success])
    return (
        <div className='utilisateur'>
            {
                loading ? <FadeLoader
                    className='Loader'
                    loading={loading}
                    size={150} /> :
                    <div>
                        <div className='topUtilisateur'>
                        <span>Liste d'utilisateur</span>
                            <button className='btn btn-sm btn-success' onClick={() => setShow(true)}>Nouveau</button>
                        </div>
                        <div className='table'>

                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th className=''>#</th>
                                        <th className=''>Nom</th>
                                        <th className=''>Role</th>
                                        <th className=''>Email</th>
                                        <th className=''>Password</th>
                                        <th className=''>Telephone</th>
                                        <th className=''>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    employers.map((res,index)=>
                                    <tr key={index}>                                        
                                        <td>{index+1}</td>
                                        <td>{res.name}</td>
                                        <td>{res.userName}</td>
                                        <td>{res.email}</td>
                                        <td>{res.password}</td> 
                                        <td>{res.numero}</td> 
                                        
                                        <td>
                                        <button className='btn' style={{color:"blue"}}><EditIcon/></button>
                                        </td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }

            {
                show && <ModalaParametre openModal={setShow} />
            }
        </div>
    );
};

export default ParametreUtilisateur;