import React from 'react';
import './App.css';
import HomePage from './Componnet/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import AboutUs from './Componnet/AboutUs';
import AllServices from './Componnet/AllServices';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/all-services' element={<AllServices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
