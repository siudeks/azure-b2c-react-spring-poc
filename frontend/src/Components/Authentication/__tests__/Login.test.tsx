import Authenticator from '../../../Helpers/Authenticator';
import Login, { LoginProps } from '../Login'
import { shallow } from 'enzyme';
import React from 'react';


describe('Login component', () => {


    it('should automatically redirect to login page when rendered', () => {

        //Arrange
        const props = createLoginPropsMock();

        //Act
        shallow(<Login {...props} ></Login>);

        //Assert
        expect(props.authenticator.loginRedirect).toBeCalledTimes(1);
    });

  
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

});

