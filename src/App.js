import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './componets/front/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MasterLayout from './componets/admin/MasterLayout';
import Dashboard from './componets/admin/Dashboard';
import Medicament from './componets/admin/medicament/Medicament';
import Famille from './componets/admin/familleFournis/Famille';
import PageNot from './componets/admin/PageNot/PageNot';
import axios from 'axios';
import Fournisseur from './componets/admin/Fournisseur.js/Fournisseur';
import Client from './componets/admin/vente/Client';
import Parametre from './componets/admin/parametre/Parametre';
import Stock from './componets/admin/stock/Stock';
import Achat from './componets/admin/achat/Achat';
import AchatListe from './componets/admin/achat/AchatListe';
import DetailCommande from './componets/admin/achat/DetailCommande';
const App = () => {
  axios.defaults.baseURL = 'https://localhost:7036/';
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<MasterLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='medicament' element={<Medicament/>} />
          <Route path='famille' element={<Famille/>} />
          <Route path='medicament' element={<Medicament/>} />
          <Route path='fournisseur' element={<Fournisseur/>} />
          <Route path='client' element={<Client/>}/>
          <Route path='parametre' element={<Parametre/>}/>
          <Route path='stock' element={<Stock/>}/>
          <Route path='commande' element={<Achat/>}/>
          <Route path='achat' element={<AchatListe/>}/>
          <Route path='detailCommande/:id' element={<DetailCommande/>}/>
        </Route>
        <Route path='*' element={<PageNot/>} />        
      </Routes>
    </div>
  );
};
export default App;