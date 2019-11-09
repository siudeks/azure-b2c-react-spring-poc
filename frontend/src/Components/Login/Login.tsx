import React from 'react'
import { Redirect, RouteComponentProps } from "react-router-dom";

interface LoginProps extends RouteComponentProps {
    onAuthenticate: Function,
    redirect: string,
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

    const policy:       string = process.env.REACT_APP_B2C_POLICY;
    const clientId:     string = process.env.REACT_APP_B2C_CLIENTID;
    const scope:        string = process.env.REACT_APP_B2C_SCOPE;
    const responseType: string = process.env.REACT_APP_B2C_RESPONSE_TYPE;
    const tenantName:   string = process.env.REACT_APP_B2C_TENANT_NAME;
    const host:         string = process.env.REACT_APP_B2C_REDIRECT_HOST;
    const port:         string = process.env.REACT_APP_B2C_REDIRECT_PORT;

    const url: string = `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/oauth2/v2.0/authorize?` +
        `p=${policy}&` +
        `client_id=${clientId}&` +
        `nonce=defaultNonce&` +
        `redirect_uri=http%3A%2F%2F${host}%3A${port}%2F&` +
        `scope=${scope}&` +
        `response_type=${responseType}&` +
        `prompt=login`;


    const params: string[] = props.location.hash.split("=");

    if (params.length === 2 && params[0] === `#${responseType}`) {
        props.onAuthenticate(params[1]);
        return (<Redirect to={{ pathname: props.redirect }} />);
    }

    window.location.replace(url);

    return (
        <div>
            You will be redirected to the <a href={url}>login page</a>.
       </div>
    );
}

export default Login;
