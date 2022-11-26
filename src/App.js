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
import VenteSans from './componets/admin/vente/VenteSans';
import VenteAvec from './componets/admin/vente/VenteAvec';
import ListeVente from './componets/admin/vente/ListeVente';
import DetailVente from './componets/admin/vente/DetailVente';
import Test from './componets/admin/vente/Test';
import Statistique from './componets/admin/Statistique/Statistique';
import Notification from './componets/admin/notification/Notification';
import Profil from './componets/admin/profil/Profil';
const App = () => {
  axios.defaults.baseURL = 'https://localhost:7036/';
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test/>} />
        <Route path='admin' element={<MasterLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='statistique' element={<Statistique/>} />
          <Route path='medicament' element={<Medicament/>} />
          <Route path='notification' element={<Notification/>} />
          <Route path='profil' element={<Profil/>} />
          <Route path='famille' element={<Famille/>} />
          <Route path='medicament' element={<Medicament/>} />
          <Route path='fournisseur' element={<Fournisseur/>} />
          <Route path='client' element={<Client/>}/>
          <Route path='parametre' element={<Parametre/>}/>
          <Route path='stock' element={<Stock/>}/>
          <Route path='commande' element={<Achat/>}/>
          <Route path='achat' element={<AchatListe/>}/>
          <Route path='detailCommande/:id' element={<DetailCommande/>}/>
          <Route path='ventesans' element={<VenteSans/>}/>
          <Route path='listesans' element={<ListeVente/>}/>
          <Route path='detailVente/:id' element={<DetailVente/>}/>
        </Route>
        <Route path='*' element={<PageNot/>} />        
      </Routes>
    </div>
  );
};
export default App;