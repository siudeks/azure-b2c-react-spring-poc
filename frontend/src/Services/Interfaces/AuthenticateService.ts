interface AuthenticationService {

    Authenticate(username: string, passsword: string): Boolean;
}

export default AuthenticationService;