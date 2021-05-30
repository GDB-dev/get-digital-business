import React from 'react';
import './App.css';
import { Buttons } from './components/Button/Button'
import { Appbar } from './components/Appbar/Appbar'


const App: React.FC = () => {
  return (
    <div>
      <Appbar />
      <Buttons variant='Primary' />
    </div>
  )
}

export default App;