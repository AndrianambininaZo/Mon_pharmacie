import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listStock } from '../../../redux/actions/StockAction';
import './notification.scss'

const Notification = () => {
    const dispatch = useDispatch('');
    const stockList = useSelector(state => state.stockList)
    const { stocks } = stockList;
    const stockSeuil = stocks.filter(res => {
        return res.qte < 50;
    })
    console.log(stockSeuil);
    useEffect(async () => {
        dispatch(listStock());

    }, [])
    return (
        <div className='notification'>
            <div className=' medicamentNotf'>
            <span>Medicament peremption</span>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicament</th>
                            <th>DatePeremption</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div className='stockNotf'>
            <span>Stock insuffisante</span>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicament</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stockSeuil.map((res, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{res.nom}</td>
                                    <td>{res.qte}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notification;