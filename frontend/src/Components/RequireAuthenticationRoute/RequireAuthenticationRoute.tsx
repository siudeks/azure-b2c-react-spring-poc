import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom';


export interface RequireAuthenticationRouteProps extends RouteProps {
    isAuthenticate: Boolean,
    redirect: string
}

const  RequireAuthenticationRoute: React.FC<RequireAuthenticationRouteProps> = (props: RequireAuthenticationRouteProps) => {

    return (
        <Route {...props}>
            {props.isAuthenticate ? (props.children) : (<Redirect to={{ pathname: props.redirect }} />)}
        </Route>
    );
}

export default RequireAuthenticationRoute;
