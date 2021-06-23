import React from 'react';
import './App.css';
import { Buttons } from './components/Button/Button'
import { Appbar } from './components/Appbar/Appbar'
import  Cards  from './components/Card/Cards'
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Container maxWidth='xl' >
        <Appbar />
        <Buttons variant='Primary' />
        <Cards  />
      </Container>
    </div >
  )
}

export default App;


