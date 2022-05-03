import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Shop from './components/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className='app'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Shop />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;
