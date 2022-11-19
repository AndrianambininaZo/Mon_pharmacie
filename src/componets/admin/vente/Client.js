import React from 'react';
import './client.scss';
import { useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader"


const Client = () => {
   const loading=false;
   
    return (
        <div className='client'>
            <FadeLoader
                className='Loader'
                loading={loading}
                size={150} />
        </div>
    );
};

export default Client;