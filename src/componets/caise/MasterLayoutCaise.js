import React from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayoutCaise = () => {
    return (
        <div className='masterLayoutCaise'>
            <Outlet/>            
        </div>
    );
};

export default MasterLayoutCaise;