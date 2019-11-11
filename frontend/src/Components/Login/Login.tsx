import React, { Component } from 'react';
import * as Msal from 'msal';

export default class Login extends Component {

    private msalInstance: Msal.UserAgentApplication;
    private msalAuthenticationParameters: Msal.AuthenticationParameters;
    //private authResponse?: Msal.AuthResponse;
    private autheError?: Msal.AuthError;

    constructor() {
        super({});

        const policy:       string = process.env.REACT_APP_B2C_POLICY;
        const clientId:     string = process.env.REACT_APP_B2C_CLIENTID;
        const scope:        string = process.env.REACT_APP_B2C_SCOPE;
        const tenantName:   string = process.env.REACT_APP_B2C_TENANT_NAME;

        let msalConfig: Msal.Configuration = {
            auth: {
                clientId: clientId,
                authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policy}`,
                validateAuthority: false,
                navigateToLoginRequestUrl: false
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: true
            }
        };

        this.msalAuthenticationParameters = { scopes: [scope] };

        this.msalInstance = new Msal.UserAgentApplication(msalConfig);

        this.msalInstance.handleRedirectCallback((error, response) => {
            //this.authResponse = response;
            this.autheError = error;
        });
    }

    render() {

        if (!this.msalInstance.getAccount()) {

            if (this.autheError) {
                return(<div>Login error</div>);
            }

            this.msalInstance.loginRedirect(this.msalAuthenticationParameters);
            return (
                <div>
                    You will be redirected to the login page.
                </div>
            );
        }

        console.log(this.msalInstance.getAccount());

        return this.props.children;
    }
}