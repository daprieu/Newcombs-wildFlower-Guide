import React from 'react';
import './App.css';
import { FiveQForm } from './forms/FiveQForm';
import LocatorKey from './locatorKey/LocatorKey';
import { LocatorKeyProvider } from './providers/LocatorKeyProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import FormStepper from './forms/stepperForm/FormStepper';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container maxWidth="md">
        <LocatorKeyProvider>
        <FormStepper/>
        
        {/* <LocatorKey/> */}
        </LocatorKeyProvider>
        </Container>
      </header>
    </div>
  );
}

export default App;
