import React from 'react';
import './App.css';
import MainRouter from './components/Routers/Router';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000/';

function App() {
  return (
    <React.Fragment>
      <MainRouter />
    </React.Fragment>
  );
}

export default App;
