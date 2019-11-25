import Dashboard from '../Dashboard';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { useAllBooksQuery, AllBooksQuery, AllBooksQueryVariables } from '../../.generated/components';
import { QueryHookOptions } from '@apollo/react-hooks';




describe('Dashboard component', () => {

    beforeAll(() => {
        //This line is necessary to mock generated hooks
        const componentsModule = require('../../.generated/components');
        componentsModule[useAllBooksQuery.name] = useAllBooksQueryMock;
    });

    beforeEach(() => {
        useAllBooksQueryMock.mockClear();
        useAllBooksQueryMock.mockImplementation(createMockForUseAllBooksQuery());
        
    });

    it('should display logout link', () => {
        //Arrange

        //Act
        //mount is necessary in case of HOC
        const underTest = mount(<MemoryRouter><Dashboard /></MemoryRouter>);

        //Assert
        expect(underTest.exists('a[href="/logout"]')).toBeTruthy();
    });

    it('should display empty search box', () => {
        //Arrange

        //Act
        const underTest = shallow(<Dashboard />);

        //Assert
        const input = underTest.find('.searh-input');
        expect(input.exists()).toBeTruthy();
        expect(input.prop('value')).toEqual('');
    });

    it('should query for book list when rendered', () => {
        //Arrange

        //Act
        shallow(<Dashboard />);

        //Assert
        expect(useAllBooksQueryMock).toBeCalledTimes(1);

    });

    it('should display book list', () => {
        //Arrange
        const queryResult: AllBooksQuery = {
            books: [
                {
                    id: 1,
                    name: 'My life...',
                    author:
                    {
                        id: 1, name: 'Jaroslaw', surname: 'Goslawski'
                    }
                }
            ]
        };

        useAllBooksQueryMock.mockImplementation(createMockForUseAllBooksQuery({ data: queryResult, loading: false, error: undefined }));

        //Act
        const underTest = shallow(<Dashboard />).find('QueryResultDisplayer').shallow();

        //Assert
        const booksList = underTest.find('BooksList').prop<AllBooksQuery >('books');
        expect(booksList).toEqual([...queryResult.books|| []]); // || [] is for suppres VS code error
    });

    it('should NOT display book list when query return empty list', () => {
        //Arrange

        //Act
        const underTest = shallow(<Dashboard />).find('QueryResultDisplayer').shallow();

        //Assert
        const booksList = underTest.find('BooksList').prop('books');
        expect(booksList).toEqual([]);

    });

    it('should display filtered book list when user pass book name to search box', () => {
        //Arrange
        const queryResult: AllBooksQuery = {
            books: [
                {
                    id: 1,
                    name: 'My life...',
                    author:
                    {
                        id: 1, name: 'Jaroslaw', surname: 'Kowalski'
                    }
                },
                {
                    id: 2,
                    name: 'The NoName',
                    author:
                    {
                        id: 2, name: 'John', surname: 'Doe'
                    }
                },
                {
                    id: 3,
                    name: 'C# and you!',
                    author:
                    {
                        id: 3, name: 'John', surname: 'Kowalski'
                    }
                }
            ]
        };

        useAllBooksQueryMock.mockImplementation(createMockForUseAllBooksQuery({ data: queryResult, loading: false, error: undefined }));

        //Act
        const dashboard = shallow(<Dashboard />);
        dashboard.find('.searh-input').simulate('change', {target: {value: 'No'}});
        const underTest = dashboard.find('QueryResultDisplayer').shallow();

        //Assert
        const booksList = underTest.find('BooksList').prop<AllBooksQuery>('books');
        expect(booksList).toEqual([queryResult.books[1]]);
    });



    //Helpers
    //type for argument is set to 'any' for better readability otherwise we will have to set ALL fields
    const createMockForUseAllBooksQuery = (returnValue: any = { data: null, loading: false, error: undefined }) => {
        return (baseOptions?: QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) => { return returnValue };
    }

    const useAllBooksQueryMock = jest.fn(createMockForUseAllBooksQuery());
});
