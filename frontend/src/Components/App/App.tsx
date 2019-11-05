import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthenticationServiceStub from '../../Services/AuthenticationServiceStub';
import AuthenticationService from '../../Services/Interfaces/AuthenticateService';

const App: React.FC = () => {

  let authService: AuthenticationService = new AuthenticationServiceStub();

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login authenticationService={authService} />
      </Route>
      <Route exact path="/login">
        <Login authenticationService={authService} />
      </Route>
      <Route path="/dashbaord" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
