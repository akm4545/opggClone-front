import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MainPage from './pages/MainPage';
import MultiSearchPage from './pages/MultiSearchPage';
import SummonerPage from './pages/SummonerPage';
import BoardMainPage from './pages/BoardMainPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/main"/>}></Route>
        <Route path="/leaderboards" element={<LeaderboardPage/>} ></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path="/multiSearch" element={<MultiSearchPage/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path="/summoner/kr" element={<SummonerPage/>}></Route>
        <Route path="/board" element={<BoardMainPage/>}></Route>
      </Routes>
    </>
  )
}

export default App;