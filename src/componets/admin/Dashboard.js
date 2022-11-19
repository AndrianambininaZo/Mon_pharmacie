import React, { useEffect } from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MedicationIcon from '@mui/icons-material/Medication';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Featured from './chart/Featured';
import Chart from './chart/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { listMedicament } from '../../redux/actions/MedicamentsAction';
import { listStock } from '../../redux/actions/StockAction';
const Dashboard = () => {
    const medicamentlist=useSelector((state)=>state.medicamentlist);
    const stockList=useSelector((state)=>state.stockList);
    const achatList = useSelector((state) => state.achatList);
    const { achats } = achatList;
    const {medicaments}=medicamentlist;
    const {stocks,loading}=stockList;
    const coutMedicament=medicaments.length;
    const coutAchat=achats.length;
    const sumStock = stocks.reduce(
        (previousValuer, currentValue) => previousValuer + currentValue.qte,
        0
      );
      
    //  console.log(sumStock)
    const dispatch= useDispatch();
    useEffect(async()=>{
        dispatch(listStock());
        dispatch(listMedicament());
    },[dispatch]);
    return (
        <div className='dasboard'>
            <div className='widgets'>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Medicament</span>
                        <span className='counter'>{coutMedicament}</span>
                        <Link to='/admin/medicament' className='link'>Liste medicament</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            
                        </div>
                        <MedicationIcon className='incon' style={{backgroundColor: "#3B7A57"}} />
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Stock</span>
                        <span className='counter'>{sumStock}</span>
                        <Link to='/admin/stock' className='link'>Liste stock</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            {25} %
                        </div>
                        <InventoryIcon className='incon' style={{backgroundColor: "#C46210"}}/>
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Achat</span>
                        <span className='counter'>{coutAchat}</span>
                        <Link to='/admin/achat' className='link'>Details achats</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            {25} %
                        </div>
                        <ShoppingCartIcon className='incon' style={{backgroundColor: "#84DE02"}}/>
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Vente</span>
                        <span className='counter'>{45}</span>
                        <Link to='/admin/medicament' className='link'>Details Vente</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            {25} %
                        </div>
                        <PointOfSaleIcon className='incon' style={{backgroundColor: "aqua"}}/>
                    </div>
                </div>
            </div>
            <div className='charts'>
            <Featured/>
            <Chart/>              
            </div>           
        </div>
    );
};

export default Dashboard;