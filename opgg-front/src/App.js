import React from 'react';
import {Route} from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </>
  )
}

export default App;
