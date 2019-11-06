import React from 'react'
import './Login.css'
import { Redirect, Route, RouteComponentProps, withRouter } from "react-router-dom";

interface  LoginProps extends RouteComponentProps {
    onAuthenticate: Function,
    redirect: string,
}


const Login: React.FC<LoginProps> = (props: LoginProps) => {

    if (props.location.hash) {
        props.onAuthenticate(props.location.hash.split("=")[1]);//Ugly...
        return (<Redirect to={{ pathname: props.redirect }} />);
    }

    const url: string = 'https://mastergos.b2clogin.com/mastergos.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login_poc&client_id=050fb5cc-57e2-424c-9676-8d6062891d9c&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=openid&response_type=id_token&prompt=login';
    window.location.replace(url);
    return (
        <div>
            You will be redirected to the <a href={url}>login page</a>.
       </div>
    );
}

export default Login;
