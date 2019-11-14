import React from 'react';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import createAuthenticator from '../../Helpers/AuthenticatorFactory'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const App: React.FC = () => {

  // Dependencies
  const msalInstance = createAuthenticator();
  const apolloClient = new ApolloClient();

  const logout: React.FC = () => {
    msalInstance.logout();
    return (<div>If you're not redirected to login page please close web browser tab.</div>);
  };

  return (
    <Login authenticator={msalInstance}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/logout">
              {logout}
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </Login>
  );
}

export default App;
