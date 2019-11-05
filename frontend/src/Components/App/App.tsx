import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/dashbaord" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
