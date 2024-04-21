import React from 'react';
import './App.css';
import HomePage from './Componnet/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
