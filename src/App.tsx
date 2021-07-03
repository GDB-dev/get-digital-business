import React from 'react';
import './App.css';
import { Buttons } from './components/Button/Button'
import { Appbar } from './components/Appbar/Appbar'
import  Cards  from './components/Card/Cards'
import HeroBanner from './components/HeroBanner/HeroBanner'

const App: React.FC = () => {
  return (
    <div>
        <Appbar />
        <HeroBanner url='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80'></HeroBanner>
        <Buttons variant='Primary' style='secondary' />
        <Cards></Cards> <Cards></Cards>
    </div >
  )
}

export default App;


