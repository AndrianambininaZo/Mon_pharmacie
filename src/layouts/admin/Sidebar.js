import React from 'react'
import styled from 'styled-components'
import './sidebar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'
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
import DropNav from './DropNav'

const Sidebar = () => {
  const red = 'red';
  const navigate = useNavigate();
  const handleLogaout = (e) => {
    e.preventDefault();
    //localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <span>Ph<span className='style'>a</span>macies</span>
      </div>
      <div className='center'>
        <ul>
          <span className='title'>MAIN</span>
          <li className='li'>
            <Link to='/admin'><HomeIcon className='incon' />Dashboard</Link>
          </li>
          <li className='li'>
            <Link to='/admin/'><AnalyticsIcon className='incon' />Stast</Link>
          </li>
          <DropNav/>       
          <span className='title'>USERFUL</span>
          <li className='li'>
            <Link to='/admin'><NotificationsNoneIcon className='incon' />Notification</Link>
          </li>
          <li className='li'>
            <Link to='/admin'><SettingsIcon className='incon' />Paramètres</Link>
          </li>
          <span className='title'>USER</span>
          <li className='li'>
            <Link to='/admin'><AccountCircleIcon className='incon' />Profile</Link>
          </li>
          <li className='li'>
            <Link to='/admin' onClick={handleLogaout}><LogoutIcon className='incon' />Logout</Link>
          </li>
        </ul>
      </div>

      <div className='botton'>
      </div>
    </div>
  )
}

export default Sidebar