import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MedicationIcon from '@mui/icons-material/Medication';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link, useNavigate } from 'react-router-dom'
import './dropNav.scss'
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { data } from './DropData'
const DropNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={open ? 'dropNav open' : 'dropNav'}>
            <span className='title'>SERVICE</span>
            <div className='titlee'>
                <div className='item'>
                    <SettingsIcon className='incon-1' />
                    <span>Medicament</span>
                </div>
                <KeyboardArrowUpIcon className='toglge-btn' onClick={() => setOpen(!open)} />
            </div>
            <div className='sidebar-content'>
                <Link to='/'>Helooo</Link>
            </div>
        </div>
    );
};

export default DropNav;