import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './componets/front/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MasterLayout from './componets/admin/MasterLayout';
import Medicament from './componets/admin/Medicament';
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<MasterLayout/>}>
          <Route index element={/*<Dashboard/>*/ "salut"} />
          <Route path='medicament' element={<Medicament/>} />
          <Route index element={/*<Dashboard/>*/ "salut"} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;