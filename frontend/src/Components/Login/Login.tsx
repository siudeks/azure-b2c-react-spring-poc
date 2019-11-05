import React, { Component } from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {

    // useHistory force us to use function component
    let history = useHistory();

    return (
        <div className='login-form'>
            <div className='login-border'>
                <h1>Welcome</h1>
                <div>
                    <div>
                        <input placeholder='Username' />
                    </div>
                    <div>
                        <input placeholder='Password' type='password' />
                    </div>
                    <button onClick={() => { history.push('/dashbaord') }}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
