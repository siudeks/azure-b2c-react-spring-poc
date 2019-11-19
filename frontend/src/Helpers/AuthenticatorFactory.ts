import * as Msal from 'msal';


const createAuthenticator = () => {

    const policy:       string = process.env.REACT_APP_B2C_POLICY;
    const clientId:     string = process.env.REACT_APP_B2C_CLIENTID;
    const tenantName:   string = process.env.REACT_APP_B2C_TENANT_NAME;

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

    return new Msal.UserAgentApplication(msalConfig);
}

export default createAuthenticator;