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
    useEffect(async () => {
        dispatch(listStock());

    }, [])
    return (
        <div className='notification'>
            <div className=' medicamentNotf'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicament</th>
                            <th>DatePeremption</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div className='stockNotf'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicament</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stockSeuil.map((res, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{res.nom}</td>
                                    <td>{res.qte}</td>
                                    <td>
                                        <button>Nouveau</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='messageNotf'>mess</div>
        </div>
    );
};

export default Notification;