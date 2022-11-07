import React from 'react';
import TableClient from './TableClient';
import './client.scss';
import { useState } from 'react';

const Client = () => {
    const [datee, setDatee]=useState('');
    const handlerSubmit=(e)=>{
        e.preventDefault();
        var today = new Date();
        var dd = String(today. getDate()). padStart(2, '0');
        var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
        var yyyy = today. getFullYear();
        var Datetoday =yyyy +'-' + mm +'-'+ dd;
        alert(Datetoday);
        

    }
    return (
        <div className='client'>
        <form action="" onSubmit={handlerSubmit}>
            <input type="date" value={datee} onChange={(e)=>setDatee(e.target.value)} placeholder='date' />
            <button>Text</button>
        </form>
        <TableClient/>            
        </div>
    );
};

export default Client;