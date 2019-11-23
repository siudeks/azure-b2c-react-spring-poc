import QueryResultDisplayer, { QueryResultDisplayerProps } from '../QueryResultDisplayer';
import { shallow } from 'enzyme';
import React from 'react';
import { ApolloError } from 'apollo-boost';


describe('QueryResultDisplayer component', () => {

    const helloWorldText = "Hello World!";

    it('should display loading indicator when query is loading', () => {
        //Arrange
        const props: QueryResultDisplayerProps = { loading: true, error: undefined }

        //Act
        const underTeest = shallow(<QueryResultDisplayer {...props} ><div>{helloWorldText}</div></QueryResultDisplayer>);

        //Assert
        expect(underTeest.text()).toEqual("Loading...");
    });

    it('should display error when query return error', () => {
        //Arrange
        const errorMessage = "Query Error";
        const props: QueryResultDisplayerProps = { loading: false, error: new ApolloError({ errorMessage: errorMessage }) }

        //Act
        const underTeest = shallow(<QueryResultDisplayer {...props} ><div>{helloWorldText}</div></QueryResultDisplayer>);

        //Assert
        expect(underTeest.text()).toEqual(expect.stringMatching(errorMessage));
        expect(underTeest.text()).not.toEqual(expect.stringMatching(helloWorldText));
    });

    it(`should display children when query is NOT loading and DON'T have error`, () => {
        //Arrange
        const props: QueryResultDisplayerProps = { loading: false, error: undefined };

        //Act
        const underTeest = shallow(<QueryResultDisplayer {...props} ><div>{helloWorldText}</div></QueryResultDisplayer>);

        //Assert
        expect(underTeest.text()).toEqual(helloWorldText);
    });

})
