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
import { listVentes } from '../../redux/actions/VenteAction';
import { DataArray } from '@mui/icons-material';
const Dashboard = () => {
    const today = new Date();
    const dd = String(today. getDate()). padStart(2, '0');// afara ----padEnd(), 
    const mois = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    const yyyy = today. getFullYear();
    const DateEntre =yyyy +'-' + mois +'-'+ dd;


    const medicamentlist=useSelector((state)=>state.medicamentlist);
    const stockList=useSelector((state)=>state.stockList);
    const achatList = useSelector((state) => state.achatList);
    const venteList = useSelector((state) => state.venteList);    
    const {ventes}=venteList;
    const venteAujourdui=ventes.filter(res=>{
        return res.date=== DateEntre;
    });
    const totalVente=venteAujourdui.reduce((prev,current)=>
    prev +current.montantTotal, 0

    );    
    
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
        dispatch(listVentes());
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
                            
                        </div>
                        <InventoryIcon className='incon' style={{backgroundColor: "#C46210"}}/>
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Achat</span>
                        <span className='counter'>{coutAchat}</span>
                        <Link to='/admin/listesans' className='link'>Details achats</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            
                        </div>
                        <ShoppingCartIcon className='incon' style={{backgroundColor: "#84DE02"}}/>
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Vente(AuJourd'hui)</span>
                        <span className='counter'>${totalVente}</span>
                        <Link to='/admin/medicament' className='link'>Details Vente</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            
                        </div>
                        <PointOfSaleIcon className='incon' style={{backgroundColor: "aqua"}}/>
                    </div>
                </div>
            </div>
            <div className='charts'>
            <Featured total={totalVente}/>
            <Chart/>              
            </div>           
        </div>
    );
};

export default Dashboard;