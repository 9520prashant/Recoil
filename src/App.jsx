import React from 'react';
import "./App.css"
import Todos from './components/Todos';
import { RecoilRoot } from 'recoil';
import { Typography } from '@mui/material';

const App = () => {
  return (
        <>
            <RecoilRoot>
            <Typography variant='h4' className='typography' marginTop={5}>Moye Moye</Typography>
            <Todos/>
            </RecoilRoot>
        </>
  )
}

export default App
