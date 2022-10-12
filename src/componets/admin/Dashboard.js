import React from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MedicationIcon from '@mui/icons-material/Medication';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Featured from './chart/Featured';
import Chart from './chart/Chart';
const Dashboard = () => {
    return (
        <div className='dasboard'>
            <div className='widgets'>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Medicament</span>
                        <span className='counter'>{45}</span>
                        <Link to='/admin/medicament' className='link'>Liste medicament</Link>
                    </div>
                    <div className='right'>
                        <div className='pourcentage positive'>
                            <KeyboardArrowDownIcon />
                            {25} %
                        </div>
                        <MedicationIcon className='incon' style={{backgroundColor: "#3B7A57"}} />
                    </div>
                </div>
                <div className='widget'>
                    <div className='left'>
                        <span className='title'>Stock</span>
                        <span className='counter'>{45}</span>
                        <Link to='/admin/medicament' className='link'>Liste stock</Link>
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
                        <span className='counter'>{45}</span>
                        <Link to='/admin/medicament' className='link'>Details achats</Link>
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