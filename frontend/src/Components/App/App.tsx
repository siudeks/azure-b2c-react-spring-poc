import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RequireAuthenticationRoute from '../RequireAuthenticationRoute/RequireAuthenticationRoute';

const App: React.FC = () => {

  const [authToken, setAuthToken] = useState<string>("");
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"                 render={(props) => <Login {...props} onAuthenticate={setAuthToken} redirect="/dashbaord" />} />
        <Route exact path="/login"            render={(props) => <Login {...props} onAuthenticate={setAuthToken} redirect="/dashbaord" />} />
        <Route exact path="/#id_token=:token" render={(props) => <Login {...props} onAuthenticate={setAuthToken} redirect="/dashbaord" />} />

        <RequireAuthenticationRoute isAuthenticate={Boolean(authToken)} redirect="/login" path="/dashbaord">
          <Dashboard />
        </RequireAuthenticationRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
