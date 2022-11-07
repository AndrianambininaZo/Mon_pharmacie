import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { listStock } from '../../../redux/actions/StockAction';
import TableStock from './TableStock';
import './stock.scss';
const Stock = () => {
    const dispatch=useDispatch();
    const stockList=useSelector((state)=>state.stockList);
    const {stocks,loading}=stockList;
    useEffect(async ()=>{
        dispatch(listStock());
    },[])
    return (
        <div className='stock'>
        <TableStock stocks={stocks}/>
        </div>
    );
};

export default Stock;