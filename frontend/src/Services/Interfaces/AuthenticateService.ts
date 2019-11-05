interface AuthenticationService {
    IsAuthenticate(): Boolean;

    Authenticate(username: string, passsword: string): Boolean;
}

export default AuthenticationService;