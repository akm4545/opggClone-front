import React from 'react';
import {Route} from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </>
  )
}

export default App;
