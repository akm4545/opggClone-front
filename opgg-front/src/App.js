import React from 'react';
import {Route} from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TempIndex from './pages/TempIndex';
import LeaderboardPage from './pages/LeaderboardPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TempIndex/>}></Route>
        <Route path="/leaderboards" element={<LeaderboardPage/>} ></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/main" element={MainPage}></Route>
      </Routes>
    </>
  )
}

export default App;