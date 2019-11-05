import React, { useState } from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";
import { History } from 'history';
import AuthenticationService from '../../Services/Interfaces/AuthenticateService';

type LoginProps = {
    authenticationService: AuthenticationService
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

    // useHistory force us to use function component
    let history: History = useHistory();
    let authenticationService: AuthenticationService = props.authenticationService;

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    function Authenticate(): void {
        if(authenticationService.Authenticate(userName, password)){
            history.push('/dashbaord');
            return;
        }
        setError('Login fail.');
    }

    return (
        <div className='login-form'>
            <div className='login-border'>
                <h1>Welcome</h1>
                <div>
                    <div>
                        <input placeholder='Username'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUserName(e.target.value)}}
                            value={userName} />
                    </div>
                    <div>
                        <input placeholder='Password'
                            type='password'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
                            value={password} />
                    </div>
                    <button onClick={Authenticate}>Login</button>
                    <div className='login-error'>{error}</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
