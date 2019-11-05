import React,{ useState }   from 'react';
import './App.css';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RequireAuthenticationRoute from '../RequireAuthenticationRoute/RequireAuthenticationRoute';

const App: React.FC = () => {

  const [isAuthenticate,setIsAuthenticate] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login onAuthenticate={setIsAuthenticate} />
        </Route>
        <Route exact path="/login">
          <Login onAuthenticate={setIsAuthenticate} />
        </Route>
        <RequireAuthenticationRoute isAuthenticate={isAuthenticate} redirect="/login" path="/dashbaord">
          <Dashboard />
        </RequireAuthenticationRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
