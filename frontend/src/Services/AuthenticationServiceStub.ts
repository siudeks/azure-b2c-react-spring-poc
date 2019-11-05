import AuthenticationService from './Interfaces/AuthenticateService'

class AuthenticationServiceStub implements AuthenticationService {

    isAuthenticate: Boolean = false;

    IsAuthenticate(): Boolean {
        return this.isAuthenticate;
    }

    Authenticate(username: string, passsword: string): Boolean {
        this.isAuthenticate = (username === 'root' && passsword === 'toor');
        console.log(`Authenticate ${this.isAuthenticate ? 'success': 'fail'} for ${username} ${passsword}`);
        return this.isAuthenticate;
    }
}

export default AuthenticationServiceStub;