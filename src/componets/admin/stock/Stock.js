import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { listStock } from '../../../redux/actions/StockAction';
import TableStock from './TableStock';
import './stock.scss';
const Stock = () => {
    const dispatch=useDispatch();
    const stockList=useSelector((state)=>state.stockList);
    const stockEditer=useSelector((state)=>state.stockEditer);
    const {stocks,loading}=stockList;
    const {success}=stockEditer;
    useEffect(async ()=>{
        dispatch(listStock());
    },[dispatch,success])
    return (
        <div className='stock'>
        <TableStock stocks={stocks}/>
        </div>
    );
};

export default Stock;