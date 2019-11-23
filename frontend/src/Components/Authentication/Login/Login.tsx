import React, { useState, PropsWithChildren } from 'react';
import Authenticator from '../../../Helpers/Authenticator';

export interface LoginProps {
    authenticator: Authenticator
}

const Login: React.FC<PropsWithChildren<LoginProps>> = ({ authenticator, children }) => {

    const [isAuthError, setIsAuthError] = useState(false);

    let msalAuthenticationParameters = { scopes: [process.env.REACT_APP_B2C_SCOPE] };

    authenticator.handleRedirectCallback((error, response) => {
        if(!error) return;
        setIsAuthError(true);
        console.log(error);
        console.log(response);
    });

    if (!authenticator.getAccount()) {

        if (isAuthError) {
            return (
                <div>
                    Authentication error occurred.
                </div>
            );
        }

        authenticator.loginRedirect(msalAuthenticationParameters);

        return (
            <div>
                You will be redirected to the login page.
            </div>
        );
    }

    return children as React.ReactElement;
};

export default Login;