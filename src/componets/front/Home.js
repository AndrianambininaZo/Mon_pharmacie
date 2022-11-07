import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './home.scss'
import { useNavigate } from "react-router-dom";




const Home = () => {
    let navigate = useNavigate();
    const [LoggedIn, setLoggedIn]=useState(false);
    const [registerInput, setRegister] = useState({
        nom: "",
        email: "",
        mobile: "",
        password: ""
    })
    /*const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }*/
    const hadleLogin = (e) => {
        e.preventDefault();
        setLoggedIn(true);
       

    }
    useEffect(() => {
        if (LoggedIn){
           return navigate("/admin");
        }
     },[LoggedIn]);
    return (
        <div className='home'>
            <div className='contenue'>
                <div className='authe'>
                    <label className='title'>Athentification</label>
                    <form onSubmit={hadleLogin} className=''>
                        <select name="" id="" required>
                            <option value="admin">Admin</option>
                            <option value="admin">Caise</option>
                        </select>
                        <div className='input'>
                            <label>Email</label>                            
                            <input type="email"  placeholder='Email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                        </div>
                        <div className='input'>
                            <label>Mot de passe</label>
                            <input type="password" required placeholder='Mot de passe' />
                        </div>
                        <button className='loginBtn btn-primary'>Connexion</button>
                    </form>
                </div>
                <div className='img'>
                </div>
            </div>
        </div>
    );
};

export default Home;