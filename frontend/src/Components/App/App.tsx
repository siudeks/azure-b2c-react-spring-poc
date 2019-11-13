import React from 'react';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import * as Msal from 'msal';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {

  const policy: string = process.env.REACT_APP_B2C_POLICY;
  const clientId: string = process.env.REACT_APP_B2C_CLIENTID;
  const tenantName: string = process.env.REACT_APP_B2C_TENANT_NAME;

  let msalConfig: Msal.Configuration = {
    auth: {
      clientId: clientId,
      authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policy}`,
      validateAuthority: false,
      postLogoutRedirectUri: "http://localhost:3000/"
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true
    }
  };

  let msalInstance = new Msal.UserAgentApplication(msalConfig);

  const logout: React.FC = () => {
    msalInstance.logout();
    return (<div>If you're not redirected to login page please close web browser tab.</div>);
  };

  return (
    <Login authenticator={msalInstance}>
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
    </Login>
  );
}

export default App;
