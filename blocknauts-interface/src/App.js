import React from 'react';
import Header from './components/Header/header.js'
import MainPage from './components/MainPage/mainpage.js'
import Calltoaction from './components/Calltoaction/calltoaction.js'
import './styles/main.css'

export default function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Calltoaction />
     </div>

);

}