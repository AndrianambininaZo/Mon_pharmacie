import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import './dropNav.scss'
import { useState } from 'react';

const DropNav = ({ item }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={open ? 'dropNav open' : 'dropNav'}>
            
            <div className='titlee'>
                <div className='item'>
                    <span>
                    <item.Incon className='incon_1'/>
                    </span>
                    <span>{item.title}</span>
                </div>
                <KeyboardArrowUpIcon className='toglge-btn' onClick={() => setOpen(!open)} />
            </div>
            <div className='sidebar-content'>
            {
                item.children.map((child,index)=>
                <Link key={index} to={child.path}><child.Incon className='inconLink'/>{child.title}</Link>              
                )
            
             }

            </div>
        </div>
    );


};

export default DropNav;