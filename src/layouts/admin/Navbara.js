import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { listStock } from '../../redux/actions/StockAction';

const Navbara = () => {
    const Nav = styled.div` 
    position:fixed ;    
    height: 50px;
    width: calc(100% - 160px);
    background-color: #fff;
    border-bottom:0.5px solid rgb(230, 227, 277);   
    ` 
    const stockList =useSelector((state)=>state.stockList);
    const {stocks}=stockList;
    const dispatch=useDispatch();
    const stockRemption=stocks.filter((res)=>{
        return (res.qte < 50)
    }).length;
    
    const alert=stockRemption < 1 ? "": "alerte" ;
    const coutAlert=stockRemption < 1 ? "": stockRemption ;
    useEffect(()=>{
        dispatch(listStock());
    },[]);
  
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
                        <div className={alert}>{coutAlert}</div>
                    </div>
                    

                </div>
            </div>
        </Nav>

    );
};

export default Navbara;