import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Home = () => {
    const [registerInput , setRegister]=useState({
        nom:"",
        email:"",
        mobile:"",
        password:""
    })
    const handleInput=(e)=>{
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value})
    }
    const register =(e)=>{
        e.preventDefault();
        alert("salut");

    }
    return (
        <div>
            <div className='container py-1'>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={register}>
                                    <div className='form-group mb-1'>
                                        <label htmlFor="">Nom</label>
                                        <input type="text" name="nom" onChange={handleInput} value={registerInput.nom}  className='form-control'/>
                                    </div>
                                    <div className='form-group mb-1'>
                                        <label htmlFor="">Email ID</label>
                                        <input type="email" name="email" onChange={handleInput}  value={registerInput.email} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-1'>
                                        <label htmlFor="">Telephone</label>
                                        <input type="text" name="mobile" onChange={handleInput}  value={registerInput.mobile} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-1'>
                                        <label htmlFor="">Password</label>
                                        <input type="Password" name="password" onChange={handleInput} value={registerInput.password}  className='form-control'/>
                                    </div>
                                    <div className='form-group mb-1'>
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="Password" name="confirm_password" onChange={handleInput}  value={registerInput.confirm} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-1'>
                                        <button type='submit' className='btn btn-primary btn-block'>Enregistrer</button>
                                    </div>
                                </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer d-flex mb-0 justify-content-center'>
                footer                               
            </div>
        </div>
    );
};

export default Home;