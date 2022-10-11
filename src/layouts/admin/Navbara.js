import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import './navbar.scss'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Navbara = () => {
    const Nav = styled.div` 
    position:fixed ;
    
    height: 50px;
    width: calc(100% - 200px);
    border-bottom:0.5px solid rgb(230, 227, 277); ;
    `
    return (
        <Nav>
            <div className='wrapper'>
                <div className='sercher'>
                    <input type="text" className='input' placeholder='recherche' />
                    <SearchIcon className='inconSercher'/>
                </div>
                <div className='items'>
                <div className='item'>
                    <span className='notf'>4</span>
                    <NotificationsActiveIcon className='itemIncon'/>
                </div>
                <div className='item'>
                    <span className='notf'>4</span>
                    <NotificationsActiveIcon className='itemIncon'/>
                </div>

                </div>
            </div>
        </Nav>

    );
};

export default Navbara;