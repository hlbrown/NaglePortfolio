// import logo from './logo.svg';
import React from 'react';
import Home from './components/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      
    </ThemeProvider>
  
  );
  
}

export default App;
