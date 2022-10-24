import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const Navbara = () => {
    const Nav = styled.div` 
    position:fixed ;    
    height: 50px;
    width: calc(100% - 160px);
    border-bottom:0.5px solid rgb(230, 227, 277);
    
    `
    return (
        <Nav>
            <div className='wrapper'>
                <div className='sercher'>
                    <input type="text" className='input' placeholder='recherche . . .' />
                    <SearchIcon className='inconSercher' />
                </div>
                <div className='items'>
                    <div className='item'>                        
                        <NotificationsNoneIcon className='Incon' />
                        <div className='alerte'>4</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineIcon className='Incon' /> 
                        <div className='alerte'>4</div>                                             
                    </div>

                </div>
            </div>
        </Nav>

    );
};

export default Navbara;