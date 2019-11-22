import { authResponseCallback } from "msal/lib-commonjs/UserAgentApplication";
import { AuthenticationParameters, Account } from "msal";

export default interface Authenticator {
    logout(): void;
    handleRedirectCallback(authCallback: authResponseCallback): void;
    getAccount(): Account;
    loginRedirect(request?: AuthenticationParameters): void;
}