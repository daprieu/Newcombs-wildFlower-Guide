import React from 'react';
import './App.css';
import { FiveQForm } from './form/FiveQForm';
import LocatorKey from './locatorKey/LocatorKey';
import { LocatorKeyProvider } from './providers/LocatorKeyProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocatorKeyProvider>
        <FiveQForm/>
        <LocatorKey/>
        </LocatorKeyProvider>
      </header>
    </div>
  );
}

export default App;
