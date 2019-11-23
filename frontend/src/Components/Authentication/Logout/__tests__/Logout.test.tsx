import Authenticator from '../../../../Helpers/Authenticator';
import Logout, { LogoutProps } from '../Logout'
import { shallow } from 'enzyme';
import React from 'react';


describe('Logout component', () => {

    it('should automatically logout when rendered', () => {

        //Arrange
        const props = createLogoutPropsMock();

        //Act
        shallow(<Logout {...props} />);

        //Assert
        expect(props.authenticator.logout).toBeCalledTimes(1);
    });

    it('should display information in case logout failure', () => {
        //Arrange
        const props = createLogoutPropsMock();

        //Act
        const underTest = shallow(<Logout {...props} />);

        //Assert
        expect(underTest.text()).toEqual(`If you're not redirected to login page please close web browser tab.`);
    });


    const createLogoutPropsMock = (): LogoutProps => {
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

