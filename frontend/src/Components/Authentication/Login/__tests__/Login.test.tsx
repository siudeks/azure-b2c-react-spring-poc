import Authenticator from '../../../../Helpers/Authenticator';
import { authResponseCallback } from "msal/lib-commonjs/UserAgentApplication";
import Login, { LoginProps } from '../Login'
import { shallow } from 'enzyme';
import React from 'react';
import { Account, AuthError } from 'msal';


describe('Login component', () => {

    const helloWorldText = "Hello World!";


    it('should automatically redirect to login page when rendered', () => {

        //Arrange
        const props = createLoginPropsMock();

        //Act
        shallowRenderLoginComponent(props);

        //Assert
        expect(props.authenticator.loginRedirect).toBeCalledTimes(1);
    });

    it('should display information about redirecting', () => {

        //Arrange
        const props = createLoginPropsMock();

        //Act
        const underTest = shallowRenderLoginComponent(props);

        //Assert
        expect(underTest.text()).toEqual("You will be redirected to the login page.");
    });

    it('should NOT display children component when NOT authenticated', () => {

        //Arrange
        const props = createLoginPropsMock();

        //Act
        const underTest = shallowRenderLoginComponent(props);

        //Assert
        expect(underTest.text()).not.toEqual(helloWorldText);
    });

    it('should display children component when authenticated', () => {

        //Arrange
        const props = createLoginPropsMock();
        const getAccountMock = jest.fn().mockReturnValue(createEmptyAccount());
        const propsWithGetAccountMock = { authenticator: { ...props.authenticator, getAccount: getAccountMock } };

        //Act
        const underTest = shallowRenderLoginComponent(propsWithGetAccountMock);

        //Assert
        expect(underTest.text()).toEqual(helloWorldText);
    });


    it('should display information about authentication error when occurred', () => {

        //Arrange
        const props = createLoginPropsMock();

        let wasCalled = false;
        const callbackFn = (authCallback: authResponseCallback) => {
            if(wasCalled) return;
            wasCalled = true;
            authCallback(new AuthError("1"));
        }
  
        const handleRedirectCallbackMock = jest.fn(callbackFn);
        const propsWitHhandleRedirectCallbacktMock = { authenticator: { ...props.authenticator, handleRedirectCallback: handleRedirectCallbackMock } };

        //Act
        const underTest = shallowRenderLoginComponent(propsWitHhandleRedirectCallbacktMock);

        //Assert
        expect(underTest.text()).toEqual("Authentication error occurred.");
    });

    //Helper
    const shallowRenderLoginComponent = (props: LoginProps) => {
        return shallow(
            <Login {...props} >
                <div>{helloWorldText}</div>
            </Login>
        );
    }

    const createLoginPropsMock = (): LoginProps => {
        const authenticatorMock: Authenticator = {
            logout: jest.fn(),
            handleRedirectCallback: jest.fn(),
            getAccount: jest.fn(),
            loginRedirect: jest.fn()
        };


        return {
            authenticator: authenticatorMock
        };
    }

    const createEmptyAccount = (): Account => new Account("", "", "", "", {}, "", "");

});

