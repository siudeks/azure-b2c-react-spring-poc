declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_B2C_POLICY: string;
        REACT_APP_B2C_CLIENTID: string;
        REACT_APP_B2C_SCOPE: string;
        REACT_APP_B2C_RESPONSE_TYPE: string;
        REACT_APP_B2C_TENANT_NAME: string;
        REACT_APP_B2C_REDIRECT_HOST: string;
        REACT_APP_B2C_REDIRECT_PORT: string;
    }
}