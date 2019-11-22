import Authenticator from '../../../Helpers/Authenticator';
import Logout, { LogoutProps } from '../Logout'
import { shallow } from 'enzyme';
import React from 'react';


describe('Logout component', () => {

   
    it('should automatically logout when rendered', () => {

        //Arrange
        const authenticatorMock: Authenticator = {
            logout: jest.fn()
        };
        
        let props: LogoutProps = {
            authenticator: authenticatorMock
        }

        //Act
        shallow(<Logout {...props} />);

        //Assert
        expect(authenticatorMock.logout).toBeCalledTimes(1);
    });
});

