import React from 'react'
import Menu from './components/Menu'
import Slider from './components/Slider'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Item from './components/Item'

export default function App()
{
  return <>
     <div class="hero_area">
      <Menu/>
      <Slider/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/item" element={<Item/>}></Route>
    </Routes>  
  </>
}

