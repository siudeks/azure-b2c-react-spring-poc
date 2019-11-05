import AuthenticationService from './Interfaces/AuthenticateService'

class AuthenticationServiceStub implements AuthenticationService {

    Authenticate(username: string, passsword: string): Boolean {
        let isAuthenticate = (username === 'root' && passsword === 'toor');
        console.log(`Authenticate ${isAuthenticate ? 'success' : 'fail'} for ${username} ${passsword}`);
        return isAuthenticate;
    }
}

export default AuthenticationServiceStub;