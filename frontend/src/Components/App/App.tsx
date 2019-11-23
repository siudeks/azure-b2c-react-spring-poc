import React from 'react';
import Login from '../Authentication/Login/Login';
import Logout from '../Authentication/Logout/Logout';
import Dashboard from '../Dashboard/Dashboard';
import createAuthenticator from '../../Helpers/AuthenticatorFactory'
import createApolloClient from '../../Helpers/ApolloClientFactory'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';

const App: React.FC = () => {

  // Dependencies
  const msalInstance = createAuthenticator();
  const apolloClient = createApolloClient();

  return (
    <Login authenticator={msalInstance}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/logout">
              <Logout authenticator={msalInstance}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </Login>
  );
}

export default App;
