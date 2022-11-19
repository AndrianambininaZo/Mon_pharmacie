import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AjouterEmployer } from '../../../redux/actions/EmployerAction';

const ModalaParametre = ({openModal}) => {
    const handleClose = () => openModal(false);
    const[ nom, setNom]=useState('');
    const[email, setEmail]=useState('');
    const [pswd, setPswd]=useState('');
    const [telephone ,setTelephone]=useState('')
    const [userName, setUserName]=useState('');
    const dispatch=useDispatch();
    const handlerSubmit=(e)=>{
        e.preventDefault();
        const data={
            userName:userName ,
            name: nom,
            email:email,
            password:pswd ,
            numero:telephone,
        }
        console.log(data)
        dispatch(AjouterEmployer(data))
        handleClose();


    }
    return (
        <div className='mainModal'>
        <div className='top'>
            <label className='title'>Formulaire d'ajouter un utilisateur</label>
            <label className='labelferme' onClick={handleClose}>X</label>
        </div>
        <div className='center'>
            <form className='forms' onSubmit={handlerSubmit}>                
                <div className='form'>
                    <label>Nom:</label>
                    <input type="text" required value={nom} placeholder='Nom utilisateur' onChange={(e)=>setNom(e.target.value)} />
                </div>
                <div className='form'>
                    <label>Email:</label>
                    <input type="email" required value={email} placeholder='Email utilisateur' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='form'>
                    <label>Telephone</label>
                    <input type="text" required value={telephone} placeholder='Email utilisateur' onChange={(e)=>setTelephone(e.target.value)} />
                </div>
                <div className='form'>
                    <label>Password:</label>
                    <input type="text" required value={pswd} placeholder='Password utilisateur' onChange={(e)=>setPswd(e.target.value)} />
                </div>
                <div className='form'>
                    <label>Role:</label>
                    <select required value={userName} onChange={(e)=>setUserName(e.target.value)}>
                    <option value="">----------------Role-----------------</option>
                        <option value="admin">Admin</option>
                        <option value="caise">Caise</option>
                        <option value="client">Client</option>
                    </select>
                </div>
                <div className='form'>
                    <button type='submit' className='btn btn-primary'>Ajouter</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default ModalaParametre;