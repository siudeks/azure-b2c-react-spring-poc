import React from 'react';
import { Link } from 'react-router-dom';
import GetAllBooks from '../../GlobalQueries/GetAllBooks';
import { GetAllBooks as Books } from '../../GlobalQueries/types/GetAllBooks';
import { useQuery } from '@apollo/react-hooks';
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';

const Dashboard: React.FC = () => {

    const result = useQuery<Books, Books>(GetAllBooks)

    return (
        <div>
            <QueryResultDisplayer {...result} />
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
