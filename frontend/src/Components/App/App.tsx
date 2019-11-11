import React, { useState } from 'react';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'; temp commented

const App: React.FC = () => {

  return (
    <Login>
      <Dashboard />
    </Login>
  );
}

export default App;
